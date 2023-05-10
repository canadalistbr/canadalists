import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.province.deleteMany()
  const province = await prisma.province.createMany({
    data: [
      {
        name: 'Quebec',
        capital: 'Quebec City',
        immigrationRanking: 5,
        slug: 'QC',
        language: ['FR','EN'],
        topCities: ['Gatineau', 'Montréal', 'Quebec City']
      },
      {
        name: 'British Columbia',
        capital: 'Victoria',
        slug: 'BC',
        immigrationRanking: 3,
        language: ['EN'],
        topCities: ['Vancouver', 'Surrey', 'Burnaby']
      },
      {
        name: 'Alberta',
        capital: 'Edmonton',
        immigrationRanking: 2,
        slug: 'AB',
        language: ['EN'],
        topCities: [
          'Calgary',
          'Edmonton',
          'Red Deer'
        ]
      },
      {
        name: 'Saskatchewan',
        capital: 'Regina',
        immigrationRanking: 10,
        slug: 'SK',
        language: ['EN'],
        topCities: [
          'Saskatoon',
          'Regina',
          'Prince Albert'
        ]
      },
      {
        name: 'Manitoba',
        capital: 'Winnipeg',
        immigrationRanking: 9,
        slug: 'MB',
        language: ['EN'],
        topCities: [
          'Winnipeg',
          'Brandon',
          'Steinbach'
        ]
      },
      {
        name: 'Ontario',
        capital: 'Toronto',
        immigrationRanking: 1,
        slug: 'ON',
        language: ['EN'],
        topCities: [
          'Toronto',
          'Ottawa',
          'Mississauga'
        ]
      },
      {
        name: 'New Brunswick',
        capital: 'Fredericton',
        immigrationRanking: 8,
        slug: 'NB',
        language: ['EN','FR'],
        topCities: [
          'Moncton',
          'Saint John',
          'Fredericton'
        ]
      },
      {
        name: 'Nova Scotia',
        capital: 'Halifax',
        immigrationRanking: 7,
        slug: 'NS',
        language: ['EN'],
        topCities: [
          'Halifax',
          'Cape Breton',
          'Truro'
        ]
      },
      {
        name: 'Prince Edward Island',
        capital: 'Charlottetown',
        immigrationRanking: 13,
        slug: 'PEI',
        language: ['EN'],
        topCities: [
          'Charlottetown',
          'Summerside',
          'Stratford'
        ]
      },
      {
        name: 'Newfoundland and Labrador',
        capital: 'St. John\'s',
        immigrationRanking: 12,
        slug: 'NL',
        language: ['EN'],
        topCities: [
          'St. John\'s',
          'Corner Brook',
          'Mount Pearl'
        ]
      }

      
    ]
  })
  console.log(province)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
