'use client'

import { CardEspecialidade } from '@/app/_components/CardEspecialidade/CardEspecialidade'
import { ArrowLeftIcon } from '@/components/@icons/arrow-left'
import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { cn } from '@/lib/utils'
import { ComponentProps, useEffect, useRef, useState } from 'react'

export type EspecialidadesCarrouselProps = ComponentProps<'ul'>

export function EspecialidadesCarrousel({
  className,
  ...rest
}: EspecialidadesCarrouselProps) {
  const carrouselRef = useRef<HTMLUListElement>(null)

  const [index, setIndex] = useState(0)
  const [isAbleToGoNext, setIsAbleToGoNext] = useState(false)

  const especialidades = [
    {
      title: 'Cuidado com os olhos',
      imageHref: '/especialidades/olhos.png',
      href: '#',
    },
    {
      title: 'Saúde bucal',
      imageHref: '/especialidades/saude_bucal.png',
      href: '#',
    },
    {
      title: 'Mente saudável',
      imageHref: '/especialidades/mente.png',
      href: '#',
    },
    {
      title: 'Cuidados da pele',
      imageHref: '/especialidades/cuidados_pele.png',
      href: '#',
    },
    {
      title: 'Coração em dia',
      imageHref: '/especialidades/coracao.png',
      href: '#',
    },
    {
      title: 'Saúde da mulher',
      imageHref: '/especialidades/saude_da_mulher.png',
      href: '#',
    },
    {
      title: 'Criança saudável',
      imageHref: '/especialidades/crianca_saudavel.png',
      href: '#',
    },
  ]

  function handleGoNext() {
    if (!carrouselRef.current) return

    // Calculate new scroll position
    const cardWidth = 209
    const newScrollPosition = index * cardWidth + cardWidth

    carrouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    })

    setIndex((prevIndex) => prevIndex + 1)
  }

  function handleGoBack() {
    if (!carrouselRef.current || index === 0) return

    // Calculate new scroll position
    const cardWidth = 209
    const newScrollPosition = (index - 1) * cardWidth

    carrouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    })

    setIndex((prevIndex) => prevIndex - 1)
    setIsAbleToGoNext(true)
  }

  const isAbleToGoBack = index > 0

  useEffect(() => {
    if (carrouselRef.current) {
      const maxIndex = Math.ceil(
        (carrouselRef.current.scrollWidth + 209 - window.innerWidth) / 209,
      )

      if (index + 1 > maxIndex) {
        setIsAbleToGoNext(false)
      }
    }
  }, [index])

  useEffect(() => {
    const checkCarouselNavigation = () => {
      if (carrouselRef.current) {
        const canGoNext =
          carrouselRef.current.scrollWidth + 209 > window.innerWidth

        setIsAbleToGoNext(canGoNext)
      }
    }

    // Check on mount and add resize listener
    checkCarouselNavigation()
    window.addEventListener('resize', checkCarouselNavigation)

    return () => {
      window.removeEventListener('resize', checkCarouselNavigation)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <ul
        ref={carrouselRef}
        className={cn(
          'flex gap-x-6 ml-14 2xl:ml-[210px] pr-14 2xl:pr-[210px] transition-transform duration-500',
          className,
        )}
        style={{
          transform: `translateX(-${(200 + 24) * index}px)`,
        }}
        {...rest}
      >
        {especialidades.map(({ href, imageHref, title }) => {
          return (
            <li key={title}>
              <CardEspecialidade
                title={title}
                href={href}
                imageHref={imageHref}
              />
            </li>
          )
        })}
      </ul>

      {isAbleToGoNext && (
        <div className="absolute bottom-0 right-0">
          <div
            role="button"
            onClick={handleGoNext}
            className="w-[200px] group hover:cursor-pointer h-[408px] bg-white/80 flex items-center justify-center"
          >
            <IconButton icon={<ArrowRightIcon />} />
          </div>
        </div>
      )}

      {isAbleToGoBack && (
        <div className="absolute bottom-0 left-0">
          <div
            role="button"
            onClick={handleGoBack}
            className="w-[200px] group hover:cursor-pointer h-[408px] bg-white/80 flex items-center justify-center"
          >
            <IconButton icon={<ArrowLeftIcon />} />
          </div>
        </div>
      )}
    </div>
  )
}
