import './About.css'
import React from 'react'

const About = () => {
  return (
    <div>
    <header>
        <nav>
            <div className="container">
                <h1>Caremetics</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section className="about">
        <div className="container">
            <h2>About Caremetics</h2>
            <p>Caremetics is your trusted destination for high-quality cosmetics. We believe in the power of natural ingredients and innovative formulations to enhance your beauty and confidence. With a wide range of products designed to cater to different skin types and preferences, we are committed to providing you with the best beauty solutions.</p>

            <h3>Our Mission</h3>
            <p>At Caremetics, our mission is to promote self-expression and self-confidence by offering top-notch cosmetic products that align with your unique style and personality. We strive to create a positive impact on the beauty industry by prioritizing quality, inclusivity, and customer satisfaction.</p>
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

export default About