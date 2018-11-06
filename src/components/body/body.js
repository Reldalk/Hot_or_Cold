import React from 'react';

import './body.css';

export default function Body() {

    return (
        <body className = "body">
            <section className = "top">
                <text className = "top_text">Make your Guess!</text>
            </section>
            <section className = "middle">
                <input type="text" className = "middle_input" placeholder="Enter your guess"></input>
                <button className = "middle_button">Guess</button>
                <text className="middle_guess_number"><br/>Guess #<span class="zero">0</span>!</text>
            </section>
            <section className = "bottom"></section>
        </body>
    );
}

