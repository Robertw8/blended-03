import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ getRegion }) => {
  const [selectValue, setSelectValue] = useState('');
  const onSelect = e => {
    const value = e.currentTarget.value;
    setSelectValue(value);
  };
  console.log(selectValue);
  return (
    <SearchFormStyled>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" name="region" required onChange={onSelect}>
        <option selected disabled defaultValue="">
          Select a region and press enter
        </option>
        {regions &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value}>
              {name}
            </option>
          ))}
      </Select>
    </SearchFormStyled>
  );
};
