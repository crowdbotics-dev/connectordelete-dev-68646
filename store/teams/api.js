import axios from "axios"
const teams = axios.create({
  baseURL: "https://google.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
