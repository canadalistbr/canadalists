// These styles apply to every route in the application
import Head from 'next/head'
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
      <Head>
        <title>Canada List</title>
      </Head>
      <body>{children}</body>
    </html>
  )
}
