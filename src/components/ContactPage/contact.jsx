import './styles.css'

function Contact()  {
    return (
        <>
        <div className='Touch'>
        <img id='contact' className='contactSVG' src='/Contact.svg' />
        <a href='https://www.linkedin.com/in/melrose-ceballos/' target='_blank'><h1 className='linkedIn'>LinkedIn</h1></a>
        <a href='https://github.com/melroseceballos' target='_blank'><h1 className='gitHub'>Github</h1></a>
        <a href='https://discordapp.com/users/Melrose#7519' target='_blank'><h1 className='discord'>Discord</h1> </a>
        <a href='mailto:mcm44@hawaii.edu'><button className='email'>Email Me</button></a>
        </div>
           
        
        </>
    )
}


export default Contact