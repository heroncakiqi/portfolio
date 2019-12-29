import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
    </nav>
  )
}
