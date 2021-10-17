import React, { Fragment } from 'react';
import {DropdownMenu} from '../components/Dropdown';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

export const Home = ({ id }) => {
  return (
    <Fragment>
      
      <DropdownMenu />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}