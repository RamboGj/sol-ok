import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion'

import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header/Header'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'

import { PricingCard } from '@/app/_components/PricingCard/PricingCard'
import { DeleteIcon } from '@/components/@icons/delete'
import { EspecialidadesCarrousel } from '@/components/molecules/EspecialidadesCarrousel/EspecialidadesCarrousel'
import { ListLinkItem } from '@/components/@solumedi-ui/molecules/ListLinkItem/ListLinkItem'

export default function ExpertisePage() {
  const faqList = [
    {
      question: 'Problemas de visão',
      answer: 'Problemas de visão',
    },
    {
      question: 'Dor ou irritação nos olhos',
      answer: 'Dor ou irritação nos olhos',
    },
    {
      question: 'Lesões oculares ',
      answer: 'Lesões oculares ',
    },
  ]

  const otherExamsAndProcedures = [
    {
      label: 'Angiofloreceinografia',
      href: '#',
    },
    {
      label: 'Biometria Ultrassónica',
      href: '#',
    },
    {
      label: 'Cirurgia de Cataratas',
      href: '#',
    },
    {
      label: 'Mapeamento de Retina',
      href: '#',
    },
    {
      label: 'Paquimetria',
      href: '#',
    },
    {
      label: 'Topografia de Córnea',
      href: '#',
    },
  ]

  return (
    <div className="overflow-x-hidden">
      <Header />

      <main className="w-full ">
        <div className="flex justify-between items-end py-20 mx-[210px]">
          <div className="max-w-[586px]">
            <Heading variant="h1">Oftalmologista</Heading>

            <Paragraph className="block mt-10 text-blue500">
              Médico especializado em diagnosticar e tratar doenças e problemas
              relacionados aos olhos e à visão
            </Paragraph>
          </div>

          <div className="flex mt-10 gap-x-4">
            <Button label="Agendar oftalmologista" icon={<ArrowRightIcon />} />
          </div>
        </div>

        <Image
          height={643}
          width={1502}
          src="/procedimentos/oftalmologista.png"
          alt="A little girl wearing an eye device."
          className="mx-auto"
        />
      </main>

      <section id="content" className="max-w-[892px] mx-auto">
        <div className="py-[120px]">
          <Paragraph size="md" className="text-blue500">
            Estuda, diagnostica e trata as doenças relacionadas ao olho e erros
            de refração apresentados pelos olhos e seus anexos, condições que
            podem causar a miopia e o astigmatismo, distúrbios que podem reduzir
            a capacidade de um indivíduo de enxergar e de realizar suas tarefas
            do cotidiano.
          </Paragraph>
          <br />
          <Paragraph size="md" className="text-blue500">
            Os tratamentos receitados por um médico oftalmologista consistem no
            uso de óculos como auxílio para a visão, colírios e outros
            medicamentos para tratar alergias e condições diversas. No entanto,
            alguns oftalmologistas podem receitar tratamentos que incluem a
            intervenção cirúrgica, como o tratamento do ceratocone e cirurgias
            de correção de miopia e estrabismo.
          </Paragraph>
        </div>

        <div>
          <Heading variant="h2" className="text-blue500">
            Compare valores de oftalmologistas entre a SoluMedi e o mercado
          </Heading>

          <div className="flex gap-x-6 my-[120px]">
            <PricingCard
              title="Oftalmologista na rede particular"
              price="R$ 180"
              subFeatures={[
                {
                  label: 'Valores altos',
                },

                {
                  label: 'Agendamento burocrático',
                },
              ]}
              cta=""
            />
            <PricingCard
              best
              title="Oftalmologista com a Solumedi"
              price="R$ 94"
              highlight
              highlightText="Economize até 48%"
              subFeatures={[
                {
                  label: 'Sem filas',
                },

                {
                  label: 'Sem longas horas de espera',
                },
              ]}
              cta="Agendar agora"
            />
          </div>
        </div>
      </section>

      <section
        className="flex flex-col gap-y-14 max-w-[892px] mx-auto mb-[120px]"
        id="mainReferrals"
      >
        <Heading className="text-blue500" variant="h2">
          Exames e procedimentos realizados por oftalmologistas parceiros da
          SoluMedi
        </Heading>

        <Accordion.Root
          className="w-full block list-none max-w-[892px]"
          collapsible
          type="single"
        >
          {faqList.map(({ answer, question }) => {
            return (
              <li key={answer}>
                <Accordion.Item
                  className="py-10 w-full border-b border-blue100 group"
                  value={question}
                >
                  <Accordion.Trigger className="w-full p-1 flex items-center gap-x-4">
                    <Heading className="text-left flex flex-1" variant="h4">
                      {question}
                    </Heading>

                    <IconButton
                      variant="light-blue"
                      icon={<DeleteIcon className="rotate-45" />}
                    />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden px-1 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                    <Paragraph size="sm" className="text-blue500">
                      {answer}
                    </Paragraph>
                  </Accordion.Content>
                </Accordion.Item>
              </li>
            )
          })}
        </Accordion.Root>
      </section>

      <section
        className="flex flex-col gap-y-14 max-w-[892px] mx-auto mb-[120px]"
        id="mainReferrals"
      >
        <Heading className="text-blue500" variant="h2">
          Doenças relacionadas
        </Heading>

        <ul className="w-full block list-none max-w-[892px]">
          {otherExamsAndProcedures.map(({ href, label }) => {
            return (
              <li key={label}>
                <ListLinkItem label={label} href={href} />
              </li>
            )
          })}
        </ul>
      </section>

      <section
        className="flex flex-col py-[120px] gap-y-14"
        id="takeALookAtOtherProcedures"
      >
        <Heading variant="h2" className="text-blue500 mx-[210px]">
          Veja outros procedimentos realizados pela SoluMedi
        </Heading>

        <EspecialidadesCarrousel />
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
