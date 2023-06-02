// These styles apply to every route in the application
import '../globals.css'

export const metadata = {
  title: 'Canada List',
  description: 'Move to Canada'
}

import { Nunito } from '@next/font/google'

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
      <body className="debug-screens">
        <div className={inter.className}>{children}</div>
        {/* <div className={inter.className}>{children}</div> */}
      </body>
    </html>
  )
}
