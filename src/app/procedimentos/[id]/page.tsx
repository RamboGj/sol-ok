import { PricingCard } from '@/app/_components/PricingCard/PricingCard'
import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header/Header'
import Image from 'next/image'

import * as Accordion from '@radix-ui/react-accordion'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { DeleteIcon } from '@/components/@icons/delete'
import { CardEspecialidade } from '@/app/_components/CardEspecialidade/CardEspecialidade'

export default function ProcedurePage() {
  const faqList = [
    {
      question: 'Dentes',
      answer: 'Dentes',
    },
    {
      question: 'Ossos',
      answer: 'Ossos',
    },
    {
      question: 'Pulmão',
      answer: 'Pulmão',
    },
    {
      question: 'Abdômen',
      answer: 'Abdômen',
    },
  ]

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

  return (
    <>
      <Header />

      <main className="w-full ">
        <div className="flex justify-between items-end py-20 mx-[210px]">
          <div className="max-w-[586px]">
            <Heading variant="h1">Raio-X</Heading>

            <Paragraph className="block mt-10 text-blue500">
              Raio-X é um exame de diagnóstico por imagem não invasivo que
              utiliza doses controladas de radiação ionizante para o estudo das
              estruturas internas do corpo sem a necessidade de cortes ou
              cirurgia.
            </Paragraph>
          </div>

          <div className="flex mt-10 gap-x-4">
            <Button label="Agendar Raio-X" icon={<ArrowRightIcon />} />
          </div>
        </div>

        <Image
          height={643}
          width={1502}
          src="/procedimentos/raio_x.png"
          alt="Doctor with an X-ray in hands."
          className="mx-auto"
        />
      </main>

      <section id="content" className="max-w-[892px] mx-auto">
        <div className="py-[120px]">
          <Paragraph size="md" className="text-blue500">
            O raio-X é um tipo de radiação semelhante à luz, mas com um
            comprimento de onda muito menor que é invisível aos olhos. Essa
            característica faz com que ele atravesse vários tecidos do corpo
            humano, embora seja absorvido pelos ossos e outras estruturas.
          </Paragraph>
          <br />
          <Paragraph size="md" className="text-blue500">
            Para fazer o exame, o paciente é posicionado em uma maca ou fica em
            pé de forma que a região do corpo a ser estudada fique no campo de
            ação da máquina de radiografia. Em seguida, o aparelho emite os
            raios-X que serão absorvidos em diferentes intensidades conforme a
            densidade dos tecidos.
          </Paragraph>
          <br />
          <Paragraph size="md" className="text-blue500">
            A porção dos raios-X que atravessa o corpo sem ser absorvida chega
            até um filme fotográfico ou detector digital, dando origem a imagens
            bidimensionais com diferentes tons de claro e escuro.
          </Paragraph>
          <br />
          <Paragraph size="md" className="text-blue500">
            Tecidos mais densos, como os ossos, absorvem a maior parte da
            radiação, por isso eles aparecem em tons mais claros nas imagens de
            raio-X. Se houver uma lesão nesse tecido, como uma fratura, ela
            aparece em um tom mais escuro.
          </Paragraph>
          <br />
        </div>

        <div>
          <Heading variant="h2" className="text-blue500">
            Compare valores de Raio-X entre a SoluMedi e o mercado
          </Heading>

          <div className="flex gap-x-6 my-[120px]">
            <PricingCard
              title="Raio-X na rede particular"
              price="R$ 220"
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
              title="Raio-X com a Solumedi"
              price="R$ 41"
              highlight
              highlightText="Economize até 82%"
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
          Principais indicações de Raio-X
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
        className="flex flex-col py-[120px] gap-y-14 mx-[210px]"
        id="takeALookAtOtherProcedures"
      >
        <Heading variant="h2" className="text-blue500">
          Veja outros procedimentos realizados pela SoluMedi
        </Heading>

        <ul className="flex gap-x-6">
          {procedures.map((procedure) => {
            return (
              <CardEspecialidade
                size="sm"
                key={procedure.title}
                {...procedure}
              />
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
