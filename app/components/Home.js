import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      You are on your home page
      <br />
      <Link to="/pokemon">To POKEMON</Link>
    </div>
  );
}
