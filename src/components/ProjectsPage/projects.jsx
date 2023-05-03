import './styles.css'

function Projects() {
    return(
        <>
        <h1 id='projects' className='projectsTitle'>Recent Works</h1>
        <div className='projects'>

        <div className='projectOne'>
        <img src='/FilmoveSS.png' />
        <a href='https://filmove.herokuapp.com/' target='_blank'><button> 🎬 FilMove App</button></a>
        <a href='https://github.com/melroseceballos/FilMove' target='_blank'><button> 💻 Source Code</button></a>
        </div>

        <div className='projectOne'>
        <img src='/PathFinderSS.png' />
        <a href='https://pathfinder50.herokuapp.com/' target='_blank'><button> 🧭 PathFinder App</button></a>
        <a href='https://github.com/melroseceballos/Pathfinder' target='_blank'><button> 💻 Source Code</button></a>
        </div>

        <div className='projectOne'>
        <img src='/Philly.png' />
        <a><button> 🤝 Philly Outreach Site</button></a>
        <a id="long" href='https://filmove.herokuapp.com/' target='_blank'><button> 💻 Software Engineer Intern</button></a>
        </div>

        <div className='projectOne'>
        <img src='/General1.png' />
        <a><button> ⚙ General Assembly</button></a>
        <a id="long" href='https://generalassemb.ly/education/software-engineering-immersive' target='_blank'><button> 💻 Software Engineer Fellow</button></a>
        </div>

        </div>
        </>
    )
}

export default Projects