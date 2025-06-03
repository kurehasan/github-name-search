// src/pages/Home.tsx
import React, { useState } from 'react'
import axios from 'axios'
import { SearchBar } from '../components/SearchBar'
import { UserCard } from '../components/UserCard'
import { ErrorMessage } from '../components/ErrorMessage'
import type { GitHubUser } from '../types/github'

const Home: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSearch = async (username: string) => {
    setIsLoading(true)
    setError(null)
    setUser(null)

    try {
      const response = await axios.get<GitHubUser>(
        `https://api.github.com/users/${username}`
      )
      setUser(response.data)
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError('ユーザーが見つかりませんでした。')
      } else {
        setError('エラーが発生しました。時間をおいて再度お試しください。')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      {error && <ErrorMessage message={error} />}
      {user && <UserCard user={user} />}
    </div>
  )
}

export default Home
