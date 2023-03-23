import Viewproject from './viewproject';
import { useState } from 'react';

import img1 from '../pages/assets/projsctImgs/card1.jpg'
import img2 from '../pages/assets/projsctImgs/card2.jpg'
import img3 from '../pages/assets/projsctImgs/card3.jpg'
import img4 from '../pages/assets/projsctImgs/card4.jpg'
import img5 from '../pages/assets/projsctImgs/card5.jpg'
import img6 from '../pages/assets/projsctImgs/card6.jpg'


const Portfolio = ()=> {
    const projects = [
        {img: img2, name: "Share App", p: "Application for sharing files, text and links. Built on React and Firebase", link:"https://qobulovasror-shareapp.netlify.app/", viewlink: "https://github.com/qobulovasror/share-app/" },
        {img: img3, name: "Weather app", p: "weather app built in react", link:"https://weather-qobulovdev.netlify.app/", viewlink: "https://github.com/QobulovDev/weather-app" },
        {img: img4, name: "TODO list for desktop", p: "ToDo list build in visual c++", viewlink:"https://github.com/qobulovasror/todo-in-visual_cpp" },
        {img: img5, name: "Department teacher info", p: "Department teacher info built in visual c++", viewlink:"https://github.com/qobulovasror/Visual-C-independent-work" },
        {img: img6, name: "ToDO list ", p: "TODO list built in react", viewlink: "https://todo-qobulovdev.netlify.app/" },
        {img: img1, name: "Calculator", p: "A simple calculator program built in react", link:"https://calculator-qobulovdev.netlify.app/" },
    ]
    const [view, setView] = useState(<></>)
    const viewHandler = (elem)=>{
        setView(<Viewproject elem={elem} setView={setView}/>)
    }
    return ( 
        <>
            <div className="portfolio">
                {view}
                <div className="container">
                    <div className="header row between">
                        <h3>Portfolio</h3>
                        <i class='bx bx-shopping-bag'></i>
                    </div>
                    <hr />
                    <h3 className="t-center">Projects</h3>
                    <ul className="projects row">
                        {
                            projects.map(elem=>(
                                <li className="card">
                                    <img src={elem.img} alt="project img" />
                                    <div 
                                        className='title' 
                                        onClick={()=>viewHandler(elem)}
                                    >{elem.name}</div>
                                </li>
                            ))
                        }
                    </ul>
                    
                </div>
            </div>
        </>
     );
}

export default Portfolio;