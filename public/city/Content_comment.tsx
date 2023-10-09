import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useState, useRef} from 'react';
import './ContentPanel.scss';

interface Props{
    word:string
}

//console.log(logo)

export const Comment: React.FC<Props> = ({word}) => {


    return(
        <div className='comment' >
            {word}
        </div>
    )
};