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
import { ProceduresCarrousel } from '@/components/molecules/ProceduresCarrousel/ProceduresCarrousel'

export default function ProceduresPage() {
  const proceduresLinks = [
    {
      links: [
        { label: 'Audiometria', href: '/procedimentos/audiometria' },
        { label: 'Beta HCG', href: '/procedimentos/beta-hcg' },
        { label: 'Broncoscopia', href: '/procedimentos/broncoscopia' },
        { label: 'Colonoscopia', href: '/procedimentos/colonoscopia' },
        { label: 'Colposcopia', href: '/procedimentos/colposcopia' },
        {
          label: 'Densitometria Óssea',
          href: '/procedimentos/densitometria-ossea',
        },
        { label: 'Ecocardiograma', href: '/procedimentos/ecocardiograma' },
        {
          label: 'Ecografia Ultrassom',
          href: '/procedimentos/ecografia-ultrassom',
        },
        {
          label: 'Eletrocardiograma',
          href: '/procedimentos/eletrocardiograma',
        },
        {
          label: 'Eletroencefalograma',
          href: '/procedimentos/eletroencefalograma',
        },
        {
          label: 'Eletroneuromiografia',
          href: '/procedimentos/eletroneuromiografia',
        },
        { label: 'Endoscopia', href: '/procedimentos/endoscopia' },
        { label: 'Espirometria', href: '/procedimentos/espirometria' },
      ],
    },
    {
      links: [
        {
          label: 'Exame Admissional ou Demissional',
          href: '/procedimentos/exame-admissional-ou-demissional',
        },
        { label: 'Exame de Urina', href: '/procedimentos/xame-de-urina' },
        {
          label: 'Hemograma Exame de Sangue',
          href: '/procedimentos/hemograma-exame-de-sangue',
        },
        { label: 'Holter 24 Horas', href: '/procedimentos/holter-24-horas' },
        { label: 'Mamografia', href: '/procedimentos/mamografia' },
        { label: 'Mapa 24h', href: '/procedimentos/mapa-24h' },
        {
          label: 'Mapeamento da Retina',
          href: '/procedimentos/mapeamento-da-retina',
        },
        {
          label: 'Preventivo Papanicolau',
          href: '/procedimentos/preventivo-papanicolau',
        },
        { label: 'Raio-X', href: '/procedimentos/raio-x' },
        {
          label: 'Ressonância Magnética',
          href: '/procedimentos/ressonancia-magnetica',
        },
        { label: 'Tomografia', href: '/procedimentos/tomografia' },
        { label: 'Tonometria', href: '/procedimentos/tonometria' },
        { label: 'Vulvoscopia', href: '/procedimentos/vulvoscopia' },
      ],
    },
  ]

  return (
    <div className="overflow-x-hidden">
      <Header />

      <main className="w-full mt-20 md:mt-[194px] px-4 md:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mx-0 md:mx-14 2xl:mx-[210px]">
          <div className="max-w-[586px]">
            <Heading
              variant="h4"
              className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[2rem] sm:leading-[125%] md:leading-[3.5rem] lg:leading-[100%] tracking-[-1%] sm:tracking-[-2%]"
            >
              Exames de imagem ou laboratoriais nas melhores clínicas
            </Heading>

            <Paragraph
              size="sm"
              className="block mt-6 md:mt-10 text-blue500 text-sm sm:text-base md:text-lg"
            >
              Fazer agendamento do seu exame nunca foi tão simples. A Solumedi
              oferece uma quantidade abrangente de exames, nas principais
              especialidades médicas, com um valor que cabe no seu bolso.
            </Paragraph>
          </div>

          <div className="flex mt-6 items-center w-full sm:w-auto justify-center sm:flex-none md:mt-10 gap-x-4">
            <Button
              label="Agendar agora"
              className="w-full flex justify-between sm:flex-auto sm:justify-normal sm:w-auto"
              icon={<ArrowRightIcon />}
            />
          </div>
        </div>

        <ProceduresCarrousel />
      </main>

      <section
        className="flex flex-col mx-6 lg:mx-[109px] 2xl:mx-[209px] mt-10 md:mt-20"
        id="searchForSpeciality"
      >
        <Input
          className="w-full md:w-[434px]"
          placeholder="Buscar um procedimento"
          icon={<SearchIcon />}
        />

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 md:gap-x-[177px] gap-y-10 md:gap-y-[106px] mt-10 md:mt-20">
          {proceduresLinks.map(({ links }, index) => (
            <li className="col-span-1" key={index}>
              <ul className="w-full">
                {links.map(({ href, label }, index) => (
                  <li key={index}>
                    <ListLinkItem
                      href={href}
                      label={label}
                      icon={<ArrowRightIcon />}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
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
