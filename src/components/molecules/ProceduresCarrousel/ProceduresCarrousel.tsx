'use client'

import { CardEspecialidade } from '@/app/_components/CardEspecialidade/CardEspecialidade'
import { ArrowLeftIcon } from '@/components/@icons/arrow-left'
import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { cn } from '@/lib/utils'
import { ComponentProps, useEffect, useRef, useState } from 'react'

export type ProceduresCarrouselProps = ComponentProps<'ul'>

export function ProceduresCarrousel({
  className,
  ...rest
}: ProceduresCarrouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const carrouselRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)
  const [visibleCardsCount, setVisibleCardsCount] = useState(3)
  const [maxIndex, setMaxIndex] = useState(0)
  const [canNavigate, setCanNavigate] = useState({ prev: false, next: false })
  const [isMobile, setIsMobile] = useState(false)

  const procedures = [
    {
      href: '#',
      imageHref: '/procedimentos/ultra_sonografia.png',
      title: 'Ultras-sonografia',
    },
    {
      href: '#',
      imageHref: '/procedimentos/hemograma.png',
      title: 'Hemograma',
    },
    {
      href: '#',
      imageHref: '/procedimentos/eletro_falograma.png',
      title: 'Eletroence-falograma',
    },
    {
      href: '#',
      imageHref: '/procedimentos/eletro_cardiograma.png',
      title: 'Eletro-cardiograma',
    },
    {
      href: '#',
      imageHref: '/procedimentos/colonoscopia.png',
      title: 'Colonoscopia',
    },
    {
      href: '#',
      imageHref: '/procedimentos/tomografia.png',
      title: 'Tomografia',
    },
  ]

  const CARD_WIDTH = 209
  const CARD_GAP = 24
  const MD_BREAKPOINT = 768

  const handleGoNext = () => {
    if (carrouselRef.current && index < maxIndex && !isMobile) {
      setIndex((prev) => prev + 1)
    }
  }

  const handleGoBack = () => {
    if (carrouselRef.current && index > 0 && !isMobile) {
      setIndex((prev) => prev - 1)
    }
  }

  const getContainerWidth = () => {
    if (!containerRef.current) return 0
    return containerRef.current.clientWidth > 1536
      ? containerRef.current.clientWidth - 120
      : containerRef.current.clientWidth
  }

  const updateCarouselState = () => {
    if (!containerRef.current || !carrouselRef.current) return

    const isMobileView = window.innerWidth < MD_BREAKPOINT
    setIsMobile(isMobileView)

    if (isMobileView) {
      setVisibleCardsCount(procedures.length)
      setMaxIndex(0)
      setCanNavigate({ prev: false, next: false })
    } else {
      const containerWidth = getContainerWidth()
      const visibleWidth = containerWidth - 2 * 210
      const cardTotalWidth = CARD_WIDTH + CARD_GAP
      const newVisibleCardsCount = Math.floor(visibleWidth / cardTotalWidth)
      const newMaxIndex = Math.max(0, procedures.length - newVisibleCardsCount)

      setVisibleCardsCount(newVisibleCardsCount)
      setMaxIndex(newMaxIndex)
      setIndex((prev) => Math.min(prev, newMaxIndex))
      setCanNavigate({
        prev: index > 0,
        next: index + 2 < newMaxIndex,
      })
    }
  }

  useEffect(() => {
    updateCarouselState()
    window.addEventListener('resize', updateCarouselState)
    return () => window.removeEventListener('resize', updateCarouselState)
  }, [index])

  const getCarouselStyle = () => {
    if (isMobile) return undefined
    const offset = -(index * (CARD_WIDTH + CARD_GAP))
    return { transform: `translateX(${offset}px)` }
  }

  const shouldShowOverlay = (cardIndex: number) => {
    if (isMobile) return false
    const firstVisibleIndex = index
    const lastVisibleIndex = index + visibleCardsCount - 1
    return (
      cardIndex === firstVisibleIndex - 1 || cardIndex === lastVisibleIndex + 3
    )
  }

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div className={cn('relative', !isMobile && 'px-14')}>
        <ul
          ref={carrouselRef}
          className={cn(
            'flex gap-x-6 mt-11',
            isMobile
              ? 'overflow-x-auto snap-x px-4 snap-mandatory scrollbar-hide'
              : 'transition-transform duration-500 ease-out',
            className,
          )}
          style={getCarouselStyle()}
          {...rest}
        >
          {procedures.map(({ href, imageHref, title }, cardIndex) => (
            <li
              key={title}
              className={cn('relative flex-shrink-0', isMobile && 'snap-start')}
            >
              <CardEspecialidade
                size="sm"
                title={title}
                href={href}
                imageHref={imageHref}
              />
              {shouldShowOverlay(cardIndex) && (
                <div className="absolute inset-0 bg-white/80" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {!isMobile && canNavigate.next && (
        <button
          onClick={handleGoNext}
          className="absolute right-0 top-0 h-full w-[210px] flex items-center justify-center"
        >
          <IconButton icon={<ArrowRightIcon />} />
        </button>
      )}

      {!isMobile && canNavigate.prev && (
        <button
          onClick={handleGoBack}
          className="absolute left-0 top-0 h-full w-[210px] flex items-center justify-center"
        >
          <IconButton icon={<ArrowLeftIcon />} />
        </button>
      )}
    </div>
  )
}
