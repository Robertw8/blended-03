import { useState, useEffect } from 'react';

import { Container, CountryList, Heading, Loader, Section } from 'components';

import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const result = await getCountries();
        setCountries(result);
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);
  return (
    <Section>
      <Container>
        <h2>Home</h2>
        {countries.length ? (
          <CountryList countries={countries} />
        ) : (
          <Heading>No countries found.</Heading>
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
