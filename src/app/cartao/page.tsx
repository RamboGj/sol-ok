import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'

import { Header } from '@/components/molecules/Header/Header'
import Image from 'next/image'

import { Footer } from '@/components/molecules/Footer'
import { CheckIcon } from '@/components/@icons/check'

import * as Accordion from '@radix-ui/react-accordion'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { DeleteIcon } from '@/components/@icons/delete'
import { LargePrice } from '@/components/atoms/LargePrice/LargePrice'

export default function HomePage() {
  const faqList = [
    {
      question: 'Como funciona o cartão SoluMedi?',
      answer: 'Como funciona o cartão SoluMedi?',
    },
    {
      question: 'Preciso pagar mensalidade?',
      answer: 'Preciso pagar mensalidade?',
    },
    {
      question: 'Tenho prioridade nas consultas por ter o cartão SoluMedi?',
      answer: 'Tenho prioridade nas consultas por ter o cartão SoluMedi?',
    },
  ]

  const personalizedServiceFeatures = [
    'Agilidade para marcar consultas',
    'Sua unidade SoluMedi na palma da mão',
    'Lorem ipsum',
  ]

  const partners = [
    {
      imageHref: '/partners/droga_raia.png',
      alt: 'Droga Raia Logo',
      description: 'Até 30% de desconto em produtos e medicamentos',
      obs: 'Válido para lojas físicas.',
      imageWidth: 160,
      imageHeight: 60,
    },
    {
      imageHref: '/partners/drogasil.png',
      alt: 'Drogasil Logo',
      description: 'Até 30% de desconto em produtos e medicamentos',
      obs: 'Nas lojas físicas.',
      imageWidth: 160,
      imageHeight: 60,
    },
    {
      imageHref: '/partners/4bio.png',
      alt: '4Bio Logo',
      description: 'Até 30% de desconto em produtos e medicamentos',
      obs: 'Nas lojas físicas.',
      imageWidth: 112,
      imageHeight: 56,
    },
    {
      imageHref: '/partners/univers.png',
      alt: 'Univers Logo',
      description: 'Até 30% de desconto em produtos e medicamentos',
      obs: 'Nas lojas físicas.',
      imageWidth: 175,
      imageHeight: 64,
    },
  ]

  return (
    <div className="w-full overflow-x-hidden">
      <section className="bg-blue100 relative" id="hero">
        <Header />

        <Image
          width={1218}
          height={758}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 select-none touch-none pointer-events-none z-0"
          src="/card/card_1.png"
          alt="Solumedi card in someone's hand."
        />

        <main className="max-w-[473px] w-full py-[168px] ml-[210px]">
          <Heading variant="h1">
            O cartão para facilitar suas consultas médicas
          </Heading>

          <Paragraph className="block mt-6 text-blue500">
            Praticidade na hora de agendar consultas nas unidades SoluMedi, além
            de descontos em estabelecimentos.
          </Paragraph>

          <Button
            className="flex mt-10"
            label="Peça o seu agora"
            icon={<ArrowRightIcon />}
          />
        </main>
      </section>

      <section
        className="mx-[210px] flex items-center justify-between py-[200px]"
        id="noMonthlyPayment"
      >
        <LargePrice />

        <div className="w-[584px]">
          <div className="max-w-[360px] flex flex-col gap-y-10">
            <Heading variant="h2">Sem mensalidade ou taxas</Heading>

            <Paragraph size="md" className="text-blue500">
              Você só paga consultas e exames quando for utilizar.
            </Paragraph>
          </div>
        </div>
      </section>

      <section
        className="mx-[210px] pb-[120px] flex items-center justify-between"
        id="personalizedService"
      >
        <div className="max-w-[587px] flex flex-col gap-y-10">
          <Heading variant="h2">Atendimento personalizado</Heading>

          <ul className="flex flex-col gap-y-6">
            {personalizedServiceFeatures.map((feature) => {
              return (
                <li key={feature}>
                  <div className="flex items-center gap-x-5">
                    <CheckIcon className="text-blue400" />
                    <Paragraph className="text-blue500" size="md">
                      {feature}
                    </Paragraph>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <Image
          width={737}
          height={657}
          src={'/card/card_2.png'}
          className="rounded-[48px]"
          alt="Woman handling a Solumedi in front of her face."
        />
      </section>

      <section className="bg-blue100  py-[120px] flex flex-col gap-y-20">
        <Heading className="pl-[210px]" variant="h2">
          Benefícios em estabelecimentos parceiros
        </Heading>

        <ul className="flex items-stretch gap-x-6 snap-x snap-mandatory overflow-x-scroll scrollbar-none px-[210px]">
          {partners.map(
            ({ description, imageHref, obs, alt, imageWidth, imageHeight }) => {
              return (
                <li className="snap-center" key={alt}>
                  <div className="p-14 w-[434px] h-[320px] rounded-[48px] bg-neutral100">
                    <Image
                      src={imageHref}
                      alt={alt}
                      width={imageWidth}
                      height={imageHeight}
                    />

                    <Heading
                      className="block mt-[50px] text-blue500"
                      variant="h4"
                    >
                      {description}
                    </Heading>
                    <Paragraph className="block mt-2" size="md">
                      {obs}
                    </Paragraph>
                  </div>
                </li>
              )
            },
          )}
        </ul>
      </section>

      <section
        className="py-40 pl-[210px] pr-[368px] bg-blue500 flex items-center justify-between"
        id="askForCard"
      >
        <div className="max-w-[739px] flex flex-col gap-y-20">
          <strong className="text-neutral100 text-[6.5rem] leading-[6rem] font-semibold font-manrope">
            Você merece ter saúde,{' '}
            <span className="text-blue200">você merece SoluMedi</span>
          </strong>

          <Button
            variant="white"
            label="Pedir meu cartão"
            icon={<ArrowRightIcon />}
          />
        </div>

        <Image
          width={426}
          height={404}
          src="/card/card_3.png"
          alt="Solumedi card."
        />
      </section>

      <section
        className="flex flex-col gap-y-16 max-w-[892px] mx-auto py-[120px]"
        id="mainReferrals"
      >
        <Heading className="text-blue500" variant="h2">
          Ficou com alguma dúvida? Vamos te ajudar
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

      <Footer.Root>
        <Footer.Logo />
        <Footer.Links />
        <Footer.Social />
        <Footer.Copyright />
      </Footer.Root>
    </div>
  )
}
