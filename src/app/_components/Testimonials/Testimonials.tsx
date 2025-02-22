/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import Image from 'next/image'
import { ComponentProps, useEffect, useRef, useState } from 'react'

export interface TestimonialProps {
  testimonial: string
  personImg: string
  personTitle: string
  personSubtitle?: string
}

export interface TestimonialsProps extends ComponentProps<'div'> {
  testimonials: TestimonialProps[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const screenRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorRotation, setCursorRotation] = useState<number>(0)
  const [activeIndex, setActiveIndex] = useState<number>(
    Math.floor(testimonials.length / 2),
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) return // Don't track mouse movement on mobile

    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth
      const mouseXPercentage = (e.clientX / windowWidth) * 100
      const rotation = mouseXPercentage < 50 ? -180 : 0
      setCursorRotation(rotation)
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  const handleTestimonialClick = (e: any) => {
    if (isMobile) return // Disable click handling on mobile

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
      onMouseEnter={() => !isMobile && setIsHovering(true)}
      onMouseLeave={() => !isMobile && setIsHovering(false)}
      data-hovering={isHovering}
      ref={screenRef}
      className="bg-blue100 py-16 md:py-20 lg:py-[120px] lg:custom-cursor-trigger lg:data-[hovering=true]:cursor-none"
      id="testimonials"
    >
      <div className="max-w-full overflow-x-auto lg:overflow-x-hidden">
        <ul
          onClick={handleTestimonialClick}
          style={{
            transform: isMobile
              ? 'none'
              : `translateX(-${(446 + 177 - 48) * activeIndex}px)`,
          }}
          className={`
            snap-x snap-mandatory
            flex items-start px-4 gap-x-8
            md:px-8 md:gap-x-20
            lg:px-12 lg:gap-x-[177px] lg:transition-transform lg:duration-1000
          `}
        >
          {testimonials.map(
            (
              { personTitle, testimonial, personImg, personSubtitle },
              index,
            ) => {
              return (
                <li key={index} className="flex-shrink-0 snap-center">
                  <div
                    data-in-view={activeIndex === index}
                    className={`
                      w-[256px] select-none
                      md:w-[600px]
                      lg:w-[892px] lg:scale-90 lg:transition-all lg:duration-300
                      lg:data-[in-view=true]:opacity-100 lg:data-[in-view=true]:scale-100
                      ${!isMobile && activeIndex !== index ? 'lg:opacity-[24%]' : 'opacity-100'}
                    `}
                  >
                    <Heading
                      className="text-blue500 hidden lg:block"
                      variant="h2"
                    >
                      {testimonial}
                    </Heading>
                    <Heading
                      className="text-blue500 hidden md:block lg:hidden"
                      variant="h3"
                    >
                      {testimonial}
                    </Heading>
                    <Heading className="text-blue500 md:hidden" variant="h4">
                      {testimonial}
                    </Heading>

                    <div className="flex items-end gap-x-4 mt-8 md:gap-x-6 md:mt-14">
                      <Image
                        width={120}
                        height={120}
                        src={personImg}
                        alt={`${personTitle} Photo.`}
                      />
                      <div>
                        <Paragraph size="md">{personTitle}</Paragraph>
                        <Paragraph className="text-blue500" size="md">
                          {personSubtitle}
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </li>
              )
            },
          )}
        </ul>
      </div>

      {!isMobile && (
        <div
          className={`fixed pointer-events-none z-50 ${
            isHovering ? 'cursor-none' : ''
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `translate(-50%, -50%) rotate(${cursorRotation}deg)`,
          }}
        >
          <IconButton
            className={`transition-all duration-500 ease-out w-[56px] h-[56px] ${
              isHovering
                ? 'scale-100 opacity-100 cursor-none'
                : 'scale-0 opacity-0'
            }`}
            icon={<ArrowRightIcon />}
          />
        </div>
      )}
    </section>
  )
}
