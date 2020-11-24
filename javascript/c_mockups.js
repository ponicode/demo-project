const axios = require("axios")

const URL = "https://api.exchangeratesapi.io/"

async function getRequest(url){
    let promise = await axios.get(url);
    return promise.data
}

// API request mockup
// For the following arguments set ("2020-11-01", "EUR", "USD,JPY")
// The response should be
// {"rates":{"JPY":122.36,"USD":1.1698},"base":"EUR","date":"2020-10-30"}
async function getCurrencyRatesFromCustom(date, base_currency, currencies){
    let url = `${URL}${date}?base=${base_currency}&symbols=${currencies}`
    let resp = await getRequest(url)
    console.log(resp)
    console.log(typeof(resp))
    return resp
}

async function getCurrencyRatesFromAxios(date, base_currency, currencies){
    let url = `${URL}${date}?base=${base_currency}&symbols=${currencies}`
    let resp = await axios.get(url);
    return resp
}