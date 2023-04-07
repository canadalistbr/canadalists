import { ProvincesData } from '../../data/provinces'
import { Card } from './components/Card/Card'
import MaxWidthWrapper from './components/MaxWidthWrapper'

const Home = () => {
  return (
    <div className="min-h-full">
      <MaxWidthWrapper>
        <main>
          <div className="grid relative gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
            {ProvincesData.map((province) => (
              <Card
                slug={province.slug}
                key={province.id}
                title={province.name}
                image="/img/montreal.png"
              />
            ))}
          </div>
        </main>
      </MaxWidthWrapper>
    </div>
  )
}
export default Home

