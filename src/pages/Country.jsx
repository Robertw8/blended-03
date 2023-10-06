import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [findCountry, setFindCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backToPrevLocation = location?.state?.from ?? '/';
  useEffect(() => {
    const findCountry = async () => {
      setLoading(true);
      try {
        const fetchCountryResponse = await fetchCountry(id);
        setFindCountry(fetchCountryResponse);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    findCountry();
  }, [id]);
  console.log(findCountry);
  return (
    <Section>
      <Container>
        {loading && <Loader />}
        <CountryInfo country={findCountry} />
        <GoBackBtn path={backToPrevLocation}>Go Back</GoBackBtn>
      </Container>
    </Section>
  );
};
