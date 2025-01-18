'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRightIcon } from '../@icons/arrow-right'
// Using an example icon

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnterTargets = () => setIsHovering(true)
    const handleMouseLeaveTargets = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)

    // Select elements you want to trigger custom cursor
    const hoverTargets = document.querySelectorAll('.custom-cursor-trigger')

    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', handleMouseEnterTargets)
      target.addEventListener('mouseleave', handleMouseLeaveTargets)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseenter', handleMouseEnterTargets)
        target.removeEventListener('mouseleave', handleMouseLeaveTargets)
      })
    }
  }, [])

  return (
    <>
      {/* Default page content with custom cursor trigger */}
      <div
        className={`custom-cursor-trigger p-4 bg-blue-100 ${isHovering ? 'cursor-none' : ''}`}
      >
        Hover over me to see custom cursor
      </div>

      {/* Custom Cursor */}
      <div
        className={`fixed pointer-events-none z-50 ${isHovering ? 'block cursor-none' : 'hidden'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="bg-white rounded-full p-2 shadow-lg">
          <ArrowRightIcon className="text-blue-500" />
        </div>
      </div>
    </>
  )
}

export default CustomCursor
