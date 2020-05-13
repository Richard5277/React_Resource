import React, { useState } from 'react';
import { NavLink, Router } from "react-router-dom";
import Link from 'next/link';

import AddOn from '../src/components/addon/addon'

const NavItem = (props: any) => {
  const { location, title, exact } = props;
  const { onClickItem } = props;
  return (
    <li className="nav-item rr_nav-item" onClick={() => { onClickItem() }}>
      <Link href={location}>{title}</Link>
    </li>
  )
}

export default function Home() {
  const [ isOpen, setIsOpen ] = useState(false)
  return (
    <div className="container">
      <AddOn />
      <main>
        <nav className="navbar navbar-expand-lg navbar-light rr_nav">
        <Link href='/'>R.R.B</Link>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="navbar-toggler rr_nav-button"
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon rr_nav-icon"></span>
        </button>
        <div className={isOpen ? 'navbar-collapse' : 'collapse navbar-collapse'} id="navbarNav">
          <ul className="navbar-nav">
            <NavItem location='/' title='Home' exact={true} onClickItem={() => setIsOpen(false)} isHamburger={isOpen} />
            <NavItem location='/xstate' title='XState' onClickItem={() => setIsOpen(false)} />
            <NavItem location='/spread' title='Spread' onClickItem={() => setIsOpen(false)} />
            <NavItem location='/custom-hook' title='Custom Hook' onClickItem={() => setIsOpen(false)} />
          </ul>
        </div>
      </nav>
        <h1 className="title">
          Read <Link href="posts/first-post"><a href="posts/first-post">this post!</a></Link>
        </h1>

        
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        
        footer img {
          margin-left: 0.5rem;
        }


        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
