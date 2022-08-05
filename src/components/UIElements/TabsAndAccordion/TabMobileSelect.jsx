import React from 'react';

import Select from 'react-select';

const Component = ({defaultValue, options, onChange}) => (
  <Select
    styles={{
      menu: provided => ({ ...provided, zIndex: 2 })
    }}
    defaultValue={defaultValue}
    options={options}
    onChange={onChange}
  />
);

export default Component;