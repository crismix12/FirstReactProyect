import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './quotes.json'
import { useState } from 'react'
import AuthorBox from './components/AuthorBox';

function App() {


  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const [ index, setIndex ] = useState(randomQuoteIndex);

  const changeQuote = () =>{
  const randomIndex = Math.floor(Math.random() * quotes.length);
  setIndex(randomIndex);
  }

  const colorPalete = ["#845EC2", "#2C73D2", "#0081CF", "#0089BA", "#008E9B", "#008F7A"];
  const randomColorIndex = Math.floor(Math.random() * colorPalete.length);
  document.body.style = `background: ${colorPalete[randomColorIndex]}`

  return (
    <div className="App">
      <QuoteBox quoteIndex={index} colorCode={colorPalete[randomColorIndex]} />
      <div className='author-box'>
        <AuthorBox quoteIndex={index} colorCode={colorPalete[randomColorIndex]}/>
      </div>
      <div className='btnContainer'>
         <button style={{backgroundColor: colorPalete[randomColorIndex]}} className='quote-btn' onClick={changeQuote} ><i className="fa-solid fa-angle-right"></i></button>
      </div>
      
    </div>
  )
}

export default App
