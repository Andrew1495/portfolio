import {DiGithubBadge} from "react-icons/di";

const BucketList = () => {


    return(
        <div className='content-page'>
        <img className='title-img' src="https://i.imgur.com/rbXZhjy.jpg" alt="" />

      
      <div className='brief-box'>
      <h2 className='project-title'>OurWorld <a href=""><DiGithubBadge className='title-logo'/></a> </h2>
           <div className='upper-wrap'>
           <div className='team-box'>
               <h3>Team:</h3>
               <ul>
                   <li>- Carly Officer <a className='team-git' href=""><DiGithubBadge/></a> </li>
                   <li>- Jacob Greenhalgh <a  className='team-git' href=""><DiGithubBadge/></a> </li>
                   <li>- Jack Knowles <a className='team-git' href=""><DiGithubBadge/></a> </li>
                   <li>- Myself <a  className='team-git' href=""><DiGithubBadge/></a> </li>
               </ul>
           </div>
           <div className='icon-box'>
               <h3>Tech:</h3>
               <div className="icon-list">
                   <ul className="spliiter"> 
                       <li>- Javascript</li>
                       <li>- React</li>
                       <li>- Css</li>
                       <li>- Html</li>
                   </ul>
                   <ul>
                       <li>- Mongodb</li>
                       <li>- Express</li>
                       <li>- Mui</li>
                   </ul>
               </div>

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
                           <li>- view educational content on global environmental topics</li>
                           <li>- view collections of different subjects and work through the pages to learn</li>
                           <li>- save progress on current learning e.g. mark a topic as read</li>
                           <li>- test their knowledge with interactive quizzes</li>
                       </ul>
               </div>
               <div className="ext">
                   <h3> Extensions </h3>
                       <ul>
                           <li>- User dashboard</li>
                           <li>- Use new React libraries</li>
                           <li>- Use external api to show the user realtime information, displayed through graphs</li>
                           <li>- Multiple users</li>
                       </ul>
               </div>
           </div>
      </div>

   <div className='preview-box'>
   <div className='summary-box'>
           <h3>Summary</h3>
           <p>
This project was carried out over the course of 1 week as a final project of the Javascript/React module.
It comprises off a frontend developed using React and a backend of MongoDb and Express.
</p>    
<p>
My primary involvement in the project was the implementation of the "log in system" and the integration of this system into the rest of the app.
</p>
<p>
This included users being able to login, logout, creating an account, saving tests scores and marking each content article as being read or adding it to their favourite's.
</p>
<p>
For this i had to fist create a user table on MongoDb then handle our request using our Express server.
</p>
<p>
Finishing it off with implanting the system into our frontend and then integrating existing features to use the new login system.
</p>

<h3>What i would do different</h3>
<p>Although the login system functions it does not have any form of authentication
and if we had more time as a group it would have been nice to look into that.</p>
<p> We had originally planned out to have a live stats page, which we later called OurStats. The idea was to have live updates on environmental topics through either live data coming from external api's, represented by graphs or relevant articles embedded on the page. Due to time restrictions and finial limits we did not have enough time to research available api's and find the information we where looking for  </p>

       </div>
       <iframe className="video-box"  src="https://www.youtube-nocookie.com/embed/07Fje-8tbF0?autoplay=1&mute=1&controls=1&playlist=07Fje-8tbF0&loop=1&modestbranding=1" title="OurWorldVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
     

   </div>
</div>
    )
}

export default BucketList;