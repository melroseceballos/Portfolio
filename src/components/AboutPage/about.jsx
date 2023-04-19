import './styles.css'

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
      <h1 className="aboutIntro">Hi There <span className="hand-emoji" role="img" aria-label="Waving Hand">👋</span><br />My Name is Melrose Ceballos</h1>
        <h3 className='buzz'>..and I'm so buzzed to meet you!</h3>
        <img className="pic" src="pfp.png"/>
        <div>
         <a href="#">
         <span class="left"></span>
         </a>
         </div>
         <div>
         </div>
         <div>
         <a href="#">
         <span class="right"></span>
         </a>
        </div>
        <div className='paragraph'>
          <p>I am a Full-Stack Software Engineer specializing in Front-End development and Databases. 
            My favorite Front-end technologies are React.js and Vue.js, while my go-to backend technologies are Django and Express. 
            When working on projects, I enjoy setting up models and routes, building REST APIs, and styling. 
            I love being a Full-Stack software engineer because it challenges me to be efficient and innovative in my thinking,
             while also allowing me to express my creativity in multiple ways!
      </p>
      </div>
      </div>
    </div>
  );
}

export default About;
