import React, { type FC } from 'react'
import type { GitHubUser } from '../types/github'

type UserCardProps = {
  user: GitHubUser
}

export const UserCard: FC<UserCardProps> = ({ user }) => (
  <div className="mt-6 p-4 border rounded-lg shadow-sm max-w-md">
    <img src={user.avatar_url} alt={`${user.login} avatar`} className="w-24 h-24 rounded-full mb-2" />
    <h2 className="text-xl font-semibold">
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        {user.login}
      </a>
    </h2>
    <p className="text-gray-600">{user.name}</p>
    <p className="mt-2">{user.bio}</p>
    <div className="mt-4 text-sm text-gray-500">
      <span>📍 {user.location ?? '―'}</span><br />
      <span>📦 Repos: {user.public_repos}</span> / <span>👥 Followers: {user.followers}</span> / <span>👤 Following: {user.following}</span>
    </div>
  </div>
)
