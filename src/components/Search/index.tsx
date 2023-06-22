import * as React from 'react';
import { Input } from 'antd';

interface SearchProps {
  onSearch: (value: string) => void;
}  

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [value, setValue] = React.useState('');

  const handleSearch = () => {
    onSearch(value);
  };

  return (
    <Input.Search
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSearch={handleSearch}
    />
  );
};