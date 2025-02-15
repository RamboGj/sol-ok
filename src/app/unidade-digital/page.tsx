'use client'

import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'

import Image from 'next/image'

import solumediCardImg from '@/assets/main-page/solumedi-card.png'

import { Caption } from '@/components/@solumedi-ui/atoms/Caption/Caption'
import { StepCard } from '@/components/molecules/StepCard/StepCard'
import {
  PricingCard,
  PricingProps,
} from '../_components/PricingCard/PricingCard'
import { HeaderUnity } from '@/components/molecules/HeaderUnity/HeaderUnity'
import { Footer } from '@/components/molecules/Footer'
import { CheckIcon } from '@/components/@icons/check'
import { useDeviceType } from '@/hooks/useDeviceType'

export default function DigitalUnityPage() {
  const plans: PricingProps[] = [
    {
      highlight: true,
      title: 'Oftalmologista',
      price: 'R$ 120',
      priceLabel: 'de economia',
      features: [
        {
          price: 'R$ 300',
          priceLabel: 'No particular',
        },
        {
          price: 'R$ 180',
          priceLabel: 'Com SoluMedi',
        },
      ],
      subFeatures: [
        {
          label: 'Sem filas',
        },
        {
          label: 'Sem longas horas de espera',
        },
      ],
    },
    {
      highlight: false,
      title: 'Exame de sangue',
      price: '+ 90%',
      priceLabel: 'de desconto',
      features: [
        {
          price: 'R$ 100',
          priceLabel: 'No particular',
        },
        {
          price: 'R$ 7',
          priceLabel: 'Com SoluMedi',
        },
      ],
      subFeatures: [
        {
          label: 'Sem filas',
        },
        {
          label: 'Sem longas horas de espera',
        },
      ],
    },
    {
      highlight: false,
      title: 'Check Up',
      price: 'R$ 420',
      priceLabel: 'de economia',
      features: [
        {
          price: 'R$ 920',
          priceLabel: 'No particular',
        },
        {
          price: 'R$ 500',
          priceLabel: 'Com SoluMedi',
        },
      ],
      subFeatures: [
        {
          label: 'Sem filas',
        },
        {
          label: 'Sem longas horas de espera',
        },
      ],
    },
  ]

  const steps = [
    {
      step: 1,
      description:
        'Inicie uma conversa com nossos atendentes através do WhatsApp ou telefone.',
    },
    {
      step: 2,
      description:
        'Iremos te ajudar a selecionar um profissional ou laboratório para realizar sua consulta ou exame.',
    },
    {
      step: 3,
      description:
        'Após você realizer o pagamento, seu atendimento já estará marcado.',
    },
    {
      step: 4,
      description:
        'Depois é só comparecer na clínica ou laboratório no dia agendado!',
    },
  ]

  const features = [
    'Consultas Médicas e Odontológicas',
    'Exames de Imagem e Exames Laboratoriais',
    'Cirurgias e Atendimento Personalizado',
  ]

  const { isMobile } = useDeviceType()

  return (
    <div className="w-full overflow-x-hidden">
      <section
        className="bg-[url('/womanWithCard.png')] bg-cover bg-center h-[400px] xl:h-[760px] 2xl:h-[904px]"
        id="hero"
      >
        <HeaderUnity />

        <main className="hidden xl:block py-24 2xl:py-[168px] ml-12 2xl:ml-[210px]">
          <div className="max-w-[436px]">
            <Heading variant="h1">
              Consultas médicas com valores reduzidos
            </Heading>

            <Paragraph className="block mt-6 text-blue500">
              Agende consultas particulares e exames nas melhores clínicas e
              laboratórios com valores acessíveis.
            </Paragraph>
          </div>

          <div className="flex mt-10 gap-x-4">
            <Button label="Agendar pelo WhatsApp" icon={<ArrowRightIcon />} />
            <Button label="Ligar para agendar" variant="white" />
          </div>
        </main>
      </section>

      <section className="block xl:hidden px-6 md:px-12 mt-8">
        <div className="w-full">
          <Heading
            className="w-full text-left md:w-[60%]"
            variant={isMobile ? 'h3' : 'h2'}
          >
            Consultas médicas com valores reduzidos
          </Heading>

          <Paragraph className="block mt-6 text-blue500">
            Agende consultas particulares e exames nas melhores clínicas e
            laboratórios com valores acessíveis.
          </Paragraph>
        </div>

        <div className="flex-col md:flex-row flex mt-10 gap-4">
          <Button label="Agendar pelo WhatsApp" icon={<ArrowRightIcon />} />
          <Button label="Ligar para agendar" variant="light-blue" />
        </div>
      </section>

      <section
        className="w-full flex flex-col gap-y-20 items-center my-20 px-6 md:px-0"
        id="cards"
      >
        <Heading
          className="max-w-[554px] xl:max-w-[892px] w-full text-center text-blue500"
          variant={isMobile ? 'h3' : 'h2'}
        >
          Economize com a SoluMedi para se consultar ou fazer exames
        </Heading>

        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 md:mx-[56px] items-center gap-6">
          <div className="bg-blue100 rounded-[24px] md:rounded-[48px] h-[240px] md:h-[268px] p-6 md:p-8 2xl:p-[56px] order-1 grid row-span-1 col-span-1">
            <Heading
              className="w-full 2xl:w-[232px] hidden md:block mt-auto"
              variant="h4"
            >
              Cadastro fácil, rápido e totalmente gratuito.
            </Heading>

            <Paragraph size="sm" className="w-full block md:hidden mt-auto">
              Cadastro fácil, rápido e totalmente gratuito.
            </Paragraph>
          </div>

          <div className="bg-neutral100 border border-blue200 h-full rounded-[24px] md:rounded-[48px] order-3 md:order-2 p-6 md:p-8 2xl:p-[56px] grid row-span-2 col-span-2 md:col-span-1">
            <div className="mt-auto flex flex-col">
              <Heading variant="h4">A partir de</Heading>

              <Heading className="2xl:block hidden mt-2" variant="h1">
                R$ 7,00
              </Heading>

              <Heading className="2xl:hidden block mt-2" variant="h2">
                R$ 7,00
              </Heading>

              <Paragraph className="text-blue500 block mt-6" size="md">
                O melhor custo x benefício para manter sua saúde em dia.
              </Paragraph>
            </div>
          </div>

          <div className="bg-blue100 relative overflow-hidden rounded-[24px] md:rounded-[48px] h-[500px] lg:h-full p-6 md:p-8 2xl:p-[56px] order-4 lg:order-3 grid row-span-2 col-span-2">
            <Image
              alt="Cartão Solumedi"
              src={solumediCardImg}
              className="absolute top-0 inset-x-0 w-full h-[300px] lg:h-[255px] 2xl:h-[400px] object-cover"
            />

            <div className="mt-auto flex items-end justify-between">
              <div className="max-w-[400px] w-full">
                <Heading className="md:block hidden" variant="h2">
                  Cartão SoluMedi
                </Heading>
                <Heading className="md:hidden" variant="h3">
                  Cartão SoluMedi
                </Heading>

                <Paragraph
                  className="text-blue500 hidden md:block mt-6"
                  size="md"
                >
                  Gratuito, rapido e fácil de usar. Sem cobrança de mensalidade
                  e anuidade. Você só paga quando precisa usar.
                </Paragraph>
                <Paragraph className="text-blue500 md:hidden mt-6" size="sm">
                  Gratuito, rapido e fácil de usar. Sem cobrança de mensalidade
                  e anuidade. Você só paga quando precisa usar.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="bg-blue400 rounded-[24px] md:rounded-[48px] h-[240px] md:h-[268px] p-6 md:p-8 2xl:p-[56px] order-2 md:order-3 lg:order-4 grid row-span-1 col-span-1">
            <Heading
              className="w-full 2xl:w-[232px] hidden md:block mt-auto text-white"
              variant="h4"
            >
              Pague só quando usar, sem mensalidades.
            </Heading>

            <Paragraph size="sm" className="flex md:hidden mt-auto text-white">
              Pague só quando usar, sem taxas mensais.
            </Paragraph>
          </div>
        </div>
      </section>

      <section className="py-20 mx-6 md:mx-12 2xl:mx-[210px] flex flex-col-reverse gap-y-10 lg:flex-row items-center justify-between">
        <Image
          objectFit="cover"
          priority
          width={738}
          height={640}
          src="/consultaAgendada.png"
          alt="Doctor looking at his cellphone."
          className="w-[320px] h-[277px] md:w-[578px] md:h-[502px] 2xl:w-[738px] 2xl:h-[640px]"
        />

        <div className="max-w-[436px] xl:max-w-[479px] 2xl:max-w-[584px] w-full flex flex-col gap-y-10">
          <Heading className="hidden md:block" variant="h2">
            Pague menos para ter acesso a saúde de qualidade
          </Heading>
          <Heading className="md:hidden" variant="h3">
            Pague menos para ter acesso a saúde de qualidade
          </Heading>

          <ul className="flex flex-col gap-y-6">
            {features.map((feature) => {
              return (
                <li key={feature}>
                  <div className="flex items-start md:items-center gap-x-4">
                    <CheckIcon className="text-blue400" />
                    <Paragraph className="text-blue500">{feature}</Paragraph>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        id="plans"
        className="flex flex-col lg:items-center py-16 md:py-[120px]"
      >
        <Heading
          className="text-blue500 max-w-[586px] hidden md:block w-full text-center mx-auto px-12 2xl:mx-[210px]"
          variant="h2"
        >
          Compare valores da SoluMedi com o mercado
        </Heading>
        <Heading
          className="text-blue500 w-full text-left px-6 md:hidden"
          variant="h3"
        >
          Compare valores da SoluMedi com o mercado
        </Heading>

        <ul className="w-full flex lg:grid lg:grid-cols-3 gap-x-6 mt-8 md:mt-20 snap-x snap-mandatory overflow-x-scroll scrollbar-none px-6 md:px-12 2xl:mx-[210px]">
          {plans.map((plan, index) => {
            return (
              <li className="snap-center" key={index}>
                <PricingCard className="min-w-[296px]" {...plan} />
              </li>
            )
          })}
        </ul>

        <Caption className="md:max-w-[520px] px-6 md:px-0 w-full text-left md:text-center mt-6 md:mt-10">
          Valores meramente ilustrativos com base nos preços praticados pelo
          mercado. A SoluMedi não garante valores de consultas e exames médicos.
        </Caption>
      </section>

      <section
        className="py-[120px] px-0 lg:px-12 2xl:px-[56px] flex flex-col xl:items-center bg-blue100"
        id="steps"
      >
        <Heading
          className="text-[2rem] leading-[125%] md:text-[4rem] md:leading-[100%] text-center mx-12 lg:mx-0"
          variant="h2"
        >
          É rápido, fácil e você só paga se usar
        </Heading>

        <ul className="flex xl:grid xl:grid-cols-4 gap-x-3 md:gap-x-6 mt-20 overflow-x-scroll snap-x snap-mandatory px-12 lg:px-0 scrollbar-none">
          {steps.map(({ description, step }) => {
            return (
              <li className="snap-center" key={step}>
                <StepCard
                  className="min-w-[296px] lg:min-w-[276px] xl:min-w-min w-full"
                  description={description}
                  step={step}
                />
              </li>
            )
          })}
        </ul>
      </section>

      <Footer.Root>
        <Footer.Logo />
        <Footer.Copyright />
      </Footer.Root>
    </div>
  )
}
