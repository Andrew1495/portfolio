import './ContentPage.css'
import { DiPython, DiJavascript1, DiCss3, DiHtml5, DiReact, DiMongodb} from "react-icons/di";
const EducationApp= () => {



    return (
        
        <div className='content-page'>
             <img className='title-img' src="https://i.imgur.com/p2XPUkX.png" alt="" />

           <div className='brief-box'>
                <div className='upper-wrap'>
                <div>
                    <h3>Group Members:</h3>
                    <ul>
                        <li> Carly Officer</li>
                        <li> Jacob Greenhalgh</li>
                        <li> Jack Knowles</li>
                        <li> Myself</li>
                    </ul>
                </div>
                <div>
                    <h3>Tech:</h3>
                    <ul>
                        <li>< DiJavascript1/></li>
                        <li> <DiCss3/></li>
                        <li> <DiHtml5/></li>
                        <li> <DiReact/></li>
                        <li> <DiMongodb/></li>
                        <li> Express</li>
                    </ul>
                
                </div>
                </div>
                <h3>Brief</h3>
                <p>
                        This project was part of CodeClan's Software Development bootcamp,
                    </p>
                <p>
                    The BBC are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way. Your task is to make an a Minimum Viable Product or prototype to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app. The target audience of the app will be adults.
                </p> 
                <div className="mvp-ext">
                    <div className="mvp">
                        <h3> MVP </h3>
                            <ul>
                                <li>view educational content on global environmental topics</li>
                                <li>view collections of different subjects and work through the pages to learn</li>
                                <li>save progress on current learning e.g. mark a topic as read</li>
                                <li>test their knowledge with interactive quizzes</li>
                            </ul>
                    </div>
                    <div className="ext">
                        <h3> Extensions </h3>
                            <ul>
                                <li>User dashboard</li>
                                <li>Use new React libraries</li>
                                <li>Use external api to show the user realtime information</li>
                                <li>Multiple users</li>
                            </ul>
                    </div>
                </div>
           </div>

        <div className='preview-box'>

            <iframe className="video-box"  width="800px" height="500px" src="https://www.youtube-nocookie.com/embed/07Fje-8tbF0?autoplay=1&mute=1&controls=1&playlist=07Fje-8tbF0&loop=1" title="OurWorldVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
            <div>
                <p> short descripton of the tech used and the outcome </p>
            </div>

        </div>
    </div>
    )
}

export default EducationApp;