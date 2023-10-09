import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LeftPanel_btn } from './LeftPanel_btn';
import './LeftPanel.scss'
import { LeftPanel_logo } from './LeftPanel_logo';

interface Props{
    contentMode: string,
    changeContentMode: React.Dispatch<React.SetStateAction<string>>,
    changeSelectedCourse: React.Dispatch<React.SetStateAction<string>>,
    leftPanelFilter: string[],
    changeLeftPanelFilter: React.Dispatch<React.SetStateAction<string[]>>,
    timeRef:React.MutableRefObject<any>,
}

export const LeftPanel: React.FC<Props> = ({
    contentMode,changeContentMode, 
    changeSelectedCourse, 
    leftPanelFilter,
    changeLeftPanelFilter, timeRef}) => {

    /*const showLeftPanelBtn = () =>{
        if(leftPanelFilter.indexOf("上午") !== -1){
            
        }
    }*/
    /*React.useEffect(()=>{
        var el = document.querySelector('.leftPanel_frame_logo') as HTMLElement;
        var str : string;
        var i:number;
        for( i=0;i<leftPanelFilter.length;i++){
            str += (" "+leftPanelFilter[i]);
        }
        el.innerHTML=str;
    },[leftPanelFilter])*/
        
    return(
        <div className='leftPanel_frame'>
            <LeftPanel_logo word={"NUTN"} 
                            timeRef={timeRef} 
                            contentMode={contentMode} 
                            changeContentMode={changeContentMode} 
                            changeSelectedCourse={changeSelectedCourse} />
            <LeftPanel_btn word={"上午"}
                           leftPanelFilter={leftPanelFilter} 
                           changeLeftPanelFilter={changeLeftPanelFilter} />
            <LeftPanel_btn word={"中午"}
                           leftPanelFilter={leftPanelFilter} 
                           changeLeftPanelFilter={changeLeftPanelFilter} />
            <LeftPanel_btn word={"下午"}
                           leftPanelFilter={leftPanelFilter} 
                           changeLeftPanelFilter={changeLeftPanelFilter} />
        </div>
    )
};