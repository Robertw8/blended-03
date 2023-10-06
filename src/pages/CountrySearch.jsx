import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useState } from 'react';

export const CountrySearch = () => {
  const [value, setValue] = useState('');
  const formHandler = value => {
    setValue(value);
  };
  return (
    <Section>
      <Container>
        <h2>CountrySearch</h2>
        <SearchForm getRegion={formHandler} />

        {/* <CountryList /> */}
      </Container>
    </Section>
  );
};
