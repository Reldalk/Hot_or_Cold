import React from 'react';
import './nav_bar.css';

export default function NavigationBar() {
    const linksArray = [
        {
            text: 'WHAT?',
            href: 'http://www.thinkful.com/courses/',
          },
          {
            text: '+NEW GAME',
            href: 'http://www.thinkful.com/mentorship/',
        }
    ]
    const links = linksArray.map(link => (
        <a href={link.href} class='links'>
            {link.text}
        </a>
    ));

    return (
        <nav className="nav_bar">
            {links}
        </nav>
    );
}

