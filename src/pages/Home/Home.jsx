import'./Home.css'
import React from 'react'

function Home (){
  return (
    <div>
 
    <header>
        <nav>
            <div className="container">
                <h1>Caremetics</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section className="hero">
        <div className="container">
            <h2>Welcome to Caremetics</h2>
            <p>Your destination for high-quality cosmetics.</p>
            <a href="#" className="cta-button">Explore Now</a>
        </div>
    </section>

    <footer>
        <div className="container">
            <p>&copy; 2023 Caremetics. All rights reserved.</p>
        </div>
    </footer>


    </div>

    )

  }

export default Home