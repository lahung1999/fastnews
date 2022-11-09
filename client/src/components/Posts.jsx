import React from 'react'
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom'

const Posts = ({urlImage, category, title, create_time, summary, idArticle}) => {
    
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/hot/${idArticle}`)
        window.scroll(0,0)
    }
return (
    <Container onClick={()=> handleClick()}>
            <div className='itemImg'>
                <img src={urlImage} alt="" />
                <div className="thumb">{category}</div>
            </div>
            <div className="itemTitle">
                <h3>{title}</h3>

            </div>
            <div className='itemAuth'>
                <span >By chiensi</span> 
                <span className='author'>{create_time}</span>
            </div>
            <div className="desc">
                <p>{summary}</p>
            </div>
    </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    border-bottom: 1px solid #e8e4e4;
    cursor: pointer;

    .itemImg {
        position: relative;
        overflow: hidden;
        border-radius: 1rem;
        .thumb {
            position: absolute;
            left: 15px;
            top: 15px;
            padding: 7px 25px 6px;
            background: var(--main-color);
            color: #fff;
            text-transform: uppercase;
            font-size: 14px;
            border-radius: 5px;
        }
        
    }

    img {
        width: 100%;
        height: 250px;
        border-radius: 1rem;
        transform: scale(1);
        filter: grayscale(0);
        &:hover {
            transform: scale(1.2);
            filter: grayscale(100%);
            transition: all .3s;
        }
    }

    .itemTitle {
        display: block;
        display: -webkit-box;
        max-width: 100%;
        height: 3.2rem;
        margin: 0 auto;
        font-size: 1.1rem;
        line-height: 1.2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }


    .itemAuth {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: var(--main-color);
        font-size: 1rem;
        .author {
            position: relative;
            margin-left: 1rem;
        }
        .author::before {
            position: absolute;
            left: -12px;
            top: 10px;
            width: 5px;
            height: 5px;
            content: "";
            background: var(--main-color);
            border-radius: 50%;
        }
    }
    .desc {
        display: block;
        display: -webkit-box;
        max-width: 100%;
        height: 5rem;
        margin: 0 auto;
        font-size: 1rem;
        line-height: 1.2;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
    }

`

export default Posts