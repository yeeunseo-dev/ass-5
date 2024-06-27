import styled from "styled-components";
import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
  isSelected: boolean;
}

const CountryCard = ({
  country,
  handleSelectCountry,
  isSelected,
}: CountryCardProps) => {
  return (
    <>
      <CountryBox
        onClick={() => handleSelectCountry(country)}
        isSelected={isSelected}
      >
        <img
          src={country.flags.svg}
          style={{ width: "150px", height: "100px" }}
        />
        <h3>{country.name.common}</h3>
        <p>{country.capital}</p>
      </CountryBox>
    </>
  );
};

export default CountryCard;

const CountryBox = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 250px;
  border-radius: 10px;
  border: 2px solid
    ${({ isSelected }) => (isSelected ? "#00dc67" : "transparent")};
  box-shadow: ${({ isSelected }) =>
    isSelected
      ? "1px 3px 3px 0 rgba(0, 0, 0, 0.05)"
      : "2px 4px 4px 0 rgba(0, 0, 0, 0.15)"};
  cursor: pointer;
  background-color: white;
`;
