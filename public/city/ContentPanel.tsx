import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useState, useRef, useEffect} from 'react';
import './ContentPanel.scss'
import { Item } from './Content_Item';
import {Comment} from './Content_comment';
import {PlusComment} from './Content_plus_comment'
import logors from '../source/coffeeswap-rs.png';
import logocp from '../source/coffeeswap-p.png';

interface Props{
    contentMode: string,
    changeContentMode: React.Dispatch<React.SetStateAction<string>>,
    selectedCourse: string,
    changeSelectedCourse: React.Dispatch<React.SetStateAction<string>>
}


export const ContentPanel: React.FC<Props> = ({
    contentMode, changeContentMode,
    selectedCourse,changeSelectedCourse
}) => {

    const [addBoardOpen, setAddBoardOpen] = useState<boolean>(false);

    const addCommentRef = useRef(null);

    const CMN = () =>{
        switch(contentMode){
            case "list":
            type course = {
                word:string,
                rank:number,
                subject:string,
                pic:string
            }
            let course_info : course[] = [
                {word:"國民小學數學教材教法",rank:4.7,subject:"教育",pic:"logors"},
                {word:"統計與生活",rank:4.2,subject:"教育",pic:"logocp"},
            ]
            const choosePic = (item:course) =>{
                switch(item.pic){
                    case "logors":
                    return logors
                    case "logocp":
                    return logocp
                }
            }
            return(
                <div className='adjust'>
                    {
                        course_info.map((item, index)=>(
                            <Item word={item.word} 
                            rank={item.rank} 
                            subject={item.subject} 
                            pic={choosePic(item)} 
                            key={index} 
                            contentMode={contentMode} 
                            changeContentMode={changeContentMode}
                            selectedCourse={selectedCourse} 
                            changeSelectedCourse={changeSelectedCourse} />
                        ))
                    }
                </div>
            );
            case "details":
            let comments : string[];
            if(selectedCourse === "國民小學數學教材教法"){
                comments = ["終於學會加減乘除了!","在上這堂課之前，從沒想過用圓規來吃飯是那麼的方便。"];
            }else{
                comments=[];
            }
            return(
                <div className='adjust'>
                    {
                        comments.map((item, index)=>(<Comment key={index} word={item}/>))
                    }
                </div>
            );
            default:
            return<div>404</div>
        }
    }

    const openAddBoard = () =>{
        addBoardOpen?
            addCommentRef.current.style.left = "2000px":
            addCommentRef.current.style.left = "0";
        setAddBoardOpen(!addBoardOpen);
    } 
 
    return(
        <div className="contentPanel_frame">
            {CMN()}
            <div className="contentPanel_plusButton" onClick={()=>openAddBoard()}>Add Comments</div>
            <PlusComment addCommentRef={addCommentRef} 
                         addBoardOpen={addBoardOpen} 
                         setAddBoardOpen={setAddBoardOpen} />
        </div>
    )
};