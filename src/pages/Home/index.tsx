import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, Content, CountryCard } from './styles';

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

const Home: React.FC = () => {
  const [countries, setCountries] = useState<CountryData[]>(
    [] as CountryData[],
  );

  const [filter, setFilter] = useState('');

  const regionOptions = useMemo<string[]>(() => {
    return Array.from(new Set(countries.map(c => c.region || 'None')));
  }, [countries]);

  const [region, setRegion] = useState('');

  useEffect(() => {
    async function loadCountries() {
      const response = await fetch('https://restcountries.eu/rest/v2/all');

      setCountries(await response.json());
    }

    loadCountries();
  }, []);

  return (
    <Container>
      <Content>
        <section>
          <Input
            icon={FaSearch}
            placeholder="Search for a country..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />

          <Select
            value={region}
            onChange={e => setRegion(e.target.value)}
            options={regionOptions}
          />
        </section>

        <section>
          {countries
            .filter(
              c =>
                (c.name.toLowerCase().includes(filter.toLowerCase()) ||
                  c.capital.toLowerCase().includes(filter.toLowerCase())) &&
                c,
            )
            .map(country => (
              <Link key={country.name} to={`/country/${country.name}`}>
                <CountryCard>
                  <img src={country.flag} alt={country.name} />

                  <h4>{country.name}</h4>

                  <strong>
                    {'Population: '}
                    <span>{country.population.toLocaleString()}</span>
                  </strong>
                  <strong>
                    {'Region: '}
                    <span>{country.region}</span>
                  </strong>
                  <strong>
                    {'Capital: '}
                    <span>{country.capital}</span>
                  </strong>
                </CountryCard>
              </Link>
            ))}
        </section>
      </Content>
    </Container>
  );
};

export default Home;
