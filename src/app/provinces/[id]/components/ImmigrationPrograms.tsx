import { Immigration } from '@prisma/client'
import { Card } from 'components/Card/Card'
import Link from 'next/link'

export type ImmigrationProgramsType = {
  immigrationPrograms: Immigration[]
}

export function ImmigrationPrograms({
  immigrationPrograms
}: ImmigrationProgramsType) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(550px,1fr))]">
      {immigrationPrograms.map((program) => (
        <Link key={program.id} href={`/immigration_programs/${program.name}`}>
          <Card
            slug={program.name}
            title={`${program.name}, ${program.name}`}
            image="/img/montreal.png"
          />
        </Link>
      ))}
    </div>
  )
}
