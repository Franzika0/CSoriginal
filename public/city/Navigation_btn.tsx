import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Navigation.scss';

interface word{
    word:string,
}

export const Navigation_btn: React.FC<word> = ({word}) => (
    <del className='navigation_frame_btn_frame_btn'>
        {word}
    </del>
);