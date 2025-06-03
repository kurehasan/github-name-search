// src/components/Layout.tsx
import React, { type FC, type ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* ヘッダー */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 ml-[30px]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold ">GitHub User Search</h1>
          {/* （将来的にナビゲーションを追加するならここに記述） */}
        </div>
      </header>

      {/* メイン */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* フッター（必要なら） */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4 text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} KurehaAsanuma
        </div>
      </footer>
    </div>
  )
}
