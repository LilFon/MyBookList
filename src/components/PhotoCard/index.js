



import React, { Fragment } from 'react'
import { Article, ImgWrapper, Img,Description } from './styles'

import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://images.cdn2.buscalibre.com/fit-in/360x360/c4/61/c4611a8ebfc03114c532000cbc62ff83.jpg'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMAGE} />
            </ImgWrapper>
          </Link>
        <Description>
        <h1>Harry potter y la piedra adolfofa</h1>
        <a>H.K Rolling</a>
        <h3>Status : Completed</h3>
        {/*<h4>Progress: 450/450 pages</h4>*/}
        



        </Description>
          


          
        </Fragment>
      }
    </Article>
  )
}