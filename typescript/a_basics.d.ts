export type ClientGen = {
  age: Number
}

export type ClientOrder = {
  order_id: String,
  currency: String,
  date: String,
  price: number
}

export type ClientName = {
  firstname: String,
  lastname: String
}

export type Client = {
  name: ClientName, 
  orders: Array<ClientOrder>
}