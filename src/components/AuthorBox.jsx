import React from 'react';
import quotes from '../quotes.json';
const AuthorBox = ({quoteIndex, colorCode}) => {
    console.log(quoteIndex);
    return (
        <div>
            <p style={{color: colorCode}}>{quotes[quoteIndex].author}</p>
        </div>
    );
};

export default AuthorBox;