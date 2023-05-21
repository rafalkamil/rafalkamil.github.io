import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const [randomWords, setRandomWords] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [] );

    useEffect(() => {
        const fetchRandomWords = async () => {
          try {
            const response = await fetch('https://backendforreactapp.azurewebsites.net/api/RandomWords'); // Replace 'API_URL' with the actual URL of your API endpoint
            const data = await response.json();
            setRandomWords(data);
          } catch (error) {
            console.log('Error fetching random words:', error);
          }
        };
      
        fetchRandomWords();
      }, []);

    return (
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1>
                <ul>
                    {randomWords.map((word, index) => (
                        <li key={index}>{word}</li>
                    ))}
                </ul>
            </div>
        </div>

        
    )
}

export default Projects