import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useState, useRef} from 'react';
import './ContentPanel.scss';

interface Props{
    addCommentRef: React.MutableRefObject<any>,
    addBoardOpen: boolean,
    setAddBoardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

//console.log(logo)

export const PlusComment: React.FC<Props> = ({addCommentRef, addBoardOpen, setAddBoardOpen}) => {

    const closeAddBoard = (e:React.FormEvent) =>{
        e.preventDefault();
        if(addBoardOpen)addCommentRef.current.style.left = "2000px";
        setAddBoardOpen(false);
    }

    return(
        <div ref={addCommentRef} className='plusComment' >
            <div className="frame">
                <span className='title'>Add a Comment</span><br/>
                <form className='plusForm'>
                    <div className="input_frame">
                        <div>
                            <label>課程名稱 : </label>
                            <input type="text" className="inputClass" />
                        </div>
                        <div>
                            <label>系所(某某系) : </label>
                            <input type="text" className="inputSubject" /><br/>
                        </div>
                    </div>
                    <span>評論、課堂日期和推薦分數 : </span>
                        <select className='selectTime'>
                        <option>時段</option>
                        <option>上午</option>
                        <option>中午</option>
                        <option>下午</option>
                    </select>
                    <select className='selectDay'>
                        <option>星期</option>
                        <option>星期一</option>
                        <option>星期二</option>
                        <option>星期三</option>
                        <option>星期四</option>
                        <option>星期五</option>
                    </select>
                    <select className='selectScore'>
                        <option>忽略</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select><br/>
                    <textarea className="inputComment" cols={20} rows={10} ></textarea>
                    <div className="btn_frame">
                        <button type="submit" className='submit'>儲存</button>
                        <button className='buttom' onClick={(e)=>closeAddBoard(e)}>取消</button>
                    </div>
                </form>
            </div>
        </div>
    )
};