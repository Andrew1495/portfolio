import Stack from '@mui/material/Stack';
import {Carousel} from '3d-react-carousal';
import { Link } from 'react-router-dom';
import { DiPython, DiJavascript1, DiCss3, DiHtml5, DiReact, DiJava} from "react-icons/di";
import { useState } from 'react';
import {SiSpring} from 'react-icons/si'



const HomePage = () => {
    const [timer, setTimer] = useState(10000)

    let slides = [
        <Link to='/portfolio/EducationApp'> <img className='project-screenshot' src="https://i.imgur.com/yOgs968.png" alt="2" /> </Link> ,
        <Link to='/portfolio/EducationApp'> <img className='project-screenshot' src="https://i.imgur.com/p2XPUkX.png" alt="1" /> </Link> ,
        <Link to='/portfolio/BucketList'><img className='project-screenshot' src="https://i.imgur.com/rbXZhjy.jpg"  alt="3" />  </Link> ,
        <Link to='/portfolio/BucketList'> <img className='project-screenshot' src="https://i.imgur.com/ge8OePu.png" alt="4" /> </Link>  ,
        <Link to='/portfolio/WeatherApp'> <img  className='project-screenshot' src="https://i.imgur.com/Ty9ZiPG.jpg"  alt="4" /> </Link>  ,
        <Link to='/portfolio/BabyApp'> <img  className='project-screenshot' src="https://i.imgur.com/quKz74x.png"  alt="4" /> </Link>  ,
    ]


    const callback = function(){
        setTimer(10000)
    }


    return(
<Stack
  direction="column"
  justifyContent="space-evenly"
  alignItems="stretch"
  spacing={3}
>        

    <div className='header-icons'>
        <h1>Andrew Fairley</h1>
        <h2>Software Developer</h2>
        <div className='dev-icons'>
            <DiPython/> <DiJavascript1/> <DiCss3/> <DiHtml5/> <DiReact/> <DiJava/> <SiSpring/>      
        </div>
    </div>


    <Carousel slides={slides} autoplay={true} interval={timer}  onSlideChange={callback}/>
</Stack>
        )
}


export default HomePage;