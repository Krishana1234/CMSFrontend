import './Contact.css'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <header>
        <nav>
            <div className="container">
                <h1>Caremetics</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                  
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section className="contact">
        <div className="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to get in touch with us.</p>

            <form action="#" method="post">
                <label htmlFor="asd" >Name:</label>
                <input type="text" id="name" name="name" required/>

                <label  htmlFor="asd">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label  htmlFor="asd">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
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

export default Contact