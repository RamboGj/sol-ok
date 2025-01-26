/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function Testimonials() {
  const testimonials = [
    {
      customer: 'Francisco',
      description:
        '“Fiz a minha carteirinha e foi muito rápido, não paguei nada e gostei porque não tem mensalidade.”',
      photo: '/cases/francisco.png',
    },
    {
      customer: 'Francisco',
      description:
        '“Fiz a minha carteirinha e foi muito rápido, não paguei nada e gostei porque não tem mensalidade.”',
      photo: '/cases/francisco.png',
    },
    {
      customer: 'Rebeca Silva',
      description:
        '“Me ajudou muito pois em um momento super delicado consegui realizar um ultrassom obstétrico de forma rápida e com valor baixo.”',
      photo: '/cases/rebecca.png',
    },
  ]

  const screenRef = useRef<HTMLDivElement>(null)

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorRotation, setCursorRotation] = useState<number>(0)
  const [activeIndex, setActiveIndex] = useState<number>(
    Math.floor(testimonials.length / 2),
  )

  console.log('activeIndex ->', activeIndex)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth
      const mouseXPercentage = (e.clientX / windowWidth) * 100

      // Rotate cursor based on screen position
      const rotation = mouseXPercentage < 50 ? -180 : 0
      setCursorRotation(rotation)

      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleTestimonialClick = (e: any) => {
    const windowWidth = window.innerWidth
    const mouseXPercentage = (e.clientX / windowWidth) * 100

    const direction = mouseXPercentage < 50 ? 'left' : 'right'

    if (direction === 'right' && activeIndex + 1 === testimonials.length) return
    if (direction === 'left' && activeIndex - 1 < 0) return

    const newIndex = direction === 'left' ? activeIndex - 1 : activeIndex + 1
    setActiveIndex(newIndex)
  }

  return (
    <section
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      data-hovering={isHovering}
      ref={screenRef}
      className="bg-blue100 py-[120px] custom-cursor-trigger  data-[hovering=true]:cursor-none"
      id="testimonials"
    >
      <ul
        onClick={handleTestimonialClick}
        style={{
          transform: `translateX(-${(446 + 177 - 48) * activeIndex}px)`,
        }}
        className="transition-transform duration-1000 gap-x-[177px] flex items-start px-12"
      >
        {testimonials.map(({ customer, description, photo }, index) => {
          return (
            <li key={index}>
              <div
                data-in-view={activeIndex === index}
                className="w-[892px] select-none data-[in-view=true]:opacity-100 opacity-[24%]"
              >
                <Heading className="text-blue500" variant="h2">
                  {description}
                </Heading>

                <div className="flex items-end gap-x-6 mt-14">
                  <Image
                    width={120}
                    height={120}
                    src={photo}
                    alt={`${customer} Photo.`}
                  />
                  <Paragraph size="md">{customer}</Paragraph>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <div
        className={`fixed pointer-events-none z-50 scale-0 ${isHovering ? 'block cursor-none' : 'hidden'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) rotate(${cursorRotation}deg)`,
        }}
      >
        <IconButton icon={<ArrowRightIcon />} />
      </div>
    </section>
  )
}
