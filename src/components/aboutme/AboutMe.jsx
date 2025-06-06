


import './aboutme.css'
import { LuGithub } from 'react-icons/lu'
import { TiSocialLinkedin } from 'react-icons/ti'
import { RiInstagramLine } from 'react-icons/ri'
import logo from "../../assets/khansa-image.png"

const AboutMe = () => {
    return (
        <div className='aboutme' id='Home'>
            <div className='aboutme-leftsection'>
                <h1>Frontend ReactJS Developer</h1>

                <p>Hi, Im <span><b>( KHANSA RANI )</b></span>. A passionate Front-end React Developer based in Karachi, Pakistan.<span className='toggle'> 📍</span> 
                 I am passionate about building responsive and user-friendly websites.</p>

                <div className='link-btns'>
                <TiSocialLinkedin  className='link-btn-color'/>
               <a href="https://github.com/Ismailkhan2468" target='blank'><LuGithub className='link-btn-color'/></a>
                    <RiInstagramLine className='link-btn-color'/>

                </div>
            </div>

            {/* YEH IMAGE WALI DIV HAI */}
            <div className='aboutme-picture'>
                <img src={logo} />
            </div>
        </div>
    )
}

export default AboutMe