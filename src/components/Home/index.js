import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['', 'R', 'a', 'f', 'a', 'l', ',', '']
    const jobArray = ['w', 'e', 'b', '', 'a', 'p', 'p', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [] );

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I'</span>
                <span className={`${letterClass} _14`}>m </span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={19}/>
                </h1>
                <h2>Backend / .Net / C# / SQL / MSSM / React</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    );
}

export default Home