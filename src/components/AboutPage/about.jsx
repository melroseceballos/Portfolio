import './styles.css'

function About() {
  return (
  <>
  <div className='aboutPage'>
   <div className="about-container">
      <div className="about-text">
      <h1 id='about' className="aboutIntro">Hi There <span className="hand-emoji" role="img" aria-label="Waving Hand">👋</span><br />My Name is Melrose Ceballos</h1>
        <h3 className='buzz'>..and I'm so buzzed to meet you!</h3>
        </div>
        <div className="pic" ><img src="pfp.png"/></div>
        <div className='paragraph'>
          <p>I am a Full-Stack Software Engineer specializing in Front-End development and Databases. 
            My favorite Front-end technologies are React.js and Vue.js, while my go-to backend technologies are Django and Express. 
            When working on projects, I enjoy setting up models and routes, building REST APIs, and styling. 
            I love being a Full-Stack software engineer because it challenges me to be efficient and innovative in my thinking,
             while also allowing me to express my creativity in multiple ways!
             <br />
             <br />
            <a href='https://drive.google.com/file/d/1WoYG7HitWH53UDRhBxBZuFB4PIt969_u/view?usp=sharing' target='_blank'><span className='resume'> 📄 Resume </span></a>
              </p>
            
      </div>
    </div>
    <div className='extra'>
    <h1 className='strong'><strong>My Favorite Technologies:  </strong>
    <br /> 
    <div className='elements'>
    <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg" width="36" height="36" alt="C++" /></a>
    <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="36" height="36" alt="Java" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
    <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" /></a>
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
    <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="36" height="36" alt="Vite" /></a>
    <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg" width="36" height="36" alt="Fast API" /></a>
    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
    <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" /></a>
    <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg" width="36" height="36" alt="Django" /></a>
    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>
    <a href="https://www.heroku.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" width="36" height="36" alt="Heroku" /></a>
    </div>
    </h1>
    <a href='https://github.com/melroseceballos' target='_blank'><button className='github'> More On Github</button> </a>
    </div>
    <div>
      {/* <p className='mode'> 🌞 Lightmode Placeholder</p> */}
    </div>
    </div>

  </>
   
  );
}

export default About;
