import React from 'react';
import quotes from '../quotes.json';

const QuoteBox = ({quoteIndex, colorCode}) => {
    console.log(quoteIndex);
    return (
        <div style={{color: colorCode}} className='quote-container'>
            <div>
            <i className="fa-solid fa-quote-left"></i> 
            </div>
            <div>
            <p>{quotes[quoteIndex].quote}</p>
            </div>
            
        </div>
    );
};

export default QuoteBox;