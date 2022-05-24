
export interface IClient {
  id: string,
  email: string,
  nameUser: string,
  nameComplet: string,
  description: string,
  phones: [
    string
  ],
  address: {
    street: string,
    district: string,
    city: string,
    state: string,
    zipCode: string,
    number: string,
    complement: string,
    country: string
  },
  dateBirth: Date,
  password: string
}

export interface ISignup {
  email: string,
  nameUser: string,
  nameComplet: string,
  phones: string[],
  dateBirth: Date,
  password: string
}