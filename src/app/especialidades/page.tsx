'use client'

import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'

import { Header } from '@/components/molecules/Header/Header'

import { Footer } from '@/components/molecules/Footer'
import { CardEspecialidade } from '../_components/CardEspecialidade/CardEspecialidade'
import { Input } from '@/components/@solumedi-ui/molecules/Input/Input'
import { SearchIcon } from '@/components/@icons/search'
import { ListLinkItem } from '@/components/@solumedi-ui/molecules/ListLinkItem/ListLinkItem'
import { useEffect, useRef, useState } from 'react'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { ArrowLeftIcon } from '@/components/@icons/arrow-left'

export default function HomePage() {
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

  const especialidadesLinks = [
    {
      title: 'Cuidado com os olhos',
      links: [
        {
          label: 'Oftalmologista',
          href: '/especialidades/oftalmologista',
        },
        {
          label: 'Optometrista',
          href: '/especialidades/optometrista',
        },
        {
          label: 'Retinólogo',
          href: '/especialidades/retinólogo',
        },
      ],
    },
    {
      title: 'Mente saudável',
      links: [
        {
          label: 'Psicólogo',
          href: '/especialidades/psicologo',
        },
        {
          label: 'Psiquiatra',
          href: '/especialidades/psiquiatra',
        },
      ],
    },
    {
      title: 'Coração em dia',
      links: [
        {
          label: 'Cardiologista',
          href: '/especialidades/cardiologista',
        },
        {
          label: 'Angiologia',
          href: '/especialidades/angiologia',
        },
        {
          label: 'Retinólogo',
          href: '/especialidades/retinólogo',
        },
      ],
    },
    {
      title: 'Saúde bucal',
      links: [
        {
          label: 'Dentista',
          href: '/especialidades/dentista',
        },
        {
          label: 'Ortodentista',
          href: '/especialidades/ortodentista',
        },
        {
          label: 'Dentista infantil',
          href: '/especialidades/dentista-infantil',
        },
        {
          label: 'Cirurgião bucomaxilo',
          href: '/especialidades/cirurgiao-bucomaxilo',
        },
      ],
    },
    {
      title: 'Cuidados com a pele',
      links: [
        {
          label: 'Lorem ipsum',
          href: '/especialidades/lorem-ipsum',
        },
        {
          label: 'Dolor set amet',
          href: '/especialidades/dolor-set-amet',
        },
      ],
    },
    {
      title: 'Terceira idade',
      links: [
        {
          label: 'Lorem ipsum',
          href: '/especialidades/lorem-ipsum',
        },
        {
          label: 'Dolor set amet',
          href: '/especialidades/dolor-set-amet',
        },
        {
          label: 'Lorem ipsum',
          href: '/especialidades/lorem-ipsum',
        },
      ],
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

  console.log('  isaBle', isAbleToGoNext)

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
    <>
      <Header />

      <main className="w-full mt-[194px]">
        <div className="flex justify-between items-end mx-[210px]">
          <div className="max-w-[586px]">
            <Heading variant="h1">
              Encontre a especialidade que você precisa
            </Heading>

            <Paragraph className="block mt-10 text-blue500">
              São mais de 50 especialidades e uma lista de mais de 12 mil
              profissionais para atender as suas necessidades.
            </Paragraph>
          </div>

          <div className="flex mt-10 gap-x-4">
            <Button label="Agendar agora" icon={<ArrowRightIcon />} />
          </div>
        </div>

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
      </main>

      <section
        className="flex flex-col mx-[209px] mt-20"
        id="searchForSpeciality"
      >
        <Input
          className="w-[434px]"
          placeholder="Buscar uma especialidade"
          icon={<SearchIcon />}
        />

        <ul className="grid grid-cols-2 gap-x-[177px] gap-y-[106px] mt-20">
          {especialidadesLinks.map(({ links, title }) => {
            return (
              <li className="col-span-1" key={title}>
                <div className="flex flex-col gap-y-8 items-start">
                  <Heading variant="h4" className="text-blue500">
                    {title}
                  </Heading>

                  <ul className="w-full">
                    {links.map(({ href, label }, index) => {
                      return (
                        <li key={index}>
                          <ListLinkItem
                            href={href}
                            label={label}
                            icon={<ArrowRightIcon />}
                          />
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <Footer.Root>
        <Footer.Logo />
        <Footer.Links />
        <Footer.Social />
        <Footer.Copyright />
      </Footer.Root>
    </>
  )
}
