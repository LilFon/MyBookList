import React from 'react';
import Select from 'react-select';
import {Div} from './styles';

import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();





export const DropdownMenu = () => {

  

    const options = [
        { value: 'all', label: 'All' ,color: 'blue' },
        { value: 'reading', label: 'Reading', color: 'green' },
        { value: 'completed', label: 'Completed' },
        { value: 'planToRead', label: 'Plan to Read' }
      ]
  

  return <Div>

    <Select
      
      components={animatedComponents}
      defaultValue={ options[0]}
      options={options}
     
   
    />



  </Div>
}
