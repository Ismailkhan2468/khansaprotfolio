
import { MdSunny } from 'react-icons/md'
import './header.css'
import logok from '../../assets/logo-k.png'

const Header = () => {

    const headerMenuItems = [
        {
            itemName: "Hom",
            itemLink: "#Home"
        },
        {
            itemName: "About me",
            itemLink: "#AboutMe"
        },
        {
            itemName: "Projects",
            itemLink: "#projects"
        },
        {
            itemName: "Education",
            itemLink: "#EducationPart"
        },
        {
            itemName: "Contact Me",
            itemLink: "#contactme"
        },
    ]



    return (
        <header className='main-header'>
             <span className='header-logo-img'><img src={logok} />
             </span>

            <ul className='header-menuitems'>
                {headerMenuItems.map((i, index) => {
                    return (
                    <li key={index}><a href={i.itemLink}>{i.itemName}</a></li>
                    )
                })}
            </ul>

            <button className='sun-btn'><MdSunny className='sun-btn-icon'/>
            </button>
        </header>
    )
}

export default Header