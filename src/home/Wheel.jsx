import React, { useEffect, useState } from 'react';
import './wheel.css';

const items = [
  {
    title: 'title 1',
    text: 'des 1'
    },
{
    title: 'title 2',
    text: 'des 2'
    },
  {
    title: 'title 3',
    text: 'des 3'
    },
  {
    title: 'title 4',
    text: 'des 4'
    }
];

const RotatingWheel = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 90) % 360);
    }, 30*100); 

    return () => clearInterval(interval);
  }, []);

  const radius = 240;
  const centerX = 300;
  const centerY = 300;

  return (
    <div className="rotating-wheel">
      <div className="center-text">tekst</div>
      {items.map((item, index) => {
        const itemAngle = ((360 / items.length) * index + angle) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(itemAngle) - 100; 
        const y = centerY + radius * Math.sin(itemAngle) - 60;  

        return (
          <div key={index} className="card" style={{ left: `${x}px`, top: `${y}px` }}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RotatingWheel;
