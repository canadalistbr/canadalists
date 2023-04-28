import { Scalars } from 'app/types'

type FieldItem = {
  score: number
  symbolLabel: string
  symbol: string
  label: string
}

export type Province = {
  id: Scalars['ID']
  name: string
  capital: string
  languages: string[]
  minimumWage: number
  slug: string
  employment: FieldItem
  cost: FieldItem
  quality_of_life: FieldItem
  climate: FieldItem
  diversity: FieldItem
  housing: FieldItem
  healthcare: FieldItem
  base_education: FieldItem
  high_education: FieldItem
  safety: FieldItem
  transportation: FieldItem
  entertainment: FieldItem
  air_quality: FieldItem
  water_quality: FieldItem
  political_stability: FieldItem
  restaurants_cafes: FieldItem
  religion: FieldItem
  overall_reputation: FieldItem
  business_friendly: FieldItem
}

export const ProvincesData: Province[] = [
  {
    id: '1',
    name: 'Alberta',
    capital: 'Edmonton',
    languages: ['en'],
    minimumWage: 15,
    slug: 'AB',
    employment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    cost: {
      score: 90,
      symbolLabel: 'cost',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    quality_of_life: {
      score: 90,
      symbolLabel: 'quality of life',
      symbol: '💻',
      label: 'Quality of life'
    },
    climate: {
      score: 90,
      symbolLabel: 'climate',
      symbol: '💻',
      label: 'Climate'
    },
    diversity: {
      score: 90,
      symbolLabel: 'diversity',
      symbol: '🌎',
      label: ' Cultural diversity'
    },
    housing: {
      score: 90,
      symbolLabel: 'housing',
      symbol: '🏠',
      label: 'Housing availability and affordability'
    },
    healthcare: {
      score: 90,
      symbolLabel: 'healthcare',
      symbol: '🏥',
      label: '  Access to healthcare'
    },
    base_education: {
      score: 90,
      symbolLabel: 'education',
      symbol: '🎓',
      label: ' Education system'
    },
    high_education: {
      score: 90,
      symbolLabel: 'safety',
      symbol: '🔒',
      label: '  Crime rates and safety'
    },
    safety: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Climate'
    },
    transportation: {
      score: 90,
      symbolLabel: 'transportation',
      symbol: '🚗',
      label: '  Transportation options'
    },
    entertainment: {
      score: 90,
      symbolLabel: 'entertainment',
      symbol: '🎭',
      label: 'Recreation and entertainment'
    },
    air_quality: {
      score: 90,
      symbolLabel: 'air quality',
      symbol: '🌿',
      label: 'Air quality'
    },
    water_quality: {
      score: 90,
      symbolLabel: 'Water quality',
      symbol: '💧',
      label: 'Water quality'
    },
    political_stability: {
      score: 90,
      symbolLabel: 'political stability',
      symbol: '💻',
      label: 'Political Stability'
    },
    restaurants_cafes: {
      score: 90,
      symbolLabel: 'dining',
      symbol: '🍽️',
      label: 'Access to food and dining options'
    },
    religion: {
      score: 90,
      symbolLabel: 'religion',
      symbol: '🛐',
      label: 'Religious and cultural institutions'
    },
    overall_reputation: {
      score: 90,
      symbolLabel: 'reputation',
      symbol: '🏆',
      label: '  Overall reputation'
    },
    business_friendly: {
      score: 90,
      symbolLabel: 'business',
      symbol: '🏢',
      label: '  Business friendly'
    }
  },
  {
    id: '2',
    name: 'British Columbia',
    capital: 'Victoria',
    languages: ['en'],
    minimumWage: 15.65,
    slug: 'BC',
    employment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Climate'
    },
    cost: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Climate'
    },
    quality_of_life: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Climate'
    },
    climate: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    diversity: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    housing: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    healthcare: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    base_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    high_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    safety: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    transportation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    entertainment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    air_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    water_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    political_stability: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    restaurants_cafes: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    religion: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    overall_reputation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    business_friendly: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    }
  },
  {
    id: '3',
    name: 'Manitoba',
    capital: 'Winnipeg',
    languages: ['en', 'fr'],
    minimumWage: 13.5,
    slug: 'MB',
    employment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    cost: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    quality_of_life: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    climate: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    diversity: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    housing: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    healthcare: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    base_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    high_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    safety: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    transportation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    entertainment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    air_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    water_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    political_stability: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    restaurants_cafes: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    religion: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    overall_reputation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    business_friendly: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    }
  },
  {
    id: '4',
    name: 'New Brunswick',
    capital: 'Fredericton',
    languages: ['en', 'fr'],
    minimumWage: 13.75,
    slug: 'NB',
    employment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    cost: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    quality_of_life: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    climate: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    diversity: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    housing: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    healthcare: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    base_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    high_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    safety: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    transportation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    entertainment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    air_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    water_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    political_stability: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    restaurants_cafes: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    religion: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    overall_reputation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    business_friendly: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    }
  },
  {
    id: '5',
    name: 'Newfoundland & Labrador',
    capital: "Saint John's",
    languages: ['en'],
    minimumWage: 13.7,
    slug: 'NL',
    employment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    cost: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    quality_of_life: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    climate: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    diversity: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    housing: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    healthcare: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    base_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    high_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    safety: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    transportation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    entertainment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    air_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    water_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    political_stability: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    restaurants_cafes: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    religion: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    overall_reputation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    business_friendly: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    }
  },
  {
    id: '6',
    name: 'Nova Scotia',
    capital: 'Halifax',
    languages: ['en'],
    minimumWage: 13.6,
    slug: 'NS',
    employment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    cost: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    quality_of_life: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    climate: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    diversity: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    housing: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    healthcare: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    base_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    high_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    safety: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    transportation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    entertainment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    air_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    water_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    political_stability: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    restaurants_cafes: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    religion: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    overall_reputation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    business_friendly: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    }
  },
  {
    id: '7',
    name: 'Ontario',
    capital: 'Ottawa',
    languages: ['en'],
    minimumWage: 15.5,
    slug: 'ON',
    employment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    cost: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    quality_of_life: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    climate: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    diversity: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    housing: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    healthcare: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    base_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    high_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    safety: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    transportation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    entertainment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    air_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    water_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    political_stability: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    restaurants_cafes: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    religion: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    overall_reputation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    business_friendly: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    }
  },
  {
    id: '8',
    name: 'Prince Edward Island',
    capital: 'Charlottetown',
    languages: ['en'],
    minimumWage: 13.7,
    slug: 'PEI',
    employment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    cost: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    quality_of_life: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    climate: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    diversity: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    housing: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    healthcare: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    base_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    high_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    safety: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    transportation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    entertainment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    air_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    water_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    political_stability: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    restaurants_cafes: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    religion: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    overall_reputation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    business_friendly: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    }
  },
  {
    id: '9',
    name: 'Quebec',
    capital: 'Quebec City',
    languages: ['fr'],
    minimumWage: 14.25,
    slug: 'QC',
    employment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    cost: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    quality_of_life: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    climate: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    diversity: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    housing: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    healthcare: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    base_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    high_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    safety: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    transportation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    entertainment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    air_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    water_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    political_stability: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    restaurants_cafes: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    religion: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    overall_reputation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    business_friendly: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    }
  },
  {
    id: '10',
    name: 'Saskatchewan',
    capital: 'Regina',
    languages: ['en'],
    minimumWage: 13.0,
    slug: 'SK',
    employment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    cost: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    quality_of_life: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    climate: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    diversity: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    housing: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    healthcare: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    base_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    high_education: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    safety: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    transportation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    entertainment: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    air_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    water_quality: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    political_stability: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    restaurants_cafes: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    religion: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    overall_reputation: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    },
    business_friendly: {
      score: 90,
      symbolLabel: 'employment',
      symbol: '💻',
      label: 'Employment Opportunities'
    }
  }
]
