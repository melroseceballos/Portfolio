import './styles.css'


function About() {
  return (
    <div className="about-container">
      <img src="/AboutFirst.svg" alt='beesBG' className='aboutFirstSVG'/>
      <div className="about-text">
        <h1 className="aboutIntro">Hi There! <br />I'm BUZZZED to meet you!</h1>
        <img className="pic" src="pfp.png"/>
      </div>
    </div>
  );
}

export default About;
