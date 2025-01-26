'use client'

import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ListLinkItem } from '@/components/@solumedi-ui/molecules/ListLinkItem/ListLinkItem'
import { Input } from '@/components/@solumedi-ui/molecules/Input/Input'

import { Header } from '@/components/molecules/Header/Header'

import { Footer } from '@/components/molecules/Footer'
import { SearchIcon } from '@/components/@icons/search'

import { EspecialidadesCarrousel } from '@/components/molecules/EspecialidadesCarrousel/EspecialidadesCarrousel'

export default function HomePage() {
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

        <EspecialidadesCarrousel />
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
