import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Container, Content } from './styles';

interface CountryData {
  name: string;
  capital: string;
  topLevelDomain: string[];
  population: number;
  currencies: object[];
  region: string;
  subregion: string;
  languages: object[];
  flag: string;
}

const CountryDetails: React.FC = () => {
  const [data, setData] = useState<CountryData>();

  const { name: countryName } = useParams<{ name: string }>();

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${countryName}`,
      );

      const countryData = await response.json();

      setData(countryData[0]);
    }
    loadData();
  }, [countryName]);

  return (
    <Container>
      <Content>
        <Link to="/">
          <button type="button">
            <IoArrowBack size={15} />
            Back
          </button>
        </Link>

        <section>
          <img src={data?.flag} alt={data?.name} />
        </section>
      </Content>
    </Container>
  );
};

export default CountryDetails;
