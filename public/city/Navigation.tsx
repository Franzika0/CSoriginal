import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {BsSearch} from 'react-icons/bs'
import './Navigation.scss';
import { Navigation_btn } from './Navigation_btn';

interface Props{
    selectedCourse: string,
    timeRef:React.MutableRefObject<any>;
}

export const Navigation: React.FC<Props> = ({selectedCourse, timeRef}) => {

    useEffect(()=>{
        if(selectedCourse !== "v0.0.1"){
            timeRef.current.style.fontSize="3rem";
            timeRef.current.style.top="4rem";
        }
    }
    ,[selectedCourse])
    
    return(
        <div className='navigation_frame'>
            <span ref={timeRef} className="time">{selectedCourse}</span>
            <div className='btn_frame'>
                <Navigation_btn word={"登入"}/>
                <Navigation_btn word={"關於"}/>
                <Navigation_btn word={"首頁"}/>
                <div className='search_frame'>
                    <input className='input' type={'text'}></input>
                    <BsSearch />
                </div>
            </div>
        </div>
    )
};