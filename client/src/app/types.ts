export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: string
}

export type IIndexable = {
  /** Unique ID */
  id: Scalars['ID']
}
