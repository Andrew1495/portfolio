import {DiGithubBadge} from "react-icons/di";

const WeatherApp = () => {


    return (
        <div className='content-page'>
        <img className='title-img' src="https://i.imgur.com/Ty9ZiPG.jpg" alt="" />

           
        <div className='brief-box'>
        <h2 className='project-title'>Weather App <a target="_blank" href="https://github.com/Andrew1495/Weather-App"><DiGithubBadge className='title-logo'/></a> </h2>
                <div className='upper-wrap'>
            
                <div className='icon-box'>
                    <h3>Tech:</h3>
                    <div className="icon-list">
                        <ul className="spliiter"> 
                            <li>- Javascript</li>
                            <li>- React</li>
                        </ul>
                        <ul>
                            <li>- Css</li>
                            <li>- Html</li>
                            <li>- LeafletJS</li>
                        </ul>
                    </div>
                    

                </div>
                <div className="mvp">
                        <h3> MVP </h3>
                            <ul>
                                <li>- The application should display data from an API request.</li>
                                <li>- The application should have a clear separation of concerns</li>
                                <li>- Take input from the user to update the page. </li>
                                <li>- test their knowledge with interactive quizzes</li>
                                <li>Looking into a library to visual the data.</li>
                            </ul>
                    </div>
                </div>
                <h3>Brief</h3>
                <p>
                        This project was part of CodeClan's Software Development bootcamp,
                    </p>
                <p>
                    Your task is to create an application that makes a request to an API and displays the data.
                </p> 
                <div>
        <div>
                <h3>Summary</h3>
                    <p>
                    This project was carried out over the course of a weekend as a first attempt as using external API's to make a app.
                    It comprises off a frontend developed using React and a backend of MongoDb and Express.
                    </p>    
            <p>
            As said this was the first full React app i made from scratch during my time at code clan.
            </p>
            <p>
                It started of with a pretty simple fetch request to OpenWeatherMap's API sending back the weather forcast for that day based on the searched city.
            </p>
            <p>
                    Once this was functional I  used the latitude and longituide information from the fetch request to send another request to display the weekly weather forcast.
            </p>
            <p>
                    Finishing off the app by implementing a map which shows the city that the user had searched using LeafletJS.
            </p>

            <h3>What I would do different</h3>
            <p>Instead of sending to fetch requests to get the weekly forcast I should have used a API to find the geo tag of the searched city to then display the weekly forcast rather than send 2 fetchs to OpenWeatherMap.</p>

            </div>
           </div>

 
    
                    <iframe className='video-box' id={Date.now()} src="https://www.youtube-nocookie.com/embed/G78TFSmH3Zs?autoplay=1&mute=1&controls=1&playlist=G78TFSmH3Zs&loop=1&modestbranding=1" title="OurWorldVideo"  height="500px"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
                </div>
            </div>
            

    )
}

export default WeatherApp;