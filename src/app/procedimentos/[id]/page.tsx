'use client'

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
import { ProceduresCarrousel } from '@/components/molecules/ProceduresCarrousel/ProceduresCarrousel'

export default function ProcedurePage() {
  const faqList = [
    { question: 'Dentes', answer: 'Dentes' },
    { question: 'Ossos', answer: 'Ossos' },
    { question: 'Pulmão', answer: 'Pulmão' },
    { question: 'Abdômen', answer: 'Abdômen' },
  ]

  return (
    <>
      <Header />

      <main className="w-full sm:mt-20 md:mt-[194px] px-4 md:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mx-0 md:mx-14 2xl:mx-[210px] py-10 md:py-20">
          <div className="max-w-[586px]">
            <Heading
              variant="h4"
              className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[2rem] sm:leading-[125%] md:leading-[3.5rem] lg:leading-[100%] tracking-[-1%] sm:tracking-[-2%]"
            >
              Raio-X
            </Heading>

            <Paragraph
              size="sm"
              className="block mt-6 md:mt-10 text-blue500 text-sm sm:text-base md:text-lg"
            >
              Raio-X é um exame de diagnóstico por imagem não invasivo que
              utiliza doses controladas de radiação ionizante para o estudo das
              estruturas internas do corpo sem a necessidade de cortes ou
              cirurgia.
            </Paragraph>
          </div>

          <div className="flex mt-6 items-center w-full sm:w-auto justify-center sm:flex-none md:mt-10 gap-x-4">
            <Button
              label="Agendar Raio-X"
              className="w-full flex justify-between sm:flex-auto sm:justify-normal sm:w-auto"
              icon={<ArrowRightIcon />}
            />
          </div>
        </div>

        <Image
          height={643}
          width={1502}
          src="/procedimentos/raio_x.png"
          alt="Doctor with an X-ray in hands."
          className="mx-auto w-full max-w-[1502px] h-auto"
        />
      </main>

      <section id="content" className="max-w-[892px] mx-auto px-4 md:px-0">
        <div className="py-10 md:py-[120px]">
          <Paragraph
            size="sm"
            className="text-blue500 text-sm sm:text-base md:text-lg"
          >
            O raio-X é um tipo de radiação semelhante à luz, mas com um
            comprimento de onda muito menor que é invisível aos olhos. Essa
            característica faz com que ele atravesse vários tecidos do corpo
            humano, embora seja absorvido pelos ossos e outras estruturas.
          </Paragraph>
          <br />
          <Paragraph
            size="sm"
            className="text-blue500 text-sm sm:text-base md:text-lg"
          >
            Para fazer o exame, o paciente é posicionado em uma maca ou fica em
            pé de forma que a região do corpo a ser estudada fique no campo de
            ação da máquina de radiografia. Em seguida, o aparelho emite os
            raios-X que serão absorvidos em diferentes intensidades conforme a
            densidade dos tecidos.
          </Paragraph>
          <br />
          <Paragraph
            size="sm"
            className="text-blue500 text-sm sm:text-base md:text-lg"
          >
            A porção dos raios-X que atravessa o corpo sem ser absorvida chega
            até um filme fotográfico ou detector digital, dando origem a imagens
            bidimensionais com diferentes tons de claro e escuro.
          </Paragraph>
          <br />
          <Paragraph
            size="sm"
            className="text-blue500 text-sm sm:text-base md:text-lg"
          >
            Tecidos mais densos, como os ossos, absorvem a maior parte da
            radiação, por isso eles aparecem em tons mais claros nas imagens de
            raio-X. Se houver uma lesão nesse tecido, como uma fratura, ela
            aparece em um tom mais escuro.
          </Paragraph>
          <br />
        </div>

        <div>
          <Heading
            variant="h4"
            className="text-blue500 text-[1.5rem] sm:text-[2rem] md:text-[3rem] leading-[2rem] sm:leading-[125%] md:leading-[3.5rem] tracking-[-1%] sm:tracking-[-2%]"
          >
            Compare valores de Raio-X entre a SoluMedi e o mercado
          </Heading>

          <div className="flex gap-x-6 overflow-x-scroll sm:overflow-x-hidden sm:my-[120px] mt-[60px] mb-[120px]">
            <PricingCard
              title="Raio-X na rede particular"
              price="R$ 220"
              className="w-full min-w-[300px] text-sm"
              subFeatures={[
                { label: 'Valores altos' },
                { label: 'Agendamento burocrático' },
              ]}
              cta=""
            />
            <PricingCard
              best
              title="Raio-X com a Solumedi"
              price="R$ 41"
              className="w-full min-w-[300px]"
              highlight
              highlightText="Economize até 82%"
              subFeatures={[
                { label: 'Sem filas' },
                { label: 'Sem longas horas de espera' },
              ]}
              cta="Agendar agora"
            />
          </div>
        </div>
      </section>

      <section
        className="flex flex-col gap-y-10 md:gap-y-14 max-w-[892px] mx-auto mb-10 md:mb-[120px] px-4 md:px-0"
        id="mainReferrals"
      >
        <Heading
          variant="h4"
          className="text-blue500 text-[1.5rem] sm:text-[2rem] md:text-[3rem] leading-[2rem] sm:leading-[125%] md:leading-[3.5rem] tracking-[-1%] sm:tracking-[-2%]"
        >
          Principais indicações de Raio-X
        </Heading>

        <Accordion.Root
          className="w-full block list-none max-w-[892px]"
          collapsible
          type="single"
        >
          {faqList.map(({ answer, question }) => (
            <li key={answer}>
              <Accordion.Item
                className="py-6 md:py-10 w-full border-b border-blue100 group"
                value={question}
              >
                <Accordion.Trigger className="w-full p-1 flex items-center gap-x-4">
                  <Heading
                    className="text-left flex flex-1 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] leading-[1.5rem] sm:leading-[1.75rem] md:leading-[2rem]"
                    variant="h4"
                  >
                    {question}
                  </Heading>
                  <IconButton
                    variant="light-blue"
                    icon={<DeleteIcon className="rotate-45" />}
                  />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden px-1 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <Paragraph
                    size="sm"
                    className="text-blue500 text-sm sm:text-base"
                  >
                    {answer}
                  </Paragraph>
                </Accordion.Content>
              </Accordion.Item>
            </li>
          ))}
        </Accordion.Root>
      </section>

      <section
        className="flex flex-col py-10 md:py-[120px] gap-y-10 md:gap-y-14 px-4 md:px-0 mx-0 sm:mx-[100px] 2xl:mx-[210px]"
        id="takeALookAtOtherProcedures"
      >
        <Heading
          variant="h4"
          className="text-blue500 text-[1.5rem] sm:text-[2rem] md:text-[3rem] leading-[2rem] sm:leading-[125%] md:leading-[3.5rem] tracking-[-1%] sm:tracking-[-2%]"
        >
          Veja outros procedimentos realizados pela SoluMedi
        </Heading>

        <ProceduresCarrousel />
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
