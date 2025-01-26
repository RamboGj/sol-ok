import { CardEspecialidade } from '@/app/_components/CardEspecialidade/CardEspecialidade'
import { ArrowLeftIcon } from '@/components/@icons/arrow-left'
import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { useEffect, useRef, useState } from 'react'

export function ProceduresCarrousel() {
  const carrouselRef = useRef<HTMLUListElement>(null)

  const [index, setIndex] = useState(0)
  const [isAbleToGoNext, setIsAbleToGoNext] = useState(false)

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
        (carrouselRef.current.scrollWidth - window.innerWidth) / 209,
      )

      if (index + 1 > maxIndex) {
        setIsAbleToGoNext(false)
      }
    }
  }, [index])

  useEffect(() => {
    const checkCarouselNavigation = () => {
      if (carrouselRef.current) {
        const canGoNext = carrouselRef.current.scrollWidth > window.innerWidth

        console.log(
          'carrouselRef.current.scrollWidth ->',
          carrouselRef.current.scrollWidth,
        )

        console.log('window.innerWidth ->', window.innerWidth)

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
    <ul
      style={{
        transform: `translateX(-${209 * index}px)`,
      }}
      ref={carrouselRef}
      className="flex gap-x-6 mt-20 ml-[210px] pr-[210px] relative transition-transform duration-500"
    >
      {procedures.map(({ href, imageHref, title }) => {
        return (
          <li key={title}>
            <CardEspecialidade
              size="sm"
              title={title}
              href={href}
              imageHref={imageHref}
            />
          </li>
        )
      })}

      {isAbleToGoNext && (
        <li
          role="button"
          onClick={handleGoNext}
          className="absolute w-[230px] group hover:cursor-pointer -right-[56px] h-[408px] bg-white/80 flex items-center justify-center"
        >
          <IconButton icon={<ArrowRightIcon />} />
        </li>
      )}

      {isAbleToGoBack && (
        <li
          role="button"
          onClick={handleGoBack}
          className="absolute w-[230px] group hover:cursor-pointer h-[408px] bg-white/80 flex items-center justify-center"
        >
          <IconButton icon={<ArrowLeftIcon />} />{' '}
          {/* You'll need to import ArrowLeftIcon */}
        </li>
      )}
    </ul>
  )
}
