import "./About.css";
import aboutGIF from './about.gif';
const About = () => (
  <div className="about">
    <h1>About Section</h1>
    <div className="about-container">
      <div className="gif_image">
        <img src={aboutGIF} alt="Description of GIF" className="gif_image"/>
      </div>
    
      <div className="text">
        <p>
        I am currently pursuing a Master's in Computer Science at Missouri
        University of Science and Technology, where I have maintained a GPA of
        3.5/4 since August 2023. Prior to this, I completed my Bachelor's degree
        in Computer Science at Jawaharlal Nehru Technological University from
        July 2018 to July 2022. <br /> <br/>I am
        passionate about competitive programming and problem-solving, which have
        helped me develop strong analytical thinking and the ability to tackle
        complex challenges. I thrive in fast-paced environments and can quickly
        adapt to new technologies, staying current in the ever-changing tech
        landscape. <br/> <br/> In addition to my technical skills, I am a strong team
        leader. I believe in collaboration and driving projects to successful
        completion. My experience working in various team settings has improved
        my leadership skills, allowing me to guide teams effectively toward
        achieving their goals. I am excited about future opportunities and I am
        always ready to take on new challenges to further my growth and
        development in computer science.
        </p>
      </div>
    </div>
  
  </div>
);

export default About;
