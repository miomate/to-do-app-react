import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>

            <footer className = {styles.footer}>

             

                <p>Made by Mariah and Albert. Code on
                    <a href="https://github.com/Mah30/to-do-app" target='_blank' style={{}}>
                    
                        <span> GitHub.</span>
                    </a>
                </p>    
            
            </footer>
        </>

    );
};


export default Footer;