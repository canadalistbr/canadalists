// These styles apply to every route in the application
import { ComparisonProvider } from 'context/ComparisonContext'
import { Nunito } from 'next/font/google'
import '../globals.css'

export const metadata = {
  title: 'Canada List',
  description: 'Move to Canada'
}

const inter = Nunito({
  weight: '500',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="debug-screens relative">
        <ComparisonProvider>
          <div className={inter.className}>{children}</div>
        </ComparisonProvider>
      </body>
    </html>
  )
}
