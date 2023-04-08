import { Card } from 'app/components/Card/Card'
import { ProvincesData } from '../../../data/provinces'

function Provinces() {
  return (
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
  )
}

export default Provinces
