import React, { useState } from 'react';
import './setup.css';
import Form1 from './form1';

export default function Setup() {
  const [page, setPage] = useState(1);
  return (
      <div className="setup">
        <Form1 />
      </div>
  );
}
