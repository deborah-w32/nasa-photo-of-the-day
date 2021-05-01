import React from 'react'
import styled from 'styled-components'
import './index.css'


function Details (props){
    const { title, url, copyright, date, explanation } = props

    return(
        <Container>
            <div>
                <Title>{title}</Title>
                <p>{date}</p>
                <img alt='astronomy' src={url}></img>
            </div>
            <div>
                <p>{explanation}</p>
                <p>{copyright}</p>
            </div>
        </Container>
    )
}

export default Details

const Container = styled.div`
padding:1.5%;
max-width: 100%;
font-family: 'Roboto Mono', monospace;
background-color: #FAEEF5;
`
const Title = styled.h2`
font-size: 2em;
`

