export interface InputFields {
  name: string
  type: string
  placeholder: string
  options?: { value: string, label: string }[]
}

export interface Option {
  label: string
  value: string
}

export interface VideoGame {
  idGame: string
  nameGame: string
  mainCharacter: string
  director: string
  producer: string
  brand: string
  releaseDate: string
  coverPage: string
  platforms: string
}

export interface User {
  idUser: string
  fullName: string
  identification: string
  email: string
  gender: string
  city: string
  address: string
  age: number
  postalCode?: string
  rentalData?: Rental[]
}

export interface Rental {
  idRent: string
  idUserRental: string
  idVideoGamesRental: string
  rentalDate: string
  rentalEndDate: string
}

export interface Price {
  idPrice: string
  idVideoGames: string
  amount: number
  pricePenalty: number
}
