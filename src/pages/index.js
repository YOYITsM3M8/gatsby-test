import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Avatar from "../components/avatar";
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    const { id = 2584924 } = request.query
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Gatsby + Node.js (TypeScript) API</title>
      </Helmet>
      <h1>Gatsby + Node.js (TypeScript) API</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/blob/master/gatsby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
        directories, <code>/src</code> for static content and <code>/api</code>{' '}
        which contains a serverless{' '}
        <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js (TypeScript)
        </a>
        .
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : '...'}</p>
      <Avatar alt="" src="1882674"/>
    </main>
  );
}

export default Index;
