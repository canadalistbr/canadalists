// These styles apply to every route in the application
import './globals.css'

export const metadata = {
  title: 'Canada List',
  description: 'Move to Canada'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
