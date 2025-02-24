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

export default function ExpertisesPage() {
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
    <div className="overflow-x-hidden">
      <Header />

      <main className="w-full mt-[194px]">
        <div className="flex-col sm:flex sm:flex-row justify-between items-center sm:items-end sm:mx-14 mx-6 2xl:mx-[210px]">
          <div className="max-w-full sm:max-w-[450px] lg:max-w-[586px]">
            <div className="">
              <div className="opacity-0 lg:opacity-100 lg:h-fit h-0">
                <Heading variant="h1">
                  Encontre a especialidade que você precisa
                </Heading>
              </div>
              <div className="opacity-0 md:opacity-100 lg:opacity-0 lg:h-0 md:h-fit h-0">
                <Heading variant="h2">
                  Encontre a especialidade que você precisa
                </Heading>
              </div>
              <div className="opacity-0 sm:opacity-100 md:opacity-0 md:h-0 lg:h-0 sm:h-fit h-0">
                <Heading variant="h3">
                  Encontre a especialidade que você precisa
                </Heading>
              </div>
              <div className="opacity-100 sm:opacity-0 h-fit sm:h-0">
                <Heading variant="h4">
                  Encontre a especialidade que você precisa
                </Heading>
              </div>
            </div>

            <Paragraph className="block mt-10 text-blue500">
              São mais de 50 especialidades e uma lista de mais de 12 mil
              profissionais para atender as suas necessidades.
            </Paragraph>
          </div>

          <div className="flex mt-10 gap-x-4">
            <Button
              className="w-full justify-between sm:justify sm:w-auto"
              label="Agendar agora"
              icon={<ArrowRightIcon />}
            />
          </div>
        </div>

        <EspecialidadesCarrousel className="mt-20 " />
      </main>

      <section
        className="flex flex-col mx-[50px] sm:mx-12 2xl:mx-[209px] mt-20"
        id="searchForSpeciality"
      >
        <Input
          className="sm:w-[434px] w-full"
          placeholder="Buscar uma especialidade"
          icon={<SearchIcon />}
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[177px] gap-y-[106px] mt-20">
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
    </div>
  )
}
