export type ClientGen = {
  age: Number
}

export type GenResult = {
  gen: String | null,
  set: Boolean
}

export type ClientOrder = {
  order_id: String,
  currency: String,
  date: String,
  volume: number
}

export type ClientName = {
  firstname: String,
  lastname: String
}

export type Client = {
  name: ClientName, 
  orders: Array<ClientOrder>
}