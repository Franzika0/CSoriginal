import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useState, useRef, useEffect} from 'react';
import {createRoot} from 'react-dom/client'
import { ContentPanel } from '../public/city/ContentPanel';
import { LeftPanel } from '../public/city/LeftPanel';
import { Navigation } from '../public/city/Navigation';
import './app.scss';


const App : React.FC = () =>{

    const [contentMode, changeContentMode] = useState<string>('list');
    const [selectedCourse, changeSelectedCourse] = useState<string>('v0.0.1');
    const [leftPanelFilter, changeLeftPanelFilter] = useState<string[]>([]);

    const timeRef = useRef(null);

    return(
        <div>
            <LeftPanel contentMode={contentMode} 
                       changeContentMode={changeContentMode} 
                       changeSelectedCourse={changeSelectedCourse} 
                       leftPanelFilter={leftPanelFilter} 
                       changeLeftPanelFilter={changeLeftPanelFilter} 
                       timeRef={timeRef} />
            <div className='rightPanel'>
                <Navigation selectedCourse={selectedCourse}
                            timeRef={timeRef} />
                <ContentPanel contentMode={contentMode} changeContentMode={changeContentMode}
                              selectedCourse={selectedCourse} changeSelectedCourse={changeSelectedCourse}/>
            </div>
        </div>
    )
}

const root = createRoot(
    document.getElementById('app') as HTMLElement
);
root.render(<App />);