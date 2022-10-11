import {DiGithubBadge} from "react-icons/di";

const BucketList = () => {


    return(
        <div className='content-page'>
        <img className='title-img' src="https://i.imgur.com/rbXZhjy.jpg" alt="" />
      
           
           <div className='brief-box'>
           <h2 className='project-title'>Bucket List <a target="_blank" href="https://github.com/Andrew1495/Weather-App"><DiGithubBadge className='title-logo'/></a> </h2>
                <div className='upper-wrap'>
               
                <div className='icon-box'>
                    <h3>Tech:</h3>
                    <div className="icon-list">
                        <ul className="spliiter"> 
                            <li>- Python</li>
                            <li>- Flask</li>
                            <li>- Postgres</li>
                        </ul>
                        <ul>
                            <li>- Html</li>
                            <li>- Css</li>
                            <li>- jinja</li>
                            
                        </ul>
                    </div>

                </div>
                </div>
                <h3>Brief</h3>
                <p>
                        This project was part of CodeClan's Software Development bootcamp,
                </p>
                <p>
                    Build an app to track someone's travel adventures.
                </p> 
                <div className="mvp-ext">
                    <div className="mvp">
                        <h3> MVP </h3>
                            <ul>
                                <li>- The app should allow the user to track countries and cities they want to visit and those they have visited</li>
                                <li>- Each country should have one or more cities to visit</li>
                                <li>- save progress on current learning e.g. mark a topic as read</li>
                                <li>- Allow users to mark destinations as visited or still to see</li>
                            </ul>
                    </div>
                    <div className="ext">
                        <h3> Extensions </h3>
                            <ul>
                                <li>- Search for destination by continent, city or country</li>
                                <li>- User should be able to login and out as well as create a new account</li>
                                <li>- The app should not show users cities they have already marked</li>
                            </ul>
                    </div>
                </div>
           </div>

        <div className='preview-box'>
        <div className='summary-box'>
                <h3>Summary</h3>
                <p>
This project was carried out over the course of 1 week as a final project of the Python module.
It comprises off a frontend developed using Jinja templates to render information from the backend.
</p>    
<p>
    With the goal of this project being able to create a realivtly simple CRUD application i started off with setting up a database with postgres and then setting up the backend flask server to be able to send the request from backend to frontend and vice versa.
</p>
<p>
    Once this was in place and the frontend had some basic styling and layout sorted i then went on to the implement process of users being able to login and logout so that each user could have a unquie list of cities displayed on their profile page.
</p>

 <h3>What I would do different</h3>
 <p>The login system is pretty basic as it has no real authentication, if I had more time I would have like to look into using a libary to manage the authentication for me.</p>
<p> Everything in the database was set up before hand now in retrospect it would have been much better to use an external api to populate pages with countries and cities. </p>
<p>
    In the same vain it would have also be a much better user experince if the listed attractions for each city had been able to link to a appropriate webpage giving users more information.
</p>

            </div>
    
                    <iframe className='video-box' id={Date.now()}src="https://www.youtube-nocookie.com/embed/3GFV41cR5HA?autoplay=1&mute=1&controls=1&playlist=3GFV41cR5HA&loop=1&modestbranding=1" title="OurWorldVideo"  height="500px"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
                </div>
            </div>
            


    )
}

export default BucketList;