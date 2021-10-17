import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 450px;
  background: #fefefe;
`

export const ImgWrapper = styled.div`
  
  display: inline-block;
  height: 350px;
  overflow: hidden;
  padding:  0 0 0;
  position: relative;
  width: 50%; 
  border-radius: 5px;
`
export const Description = styled.div`
  
  display: inline-block;
  height: 350px;
  overflow: hidden;
  padding:  0 0 0;
  position: relative;
  width: 50%; 
  border-radius: 5px;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  max-height: 240px;
  min-height: 90px;
  object-fit: cover;
  position: absolute;
  top: 0;
  max-width: 160px;
  min-width: 60px;
  margin-left: 40px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`