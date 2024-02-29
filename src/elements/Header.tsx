import React from "react";
import './styles/Header.css'
import KUTE from 'kute.js'
import MenuElement from "./MenuElement";
import { useRef, useEffect } from "react";

interface props {
  items: string[]
}

function Header({ items }: props) {
  const elements = items.map((e: string) => {
    return <MenuElement text={e} key={e} />
  })
  console.log("xd")
  useEffect(() => {
    console.log("siema niu")
    let tween = KUTE.fromTo(
      '#wave1',
      { path: "#wave1" },
      { path: "#wave2" },
      { repeat: Infinity, duration: 1000, yoyo: true }
    )
    tween.start()
  }, [])
  return (
    <section className="header">
      {elements}
      <div className="wave1">
        < svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 150" preserveAspectRatio="none" >
          <defs>
            <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#012400" />
              <stop offset="26%" stopColor="#020024" />
              <stop offset="50%" stopColor="#79093a" />
              <stop offset="75%" stopColor="#004eff" />
              <stop offset="100%" stopColor="#ff00e0" />
            </linearGradient>
          </defs>
          <path id="wave1" className="shape-fill" d="M960.32,65.73C937.16,36.28,905.44,6,871.48,9.61c-39.21,4.16-44.01,49.53-93.07,64.59
c-31.31,9.61-65.36-2.29-132.2-26.47c-81.83-29.61-72.97-38.27-104.7-44.47c-110.46-21.59-174.5,91.82-254.88,59.29
C243.28,45.01,237.55,2.16,197.8,3.26c-34.56,0.95-44.43,33.71-82.49,42.35C91.8,50.94,54.95,47.67,0.32,2.2"
            strokeWidth="5px" stroke="url(#grad1)"
          ></path>
          <path id="wave2" className=" shape-fill" d="M0.31,63.92C81.51-0.33,147.9-6.67,198.63,5.61c90.13,21.81,98.42,94.51,171.35,84.44
  c86.6-11.95,151.73-125.03,194.19-62.5c11.16,16.44,19.19,42.7,37.68,47.73c22.54,6.13,29.64-27.72,53.33-40.91
  c53.48-29.76,94.48,99.78,156.51,68.18c9.85-5.02,19.13-14.77,19.13-14.77c11.8-8.85,40.2-63.92,49.04-74.24
  c10.75-12.54,32.34-8.92,80.44,68.12"
            strokeWidth="5px" stroke="url(#grad1)"
          />
        </svg >
      </div>
    </section >
  );
}

export default Header;
