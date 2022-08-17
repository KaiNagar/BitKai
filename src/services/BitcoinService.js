import { utilService } from "./utilService"
import axios from "axios"

export const bitCoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
}

const RATE_KEY = "rateDB"
const rateCache = utilService.loadFromStorage(RATE_KEY) || {}

const PRICE_KEY = "priceDB"
const priceCache = utilService.loadFromStorage(PRICE_KEY) || {}

const TRANSACTIONS_KEY = "transactionDB"
const transactionsCache = utilService.loadFromStorage(TRANSACTIONS_KEY) || {}

async function getRate(coins) {
  if (rateCache[coins]) {
    // console.log('getting from cache');
    return rateCache[coins]
  }
  try {
    // console.log('getting from axios');
    const RATE_API = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    const rateData = await axios.get(RATE_API)
    rateCache[coins] = rateData.data
    utilService.saveToStorage(RATE_KEY, rateCache)
    return rateData.data
  } catch (e) {
    console.error(e)
  }
}

async function getMarketPrice(range = "5months") {
  if (priceCache[range]) {
    // console.log("getting from cache")
    return priceCache[range]
  }
  try {
    // console.log("getting from axios")
    const PRICE_API = `https://api.blockchain.info/charts/market-price?timespan=${range}&format=json&cors=true#`
    const priceData = await axios.get(PRICE_API)
    priceCache[range] = priceData.data
    utilService.saveToStorage(PRICE_KEY, priceCache)
    return priceData.data
  } catch (e) {
    console.error(e)
  }
}

async function getConfirmedTransactions(range='5months') {
  if (transactionsCache[range]) {
    console.log("getting from cache")
    return transactionsCache[range]
  }
  try {
    console.log("getting from axios")
    const TRANSACTIONS_API = `https://api.blockchain.info/charts/n-transactions?timespan=${range}&format=json&cors=true#`
    const transactionData = await axios.get(TRANSACTIONS_API)
    transactionsCache[range] = transactionData.data
    utilService.saveToStorage(TRANSACTIONS_KEY, transactionsCache)
    return transactionData.data
  } catch (e) {
    console.error(e)
  }


}
