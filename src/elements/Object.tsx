import React, { MouseEvent, useEffect, useRef, useState } from "react";


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

  let reference = useRef<HTMLDivElement>(null)

  useEffect(() => {
    (reference.current as HTMLDivElement).addEventListener('mouseenter', hover as any)
    return () => {
      (reference.current as HTMLDivElement).removeEventListener('mouseenter', hover as any)
    }
  }, [state])



  requestAnimationFrame(() => {
    // console.log(reference.current)
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
    console.log(element)
    element.classList.add("bigger")
    vector.x = state.direction.x
    vector.y = state.direction.y
    //element.removeEventListener("mouseenter", hover as any)
    setState({
      position: { x: state.position.x, y: state.position.y },
      direction: { x: 0, y: 0 }
    })
    console.log(state);

    //element.addEventListener("mouseleave", resume as any)
  }

  const resume = function (e: MouseEvent): void {
    let element = reference.current as HTMLDivElement
    console.log(reference)
    setState({
      position: { x: state.position.x, y: state.position.y },
      direction: vector
    })

  }


  return (
    <div ref={reference} className="object" style={{ left: state.position.x + "%", top: state.position.y + "%" }}></div>
  )
}

export default Object;
