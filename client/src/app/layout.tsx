// These styles apply to every route in the application
import MaxWidthWrapper from './components/MaxWidthWrapper'
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
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </body>
    </html>
  )
}
