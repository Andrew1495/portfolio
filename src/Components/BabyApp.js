import './ContentPage.css'
import {DiGithubBadge} from "react-icons/di";
import {Carousel} from '3d-react-carousal';
import { useState } from 'react';
import {Link} from 'react-router-dom';
const BabyApp= () => {

    const [timer, setTimer] = useState(10000)

    let screenshots = [
        <img  className='Baby-screenshot' src="https://i.imgur.com/quKz74x.png"  alt="1" />,
        <img  className='Baby-screenshot' src="https://i.imgur.com/8DTGhi1.png"  alt="2" />,
        <img  className='Baby-screenshot' src="https://i.imgur.com/RE2gIyt.png"  alt="3" />,
        <img  className='Baby-screenshot' src="https://i.imgur.com/okmvvh6.png"  alt="4" />,
        <img  className='Baby-screenshot' src="https://i.imgur.com/RaSapSG.png"  alt="5" />,
        <img  className='Baby-screenshot' src="https://i.imgur.com/CEFCtIY.png"  alt="6" />,
        <img  className='Baby-screenshot' src="https://i.imgur.com/UuMafrg.png"  alt="7" />,
    ]



    const callback = function(){
        setTimer(10000)
    }

    return (
        <>
        <div className='content-page'>
             <img className='title-img' src="https://i.imgur.com/quKz74x.png" alt="" />

           
           <div className='brief-box'>
           <h2 className='project-title'>Wah-Wah <a target="_blank" href="https://github.com/Andrew1495/BabyAppFrontEnd"><DiGithubBadge className='title-logo'/></a> </h2>
                <div className='upper-wrap'>
                <div className='team-box'>
                    <h3>Team:</h3>
                    <ul>
                        <li>- Callum McCall <a target="_blank" className='team-git' href="https://github.com/calumcmccall"><DiGithubBadge/></a> </li>
                        <li>- Nick Murray <a target="_blank" className='team-git' href="https://github.com/SuperNicktendo"><DiGithubBadge/></a> </li>
                        <li>- Scott Drysdale <a target="_blank" className='team-git' href="https://github.com/ScottDrysdale86"><DiGithubBadge/></a> </li>
                        <li>- Myself <a target="_blank" className='team-git' href="https://github.com/Andrew1495"><DiGithubBadge/></a> </li>
                    </ul>
                </div>
                <div className='icon-box'>
                    <h3>Tech:</h3>
                    <div className="icon-list">
                        <ul className="spliiter"> 
                            <li>- Javascript</li>
                            <li>- React Native</li>
                            <li>- Java</li>
                        </ul>
                        <ul>
                            <li>- Sql</li>
                            <li>- Spring Boot</li>
                            <li>- Android Development Studio</li>
                        </ul>
                    </div>

                </div>
                </div>
                <h3>Brief</h3>
                <p>
                        This project was part of CodeClan's Software Development bootcamp,
                    </p>
                <p>
                A cross-platform mobile app built with React Native used to record and display baby sleep and feed data. 
                </p> 
                <div className="mvp-ext">
                    <div className="mvp">
                        <h3> MVP </h3>
                            <ul>
                                <li>- Sleep Data should have start and end time and should be user set</li>
                                <li>- Sleep Data should have resume, reset and submit buttons</li>
                                <li>- Feed Data should have a time and a amount slider amount( 0-12oz)</li>
                                <li>- Feed Data should have a save button</li>
                                <li>- A user should be able to view baby sleep/feed data in a visual way</li> 
                            </ul>
                    </div>
                    <div className="ext">
                        <h3> Extensions </h3>
                            <ul>
                                <li>- Allow multiple babies to be recorded</li>
                                <li>- Have a teeth timer</li>
                                <li>- Sensory video</li>
                                <li>- App runs on both iOS and android</li>
                            </ul>
                    </div>
                </div>
           </div>

  

        <div className='preview-box'>
        <div className='summary-box'>
                <h3>Summary</h3>
                <p>
                This project was carried out over 2 weeks as a capstone project for my time at CodeClan. It comprises of an Sql database with a back end using Spring Boot. The frontend was developed using React-Native.
</p>    
<p>
My primary involvement on this project was working my group to learn and understand how react-native works and from there splitting up the frontend into manageable chunks  so that we could display and record the right data.
</p>
<p>
Along side this I spend a good bit of time implementing new routes on Spring to add further information that the app was able to record.
</p>

 <h3>What I would do different</h3>
 <p>Because it was our groups first time using react-native we jumped a little too headstrong  into getting started and decide to use the most recent version of react native-without checking stability or compatibility with our imports.</p>

<p> We spent a lot of our time as a group trying and learning new things about react-native as none of us had used it before which lead to our file structure being less than ideal, if I was to go back and make a version 2.0 of the app it would definitely revolve around refactoring out file structure. </p>

            </div>

            
     
                </div>
               
            </div>
            
            <Carousel slides={screenshots} autoplay={true} interval={timer}  onSlideChange={callback}/>
</>
    )
}

export default BabyApp;