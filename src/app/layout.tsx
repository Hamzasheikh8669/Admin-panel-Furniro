import "./globals.css"

import type React from "react"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="relative min-h-screen">
          {/* Main Layout Container */}
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen">
              {/* Header */}
              <Header />

              {/* Main Content with Scrollable Area */}
              <main className="flex-1 overflow-x-hidden overflow-y-auto">
                <div className="container mx-auto px-6 py-8">{children}</div>
              </main>

              {/* Footer */}
              <footer className="bg-white border-t border-gray-200 py-4">
                <div className="container mx-auto px-6">
                  <p className="text-center text-sm text-gray-600">
                    © {new Date().getFullYear()} Your Furniture Store. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

