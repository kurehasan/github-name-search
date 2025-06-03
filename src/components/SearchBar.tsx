import React from 'react'
import type { FC, FormEvent } from 'react'
import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type SearchBarProps = {
  onSearch: (username: string) => void
  isLoading?: boolean
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch, isLoading = false }) => {
  const [query, setQuery] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = query.trim()
    if (trimmed) onSearch(trimmed)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full max-w-md">
      <Input
        type="text"
        placeholder="GitHub ユーザー名を入力..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow"
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        ) : (
          '検索'
        )}
      </Button>
    </form>
  )
}
