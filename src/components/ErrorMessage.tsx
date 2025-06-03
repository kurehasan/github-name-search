import React, { type FC } from 'react'

type ErrorMessageProps = {
  message: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <div className="mt-4 flex items-center bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-md p-3">
    <p className="text-red-800 dark:text-red-200 text-sm">{message}</p>
  </div>
)
