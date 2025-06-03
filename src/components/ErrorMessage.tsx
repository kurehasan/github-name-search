import React, { type FC } from 'react'

type ErrorMessageProps = {
  message: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <div className="mt-4 text-red-600">⚠️ {message}</div>
)
