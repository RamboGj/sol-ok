import { CardEspecialidade } from '@/app/_components/CardEspecialidade/CardEspecialidade'
import { ArrowLeftIcon } from '@/components/@icons/arrow-left'
import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { useEffect, useRef, useState } from 'react'

export function EspecialidadesCarrousel() {
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
    <ul
      style={{
        transform: `translateX(-${209 * index}px)`,
      }}
      ref={carrouselRef}
      className="flex gap-x-6 mt-20 ml-[210px] pr-[210px] relative transition-transform duration-500"
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
