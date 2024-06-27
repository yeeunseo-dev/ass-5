import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { Country } from "../types/country";
import { countryApi } from "../api/countries";
import styled from "styled-components";

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const fetchData: Country[] = await countryApi();
        setCountries(fetchData);
      } catch (error) {
        console.log(error);
      }
    };
    getCountries();
  }, []);

  console.log(countries);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };

  return (
    <>
      <div
        style={{
          padding: "60px 0 ",
          borderRadius: "20px",
          marginBottom: "80px",
        }}
      >
        <h2>선택한 나라 목록</h2>
        <Container>
          {selectedCountries.map((country: Country) => {
            return (
              <CountryCard
                country={country}
                key={country.name.common}
                handleSelectCountry={handleSelectCountry}
                isSelected={true}
              />
            );
          })}
        </Container>
      </div>

      <div>
        <h2> 전체 나라 목록</h2>
        <Container>
          {countries
            .filter(
              (country: Country) =>
                !selectedCountries.find(
                  (selectedCountry: Country) =>
                    selectedCountry.name.common === country.name.common
                )
            )
            .map((country: Country) => {
              return (
                <CountryCard
                  country={country}
                  key={country.name.common}
                  handleSelectCountry={handleSelectCountry}
                  isSelected={false}
                />
              );
            })}
        </Container>
      </div>
    </>
  );
};

export default CountryList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 40px;
`;
