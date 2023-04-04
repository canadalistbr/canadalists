import Head from 'next/head'

const Home = ({ title = 'Canada Lists' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <>
        <h1 className="text-3xl font-bold underline">{title}</h1>
      </>
    </div>
  )
}

export default Home
