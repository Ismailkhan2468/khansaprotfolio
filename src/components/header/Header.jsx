
import { MdSunny } from 'react-icons/md'
import './header.css'

const Header = () => {

    const headerMenuItems = [
        {
            itemName: "Home",
            itemLink: "/"
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
            itemLink: "#education"
        },
        {
            itemName: "Contact Me",
            itemLink: "#contactme"
        },
    ]



    return (
        <header>
             <span className='header-logo-img'><img src="header-logo.png" alt="" />
             </span>

            <ul className='header-menuitems'>
                {headerMenuItems.map((i, index) => {
                    return (
                        <li key={index}>{i.itemName}</li>
                    )
                })}
            </ul>

            <button className='sun-btn'><MdSunny className='sun-btn-icon'/>
            </button>
        </header>
    )
}

export default Header