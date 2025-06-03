// src/components/UserCard.tsx
import React from 'react'
import type { FC } from 'react'
import type { GitHubUser } from '../types/github'

type UserCardProps = {
  user: GitHubUser
}

export const UserCard: FC<UserCardProps> = ({ user }) => (
  <div className="mt-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6">
    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-primary-500"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-semibold">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-primary-600 dark:text-primary-400"
          >
            {user.login}
          </a>
        </h2>
        {user.name && <p className="mt-1 text-lg">{user.name}</p>}
        {user.bio && <p className="mt-2 text-gray-600 dark:text-gray-400">{user.bio}</p>}
        <div className="mt-4 flex flex-wrap space-x-4 text-sm text-gray-500 dark:text-gray-400">
          {user.location && (
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zM8 8a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              {user.location}
            </span>
          )}
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
            Repos: {user.public_repos}
          </span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>

            Followers: {user.followers}
          </span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>

            Following: {user.following}
          </span>
        </div>
      </div>
    </div>
  </div>
)
