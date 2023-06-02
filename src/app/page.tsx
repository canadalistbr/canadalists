import Provinces from './provinces/page'

const Home = () => {
  return (
    <main className="min-h-full">
      {/* @ts-expect-error Server Component */}
      <Provinces />
    </main>
  )
}
export default Home
