import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [] );

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I’m Civil M. Eng who seek to advance career as .Net sofware developer.  I have been passionate about programming for many years and I would like to do it full-time.</p> 
                <p>Currently, as a freelancer I’ve been developing app for the accounting office. However, I believe that full-time job allow me to develop and expand my skills thanks to mentoring and working on web apps.</p>
            </div>
        </div>

        
    )
}

export default About