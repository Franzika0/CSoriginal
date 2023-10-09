import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './LeftPanel.scss'

interface word{
    word:string,
    leftPanelFilter: string[],
    changeLeftPanelFilter: React.Dispatch<React.SetStateAction<string[]>>,
}

export const LeftPanel_btn: React.FC<word> = ({word,leftPanelFilter,changeLeftPanelFilter}) => {

    const btnRef = React.useRef(null);

    const addOrRemoveFilter = (word:string) =>{
        //alert(leftPanelFilter.indexOf(word));
        if(leftPanelFilter.indexOf(word) === -1){
            changeLeftPanelFilter([...leftPanelFilter,word]);
            btnRef.current.style.boxShadow = "12px 12px 16px 0px #272A2E inset, -7px -7px 9px 0px #828282 inset";
        }else{
            var arr = leftPanelFilter;
            arr.splice(leftPanelFilter.indexOf(word),1);
            changeLeftPanelFilter(arr);
            btnRef.current.style.boxShadow = "5px 5px 10px 0px #272A2E, -1.5px -1.5px 3px 0px #828282";
        }
    }

    return(
        <div ref={btnRef} className='leftPanel_frame_btn' onClick={()=>addOrRemoveFilter(word)}>
            {word}
        </div>
    )
};