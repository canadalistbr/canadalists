import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const province = await prisma.province.createMany({
    data: [
      {
        name: 'Quebec',
        capital: 'Quebec City',
        immigrationRanking: 5,
        slug: 'QC',
        language: ['FR', 'EN'],
        topCities: ['Gatineau', 'Montréal', 'Quebec City'],
        imageUrl:
          'https://xdcgqdmfytknfwfiixza.supabase.co/storage/v1/object/sign/ProvincesImages/Quebec.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm92aW5jZXNJbWFnZXMvUXVlYmVjLnBuZyIsImlhdCI6MTY4MzkyNjU0NSwiZXhwIjoxNjg0NTMxMzQ1fQ.rZbD9qd9mfE92URaoIQ2A5WPqLAjKWj_qAQkqx5Jqf0&t=2023-05-12T21%3A22%3A24.894Z'
      },
      {
        name: 'British Columbia',
        capital: 'Victoria',
        slug: 'BC',
        immigrationRanking: 3,
        language: ['EN'],
        topCities: ['Vancouver', 'Surrey', 'Burnaby'],
        imageUrl:
          'https://xdcgqdmfytknfwfiixza.supabase.co/storage/v1/object/sign/ProvincesImages/BC.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm92aW5jZXNJbWFnZXMvQkMucG5nIiwiaWF0IjoxNjgzOTI2NTM3LCJleHAiOjE2ODQ1MzEzMzd9.jf7-HTgthmSqac6XxJeaToTglhGyz-49pgIPTuPOI5E&t=2023-05-12T21%3A22%3A16.165Z'
      },
      {
        name: 'Alberta',
        capital: 'Edmonton',
        immigrationRanking: 2,
        slug: 'AB',
        language: ['EN'],
        topCities: ['Calgary', 'Edmonton', 'Red Deer'],
        imageUrl:
          'https://xdcgqdmfytknfwfiixza.supabase.co/storage/v1/object/sign/ProvincesImages/Alberta.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm92aW5jZXNJbWFnZXMvQWxiZXJ0YS5wbmciLCJpYXQiOjE2ODM5MjY1MDAsImV4cCI6MTY4NDUzMTMwMH0.TBPri4GxFIt5cicHoz-FKeo4VDT1HW14uk0NAqx8C3Q&t=2023-05-12T21%3A21%3A40.209Z'
      },
      {
        name: 'Saskatchewan',
        capital: 'Regina',
        immigrationRanking: 10,
        slug: 'SK',
        language: ['EN'],
        topCities: ['Saskatoon', 'Regina', 'Prince Albert'],
        imageUrl:
          'https://xdcgqdmfytknfwfiixza.supabase.co/storage/v1/object/sign/ProvincesImages/Saskatchewan.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm92aW5jZXNJbWFnZXMvU2Fza2F0Y2hld2FuLnBuZyIsImlhdCI6MTY4MzkyNjU2NSwiZXhwIjoxNjg0NTMxMzY1fQ.6KWegZCU9esA6MAuH1dRlr8ScKkVwNeB6sFeWY7N8Jg&t=2023-05-12T21%3A22%3A45.060Z'
      },
      {
        name: 'Manitoba',
        capital: 'Winnipeg',
        immigrationRanking: 9,
        slug: 'MB',
        language: ['EN'],
        topCities: ['Winnipeg', 'Brandon', 'Steinbach'],
        imageUrl:
          'https://xdcgqdmfytknfwfiixza.supabase.co/storage/v1/object/sign/ProvincesImages/Manitoba.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm92aW5jZXNJbWFnZXMvTWFuaXRvYmEucG5nIiwiaWF0IjoxNjgzOTI2NTgxLCJleHAiOjE2ODQ1MzEzODF9.wpEdnmd93R2JFIeDfR8TdRQu_Zhm3kw7aJdteQTjwDg&t=2023-05-12T21%3A23%3A01.103Z'
      },
      {
        name: 'Ontario',
        capital: 'Toronto',
        immigrationRanking: 1,
        slug: 'ON',
        language: ['EN'],
        topCities: ['Toronto', 'Ottawa', 'Mississauga'],
        imageUrl:
          'https://xdcgqdmfytknfwfiixza.supabase.co/storage/v1/object/sign/ProvincesImages/Ontario.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm92aW5jZXNJbWFnZXMvT250YXJpby5wbmciLCJpYXQiOjE2ODM5MjY1OTcsImV4cCI6MTY4NDUzMTM5N30.sM0iJSX2aryESgLCDr87yDLU9uHGicBBC1fgAtarKYc&t=2023-05-12T21%3A23%3A16.660Z'
      },
      {
        name: 'New Brunswick',
        capital: 'Fredericton',
        immigrationRanking: 8,
        slug: 'NB',
        language: ['EN', 'FR'],
        topCities: ['Moncton', 'Saint John', 'Fredericton'],
        imageUrl:
          'https://xdcgqdmfytknfwfiixza.supabase.co/storage/v1/object/sign/ProvincesImages/NewBrunswuick.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm92aW5jZXNJbWFnZXMvTmV3QnJ1bnN3dWljay5wbmciLCJpYXQiOjE2ODM5MjY2MTEsImV4cCI6MTY4NDUzMTQxMX0.dRywoIvk1xQ5JVamoLY0qsVhG8rEAKLoBsyKSELAlW4&t=2023-05-12T21%3A23%3A30.779Z'
      },
      {
        name: 'Nova Scotia',
        capital: 'Halifax',
        immigrationRanking: 7,
        slug: 'NS',
        language: ['EN'],
        topCities: ['Halifax', 'Cape Breton', 'Truro'],
        imageUrl:
          'https://xdcgqdmfytknfwfiixza.supabase.co/storage/v1/object/sign/ProvincesImages/NovaScotia.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm92aW5jZXNJbWFnZXMvTm92YVNjb3RpYS5wbmciLCJpYXQiOjE2ODM5MjY2MjYsImV4cCI6MTY4NDUzMTQyNn0.Suv0xBFHtkFOugO_xSGMpzSp0OK0idB9DCbs0imm5KE&t=2023-05-12T21%3A23%3A45.842Z'
      },
      {
        name: 'Prince Edward Island',
        capital: 'Charlottetown',
        immigrationRanking: 13,
        slug: 'PEI',
        language: ['EN'],
        topCities: ['Charlottetown', 'Summerside', 'Stratford'],
        imageUrl:
          'https://xdcgqdmfytknfwfiixza.supabase.co/storage/v1/object/sign/ProvincesImages/PEI.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm92aW5jZXNJbWFnZXMvUEVJLnBuZyIsImlhdCI6MTY4MzkyNjY0MSwiZXhwIjoxNjg0NTMxNDQxfQ.ecyuAmImot9L83VIjDOVRNVBfcvheCcAazvkQDo9iR0&t=2023-05-12T21%3A24%3A00.965Z'
      },
      {
        name: 'Newfoundland and Labrador',
        capital: "St. John's",
        immigrationRanking: 12,
        slug: 'NL',
        language: ['EN'],
        topCities: ["St. John's", 'Corner Brook', 'Mount Pearl'],
        imageUrl:
          'https://xdcgqdmfytknfwfiixza.supabase.co/storage/v1/object/sign/ProvincesImages/Newfoundland.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm92aW5jZXNJbWFnZXMvTmV3Zm91bmRsYW5kLnBuZyIsImlhdCI6MTY4MzkyNjY1MywiZXhwIjoxNjg0NTMxNDUzfQ.vJRtmc0ji5CGOFryViuFCubYRwFre8Y6NThsswJmWNo&t=2023-05-12T21%3A24%3A13.103Z'
      }
    ]
  })
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
