export const GAMES = [
  {
    name: 'IdGame',
    type: 'hidden',
    placeholder: '',
  },
  {
    name: 'NameGame',
    type: 'text',
    placeholder: 'Enter the name of the game',
  },
  {
    name: 'MainCharacter',
    type: 'text',
    placeholder: 'Enter the name of the main character',
  },
  {
    name: 'Director',
    type: 'text',
    placeholder: 'Enter the name of the director',
  },
  {
    name: 'Producer',
    type: 'text',
    placeholder: 'Enter the name of the producer',
  },
  {
    name: 'Brand',
    type: 'text',
    placeholder: 'Enter the name of the brand',
  },
  {
    name: 'ReleaseDate',
    type: 'date',
    placeholder: 'Enter the release date',
  },
  {
    name: 'CoverPage',
    type: 'text',
    placeholder: 'Enter the cover image URL',
  },
  {
    name: 'Platforms',
    type: 'multi-select',
    placeholder: 'Enter the platforms',
  },
]

export const CUSTOMERS = [
  {
    name: 'IdUser',
    type: 'hidden',
    placeholder: '',
  },
  {
    name: 'FullName',
    type: 'text',
    placeholder: 'Enter the complete name',
  },
  {
    name: 'Identification',
    type: 'text',
    placeholder: 'Enter the identification',
  },
  {
    name: 'Email',
    type: 'email',
    placeholder: 'Enter the email',
  },
  {
    name: 'Gender',
    type: 'select',
    placeholder: 'Enter your gender',
    options: [
      { value: 'Male', label: 'Male'},
      { value: 'Female', label: 'Female'},
      { value: 'Non-binary', label: 'Non-binary'},
    ]
  },
  {
    name: 'City',
    type: 'text',
    placeholder: 'Enter the city',
  },
  {
    name: 'Address',
    type: 'text',
    placeholder: 'Enter the address',
  },
  {
    name: 'Age',
    type: 'number',
    placeholder: 'Enter the age',
  },
  {
    name: 'PostalCode',
    type: 'text',
    placeholder: 'Enter the postal code',
  }
]

export const RENTALS = [
  {
    name: 'IdRent',
    type: 'hidden',
    placeholder: '',
  },
  {
    name: 'IdUserRental',
    type: 'text',
    placeholder: 'Enter the id of the customer',
  },
  {
    name: 'IdVideoGamesRental',
    type: 'text',
    placeholder: 'Enter the id of the game',
  },
  {
    name: 'RentalDate',
    type: 'date',
    placeholder: 'Enter the rental begin date',
  },
  {
    name: 'RentalEndDate',
    type: 'date',
    placeholder: 'Enter the rental end date',
  }
]

export const PRICES = [
  {
    name: 'IdPrice',
    type: 'hidden',
    placeholder: '',
  },
  {
    name: 'IdVideoGames',
    type: 'text',
    placeholder: 'Enter the id of the game',
  },
  {
    name: 'Amount',
    type: 'number',
    placeholder: 'Enter the price for the game',
  },
  {
    name: 'PricePenalty',
    type: 'number',
    placeholder: 'Enter the penalty price for the game',
  }
]
