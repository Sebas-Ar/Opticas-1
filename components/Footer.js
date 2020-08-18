import React from 'react'

const Footer = () => {
    return (
        <footer>
            <p>Camila Hernández | Sebastian Arias | Diego Toro</p>
            <p>Universidad Santo Tomás</p>

            <style jsx>{`
                
                footer {
                    width: 100%;
                    height: 50px;
                    background: rgb(11, 67, 99);
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }   

                p {
                    color: white;
                    text-align: center;
                } 
            
            `}</style>
        </footer>
    )
}

export default Footer
