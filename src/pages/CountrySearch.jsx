import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  // const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const formHandler = value => {
    setSearchParams({ value });
  };

  useEffect(() => {
    const value = searchParams.get('value');
    console.log('value :>> ', value);
    if (!value) {
      return;
    }

    const getResult = async () => {
      setLoading(true);
      try {
        const result = await fetchByRegion(value);
        setCountries(result);
      } catch (e) {
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    };
    getResult();
  }, [searchParams]);

  return (
    <Section>
      <Container>
        <h2>CountrySearch</h2>
        <SearchForm getRegion={formHandler} />

        <CountryList countries={countries} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
