import Head from 'next/head'

const Home = ({title = "Canada Lists"}) => {
  return (
    <div>
      <Head>
        <title>
          {title}
        </title>
      </Head>
      {title}
    </div>
  )
}

export default Home
