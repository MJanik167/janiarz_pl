import React, { MouseEvent, useState } from "react";
import { useRef, useEffect } from "react";

interface props {
}

const vector = {
  x: .2,
  y: 1.2
}

function Object() {
  const [state, setState] = useState({
    position: { x: 50, y: 50 },
    direction: vector
  })

  let reference = React.createRef()

  requestAnimationFrame(() => {
    console.log(reference.current)
    let x = state.position.x + .5 * state.direction.x
    let y = state.position.y + .5 * state.direction.y

    let vx = state.direction.x
    let vy = state.direction.y

    if (x >= 100 || x <= 0)
      vx = -vx
    if (y >= 96.5 || y <= 0)
      vy = -vy

    setState({
      position: { x: x, y: y },
      direction: { x: vx, y: vy }
    })
  })

  const hover = function (e: MouseEvent): void {
    let element = reference.current as HTMLDivElement
    element.classList.add("bigger")
    vector.x = state.direction.x
    vector.y = state.direction.y

    setState({
      position: { x: state.position.x, y: state.position.y },
      direction: { x: 0, y: 0 }
    })
  }

  const resume = function (e: MouseEvent): void {
    let element = reference.current as HTMLDivElement
    console.log(element)
    element.classList.remove("bigger")

    setState({
      position: { x: state.position.x, y: state.position.y },
      direction: vector
    })
  }


  return (
    <div ref={reference as React.RefObject<HTMLDivElement>} className="object" onMouseEnter={hover} onMouseLeave={resume} style={{ left: state.position.x + "%", top: state.position.y + "%" }}></div>
  )
}

export default Object;
