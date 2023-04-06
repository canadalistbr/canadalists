import Image from 'next/image'
import MaxWidthWrapper from './components/MaxWidthWrapper'
const Home = () => {
  return (
    <div className="min-h-full">
      <MaxWidthWrapper>
        <main>
          <Image src="/img/montreal.png" alt={'title'} width={640} height={426} />
        </main>
      </MaxWidthWrapper>
    </div>
  )
}

export default Home
