import React from 'react';
import { Link, Nav } from './styles';
import { MdHome, MdAddCircle, MdPerson } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/favs'><MdAddCircle size={SIZE} /></Link>
      <Link to='/user'><MdPerson size={SIZE} /></Link>
    </Nav>
  )
}