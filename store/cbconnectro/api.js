import axios from "axios"
const cbconnectro = axios.create({
  baseURL: "https://googl.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
