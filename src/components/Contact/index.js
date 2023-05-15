import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [] )

    const sendEmail = (e) => {
        e.preventDefault() 

        emailjs
        .sendForm(
            'service_qevtj2h',
            'template_zdcikja',
            refForm.current,
            'Qh0pBEAfMJYiICEXk'
        )
        .then(
            () => {
                alert('Message send')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message')
            }
        )
    }

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in full-time offers to take my first steps into IT Industry. 
                    However freelance opportunities are also welcome - especially taking part in Open Source projects to develop my coding skills and expand personal portfolio.
                    If You have other request or questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                     <form ref={refForm} onSubmit={sendEmail} > 
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email adress" required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject"  required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;