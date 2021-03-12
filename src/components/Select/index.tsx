import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

const Select: React.FC<SelectProps> = ({ options, ...rest }) => {
  return (
    <Container>
      <select {...rest}>
        {options.map(regionOption => (
          <option key={regionOption} value={regionOption}>
            {regionOption}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
