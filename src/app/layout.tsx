// These styles apply to every route in the application
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Nunito } from '@next/font/google'
import Link from 'next/link'
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
      <body className="debug-screens">
        <div className={inter.className}>
          <div className='p-2 border border-b-gray-300 w-full flex gap-8 justify-center'>
            <Label>
              <Button variant={'link'}>
                <Link href={'/cities'}>
                  Cities
                </Link>
              </Button>
            </Label>
            <Label>
              <Button variant={'link'}>
                <Link href={'/provinces'}>
                  Provinces
                </Link>
              </Button>
            </Label>
            <Label>
              <Button variant={'link'}>
                <Link href={'/immigation'}>
                  Immigration
                </Link>
              </Button>
            </Label>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
