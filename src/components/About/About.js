import "./About.css";
import {animated, useSpring} from "react-spring";
import aboutGIF from './about.gif';
export default function About () {
  const props = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 2000 },
  });
  return (
  <div className="about">
    <animated.h1 style={props}>Who Am I?</animated.h1>
    <div className="about-container">
      <div className="gif_image">
        <img src={aboutGIF} alt="Description of GIF" className="gif_image"/>
      </div>
    
      <div className="text">
        <animated.p style={props}>
        I am currently pursuing a Master's in Computer Science at Missouri
        University of Science and Technology, where I have maintained a GPA of
        3.5/4 since August 2023. Prior to this, I completed my Bachelor's degree
        in Computer Science at Jawaharlal Nehru Technological University from
        July 2018 to July 2022. <br /> <br/>I am
        passionate about competitive programming and problem-solving, which have
        helped me develop strong analytical thinking and the ability to tackle
        complex challenges. <br/> <br/> In addition to my technical skills, I am a strong team
        leader. I believe in collaboration and driving projects to successful
        completion.I am a person who welcomes new challenges and consistently proves my ability to overcome them!
        </animated.p>
        
      </div>
    </div>
  
  </div>
  );
};
