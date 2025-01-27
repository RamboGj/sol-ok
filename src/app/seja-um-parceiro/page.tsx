import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'

import { Header } from '@/components/molecules/Header/Header'
import Image from 'next/image'

import { StepCard } from '@/components/molecules/StepCard/StepCard'
import { Footer } from '@/components/molecules/Footer'
import {
  TestimonialProps,
  Testimonials,
} from '../_components/Testimonials/Testimonials'
import { Bullet } from '@/components/molecules/Bullet/Bullet'
import { CheckListItem } from '@/components/molecules/CheckListItem/CheckListItem'

import * as Accordion from '@radix-ui/react-accordion'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { DeleteIcon } from '@/components/@icons/delete'

export default function BeAPartnerPage() {
  const faqList = [
    {
      question: 'Como funciona a importação da minha agenda?',
      answer: 'Como funciona a importação da minha agenda?',
    },
    {
      question: 'Como é feito o pagamento das consultas e exames?',
      answer: 'Como é feito o pagamento das consultas e exames?',
    },
    {
      question: 'Quanto pago mensalmente para trabalhar com a SoluMedi?',
      answer: 'Quanto pago mensalmente para trabalhar com a SoluMedi?',
    },
  ]

  const steps = [
    {
      step: 1,
      description: 'Seu paciente entra em contato com a SoluMedi.',
    },
    {
      step: 2,
      description:
        'O paciente paga para a SoluMedi com opções de parcelamento.',
    },
    {
      step: 3,
      description: 'Nós fazemos o agendamento de acordo com a sua agenda.',
    },
    {
      step: 4,
      description:
        'Você atende o paciente presencialmente ou por teleconsulta.',
    },
    {
      step: 5,
      description: 'Após 7 dias você recebe o valor à vista.',
    },
  ]

  const bullets = [
    {
      headline: '+ de 2 milhões',
      paragraph: 'de consultas e exames agendados mensalmente',
    },
    {
      headline: '+ de 7 mil',
      paragraph: 'especialistas trabalhando com a SoluMedi',
    },
    {
      headline: '+ de 600 mil',
      paragraph: 'usuários cadastrados conosco',
    },
    {
      headline: '+ de 70',
      paragraph: 'unidades presentes em 8 estados brasileiros',
    },
  ]

  const timeFeatures = [
    'Totalmente gratuito',
    'Agenda flexível e automatizada',
    'Receba à vista as consultas que seus pacientes parcelam',
    'Atenda presencialmente ou por teleconsulta',
  ]

  const customerFeatures = [
    'Preços acessíveis',
    'Pagamento facilitado',
    'Facilidade de agendamento',
  ]

  const testimonials: TestimonialProps[] = [
    {
      personTitle: 'Dr. Elton Passamani',
      personSubtitle: 'Clínico Geral na Clínica Pra Gente',
      testimonial:
        '“Percebemos que os pacientes nos procuram mais. Aqui em Curitiba há muitas opções de médicos, e a SoluMedi ajudou a clínica a rodar o número de pacientes e ficar mais conhecida.”',
      personImg: '/doctor_testimonial_1.png',
    },
    {
      personTitle: 'Dr. Elton Passamani',
      personSubtitle: 'Clínico Geral na Clínica Pra Gente',

      testimonial:
        '“Percebemos que os pacientes nos procuram mais. Aqui em Curitiba há muitas opções de médicos, e a SoluMedi ajudou a clínica a rodar o número de pacientes e ficar mais conhecida.”',
      personImg: '/doctor_testimonial_1.png',
    },
    {
      personTitle: 'Rebeca Silva',
      personSubtitle: 'Endocrinologista e proprietária da Kosop',
      testimonial:
        '“Tem paciente que fala que só procura médico pela SoluMedi. Cada vez mais eles têm usado essa ferramenta de busca, já que oferece muitos dados e mais segurança no agendamento.”',
      personImg: '/doctor_testimonial_2.png',
    },
  ]

  const otherPartners = [
    {
      imageHref: '/partners/erasto_gaertner.png',
      alt: 'Erasto Gaertner',
      width: 300,
      height: 56,
    },
    {
      imageHref: '/partners/ana_gregor.png',
      alt: 'Ana Gregor',
      width: 124,
      height: 104,
    },
    {
      imageHref: '/partners/unimed_laboratorio.png',
      alt: 'Unimed Laboratório',
      width: 150,
      height: 56,
    },
    {
      imageHref: '/partners/medicina_diagnostica.png',
      alt: 'Medicina Diagnóstica',
      width: 200,
      height: 80,
    },
    {
      imageHref: '/partners/otorrinos_curitiba.png',
      alt: 'Otorrinos Curitiba',
      width: 163,
      height: 70,
    },
  ]

  return (
    <div className="w-full overflow-x-hidden">
      <Header />

      <main className="max-w-[888px] w-full mt-20 mx-auto flex flex-col items-center text-center gap-y-6">
        <div className="w-fit px-4 py-2 rounded-[80px] outline outline-1 outline-blue200">
          <Paragraph size="sm">Profissional da área da saúde</Paragraph>
        </div>

        <Heading variant="h1">Aumente seu volume de atendimentos</Heading>

        <Paragraph className="block text-blue500">
          Cresça sua receita com a SoluMedi. Facilidade e comodidade para sua
          clínica e seus pacientes.
        </Paragraph>

        <Button label="Trabalhar com a SoluMedi" icon={<ArrowRightIcon />} />
      </main>

      <Image
        className="block mt-20 mb-[106px]"
        src="/carrousel.png"
        alt="Carrousel of images"
        width={1990}
        height={256}
      />

      <section className="py-[120px] mx-[210px]" id="cards">
        <ul className="flex items-start justify-between">
          {bullets.map(({ headline, paragraph }) => {
            return (
              <li key={paragraph}>
                <Bullet headline={headline} paragraph={paragraph} />
              </li>
            )
          })}
        </ul>
      </section>

      <section
        className="px-[210px] py-[120px] flex items-center justify-between bg-blue100"
        id="saveYourTime"
      >
        <div className="max-w-[584px] flex flex-col gap-y-10">
          <Heading variant="h2">Economize seu tempo e da sua equipe</Heading>

          <ul className="flex flex-col gap-y-6">
            {timeFeatures.map((feature) => {
              return (
                <li key={feature}>
                  <CheckListItem item={feature} />
                </li>
              )
            })}
          </ul>
        </div>
        <Image
          width={738}
          height={704}
          src={'/doctor_chart.png'}
          alt="A doctor and some graphs and chats above here photo."
        />
      </section>

      <section
        className="px-[210px] py-[120px] flex items-center flex-row-reverse justify-between bg-blue100"
        id="yourCustomersSatisfied"
      >
        <div className="max-w-[584px] flex flex-col gap-y-10">
          <Heading variant="h2">Economize seu tempo e da sua equipe</Heading>

          <ul className="flex flex-col gap-y-6">
            {customerFeatures.map((feature) => {
              return (
                <li key={feature}>
                  <CheckListItem item={feature} />
                </li>
              )
            })}
          </ul>
        </div>
        <Image
          width={738}
          height={704}
          src={'/woman_card_message.png'}
          alt="A woman with solumedi card in hands with some pop ups above her picture."
        />
      </section>

      <section
        className="py-[120px] px-[56px] flex flex-col items-center bg-blue100"
        id="steps"
      >
        <Heading variant="h2">Facilidade para você e seus pacientes</Heading>

        <ul className="grid grid-cols-5 gap-x-6 mt-20">
          {steps.map(({ description, step }) => {
            return (
              <li key={step}>
                <StepCard description={description} step={step} />
              </li>
            )
          })}
        </ul>
      </section>

      <Testimonials testimonials={testimonials} />

      <section
        className="py-[120px] mx-auto max-w-[1257px] flex flex-col items-center gap-y-10"
        id="otherPartners"
      >
        <Heading className="text-blue500" variant="h4">
          Alguns parceiros que trabalham com a gente
        </Heading>

        <ul className="flex items-center gap-x-20">
          {otherPartners.map(({ alt, height, imageHref, width }) => {
            return (
              <li key={alt}>
                <Image
                  src={imageHref}
                  alt={alt}
                  width={width}
                  height={height}
                />
              </li>
            )
          })}
        </ul>
      </section>

      <section
        className='bg-cover bg-[url("/womanDoctor.png")] h-[752px] flex items-center justify-center'
        id="earnMoreWithSolumedi"
      >
        <div className="max-w-[888px] flex flex-col gap-y-20">
          <strong className="text-neutral100 text-[6.5rem] leading-[6rem] tracking-[-2%] font-manrope font-semibold">
            Venha ganhar mais com a SoluMedi
          </strong>

          <Button
            variant="white"
            label="Trabalhar com a SoluMedi"
            icon={<ArrowRightIcon />}
          />
        </div>
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
