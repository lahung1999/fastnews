import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate';

import Trending from './Trending';
import CardItem from './CardItem';
import Video from './Video';
import banner from '../assets/img/banner.jpeg'

const BodyTop = () => {

  return (
    <Container>
        <h2>Today's Top Hightlights</h2>
        <div className="body">
            <div className="content">
                <div className="content__item">
                    <CardItem />
                </div>
                
            </div>
            <div className="trending">
                <Trending />
                <Video />
                <img src={banner} alt='Banner'/>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 1rem;
    h2 {
        font-size: 30px;
        line-height: 1em;
        font-weight: 700;
        color: #444444;
        margin: 0;
        margin-top: 0px;
        position: relative;
        text-transform: capitalize;
        padding-bottom: 20px;

        &::before {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100px;
            height: 5px;
            border-radius: 6px;
            background: var(--main-color);
            content: "";
        }

        &::after {
            position: absolute;
            left: 110px;
            bottom: 0;
            width: 30px;
            height: 5px;
            border-radius: 6px;
            background: var(--main-color);
            content: "";
        }
    }

    .body {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1rem;
        @media only screen and (max-width: 685px) {
            grid-template-columns: 1fr;
        }
        .content {
            margin: 2rem 0;
            /* border: 1px solid #d8d7d7; */
            padding: 1rem;
            display: flex;
            flex-direction: column;
            height: auto;
            @media only screen and (max-width: 685px) {
                padding: 0;
            }
            &__item {
                display: grid;
                grid-template-columns: 1fr 1fr;
                margin-bottom: 3rem;
                @media only screen and (max-width: 685px) {
                    grid-template-columns: 2fr;
                }
            }
        }
        .trending {
            margin: 2rem 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            img {
                width: 100%;
            }
            @media only screen and (max-width: 685px){
                display: none;
            }
        }
    }
`

export default BodyTop