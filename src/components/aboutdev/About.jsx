import picture from '../../assets/programming.png'
import './aboutdev.css'
import htmliconn from '../../assets/html-icon.png'
import cssiconn from '../../assets/css-icon.png'
import jsiconn from '../../assets/js-icon.png'
import recicon from '../../assets/science.png'

const AboutDev = () => {
    return (
        <div className='aboutdev' id='AboutMe'>
            
            <div className='aboutdev-lr'>
                 
                  <div className='aboutdev-picture'>
                    <img src={picture} />
                </div>
                <div className='aboutdev-r'>
                <h1>About Me</h1>
                    <h2>A dedicated Front-end Developer based in Karachi, Pakistan. <span className='toggle'>📍</span></h2>

                    <p>   As a passionate Front-End Developer, I specialize in crafting seamless and 
                        responsive websites using <span>HTML5</span> <img src={htmliconn} />, <span>CSS3</span><img src={cssiconn} />, and <span>JavaScript</span> <img src={jsiconn} />. With a strong 
                        foundation in <span>React</span> <img src={recicon} />, I focus on building dynamic and interactive user
                         interfaces that offer smooth, engaging experiences. My expertise in creating 
                         clean, efficient code, combined with a keen eye for design, allows me to develop 
                         websites that are not only functional but also aesthetically appealing. I am committed
                          to staying up-to-date with
                         the latest industry trends and technologies to deliver high-quality 
                         solutions for every project I take on.  </p>
                </div>


                

            </div>
        </div>
    )
}

export default AboutDev