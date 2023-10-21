import Cities from './cities/page'

const Home = () => {
  return (
    <main className="min-h-full">
      {/* @ts-expect-error Server Component */}
      <Cities />
    </main>
  )
}
export default Home
