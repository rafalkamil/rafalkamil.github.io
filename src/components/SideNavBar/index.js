import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {Link, NavLink} from 'react-router-dom'

const SideNavBar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="blank" rel='noreferrer' href='https://www.linkedin.com/in/rafalkamilpawlik/'>
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="blank" rel='noreferrer' href='https://github.com/rafalkamil'>
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default SideNavBar