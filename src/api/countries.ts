import axios from "axios";
import type { Country } from "../types/country";

export async function countryApi(): Promise<Country[]> {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
}
