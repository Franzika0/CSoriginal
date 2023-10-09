import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useState, useRef} from 'react';
import './ContentPanel.scss';
//import logo from '../source/coffeeswap.png';

interface word{
    word:string,
    rank:number,
    subject:string,
    pic:string,
    contentMode:string,
    changeContentMode:React.Dispatch<React.SetStateAction<string>>,
    selectedCourse: string,
    changeSelectedCourse: React.Dispatch<React.SetStateAction<string>>
}

//console.log(logo)

export const Item: React.FC<word> = ({
    word, rank, pic, subject,
    contentMode, changeContentMode,
    selectedCourse,changeSelectedCourse
}) => {

    const itemRef = useRef(null);

    const seeDetails=()=>{
        const myAsync = async ():Promise<void> => {
            await a;
            await b;
        }
        const a = new Promise (()=>{
            const boxes = document.getElementsByClassName('item') as HTMLCollectionOf<HTMLElement>;
            for (let i = 0; i < boxes.length; i++) {boxes[i].style.opacity="0";}
        })
        const b = new Promise (()=>{
            setTimeout(()=>{
                changeContentMode('details');
                changeSelectedCourse(word);
                const logo = document.querySelector('.leftPanel_frame_logo .frame') as HTMLElement;
                logo.style["boxShadow"] = "5px 5px 10px 0px #272A2E, -1.5px -1.5px 3px 0px #828282";
                logo.style.width = "80%";
                logo.style.height = "80%";
            },1000)
        })
        myAsync();
        //itemRef.current.style.opacity="0";
    }

    return(
        <div className='item' ref={itemRef} onClick={()=>seeDetails()}>
            <div className='courseName_frame'>
                {word}
            </div>
            <div className='rank'>
                {rank}
            </div>
            <div className='subject'>
                {subject}
            </div>
            <img className='icon' src={pic} alt='404' />
        </div>
    )
};