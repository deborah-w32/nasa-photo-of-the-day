import React, { useState, useEffect } from "react"
import "./App.css"
import axios from 'axios'
import Details from './Details'
import styled from 'styled-components'
import './index.css'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=LWkgHkyctCp0V5OpOSovstbd3ma0qB8ct39k9DQv')
      .then(response => {
        console.log(response)
        setData(response.data)
      })
      .catch(err => {
        console.log('Error Caught: ', err)
      })
    },[])
  
    return (
    <div className="App">
      <div className="header">
        <PageTitle>NASA Photo of the Day</PageTitle>
      </div>
      {
        <Details title={data.title} url={data.url} copyright={data.copyright} date={data.date} explanation={data.explanation}/>
      }
    </div>
  );
}

const PageTitle = styled.h1`
font-size: 3em;
font-family: 'Zen Dots', cursive;
color: #FAEEF5;
text-align: center;
`


export default App