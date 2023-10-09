import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useRef} from 'react';
import {RiArrowGoBackFill} from 'react-icons/ri'
import './LeftPanel.scss'

interface word{
    word:string,
    contentMode:string,
    changeContentMode:React.Dispatch<React.SetStateAction<string>>;
    changeSelectedCourse: React.Dispatch<React.SetStateAction<string>>;
    timeRef:React.MutableRefObject<any>;
}

export const LeftPanel_logo: React.FC<word> = ({
        word,contentMode,
        changeContentMode, 
        changeSelectedCourse, 
        timeRef}) => {

    const logoRef =  useRef(null);

    const goBackToList =()=>{
        changeContentMode("list");
        logoRef.current.style["boxShadow"] = "12px 12px 16px 0px #272A2E inset, -10px -10px 14px 0px #828282 inset";
        logoRef.current.style.width="90%";
        logoRef.current.style.height="90%";
        //timeRef.current.innerHTML="v0.0.1";
        changeSelectedCourse("v0.0.1");
        timeRef.current.style.top="1rem";
        timeRef.current.style.fontSize="1.5rem";
    }

    return(
        <div className='leftPanel_frame_logo' onClick={()=>goBackToList()}>
            {
                contentMode==="details"?
                    <div ref={logoRef} className='frame'>
                        <span className='three_d'><RiArrowGoBackFill/></span>
                    </div>:
                    <div className='frame'>
                        <span className='three_d'>N</span>
                        <span className='three_d'>U</span>
                        <span className='three_d'>T</span>
                        <span className='three_d'>N</span>
                    </div>
            }
            
        </div>
    )
};