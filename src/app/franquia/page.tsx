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

export default function FranquiaPage() {
  const steps = [
    {
      step: 1,
      description: 'Conversa inicial com nosso time',
    },
    {
      step: 2,
      description: 'Avaliação de perfil e financeira',
    },
    {
      step: 3,
      description: 'Busca e escolha do ponto comercial',
    },
    {
      step: 4,
      description:
        'Assinatura de contrato e início da implantação (prazo médio de 90 dias)',
    },
    {
      step: 5,
      description: 'Inauguração da sua franquia SoluMedi',
    },
  ]

  const testimonials: TestimonialProps[] = [
    {
      personTitle: 'Thalles Machado',
      personSubtitle: 'Franqueado',
      testimonial:
        '“Sempre quis ter um negócio na área da saúde, porém não sou médico, a SoluMedi me proporcionou atuar nesse segmento através de franquias.”',
      personImg: '/franquia/testimonial1.png',
    },
    {
      personTitle: 'Thalles Machado',
      personSubtitle: 'Franqueado',
      testimonial:
        '“Sempre quis ter um negócio na área da saúde, porém não sou médico, a SoluMedi me proporcionou atuar nesse segmento através de franquias.”',
      personImg: '/franquia/testimonial1.png',
    },
    {
      personTitle: 'Daniela Passos',
      personSubtitle: 'Franqueado',
      testimonial:
        '“Com a SoluMedi consegui empreender sem abrir mão da qualidade de vida.”',
      personImg: '/franquia/testimonial0.png',
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

  const franchises = [
    {
      title: 'Unidade física',
      imageHref: '/franquia/unidade.png',
      features: [
        {
          label: 'Investimento a partir de',
          value: 'R$ 125 mil',
        },
        {
          label: 'Lucratividade acima de',
          value: '20%',
        },
        {
          label: 'Faturamento de até',
          value: 'R$ 1,2 milhão',
        },
        {
          label: 'Ponto em',
          value: 'loja de rua, galerias e shoppings',
        },
      ],
    },
    {
      title: 'Unidade digital',
      imageHref: '/franquia/womanAndDog.png',
      features: [
        {
          label: 'Investimento a partir de',
          value: 'R$ 40 mil',
        },
        {
          label: 'Lucratividade acima de',
          value: '20%',
        },
        {
          label: 'Faturamento de até',
          value: 'R$ 900 mil',
        },
        {
          label: 'Trabalhe de',
          value: 'casa ou aonde estiver',
        },
      ],
    },
  ]

  return (
    <div className="w-full overflow-x-hidden">
      <main className="relative bg-blue100" id="hero">
        <Header />
        <div className="max-w-[585px] w-full py-[168px] ml-[210px]">
          <Heading variant="h1">
            Fature até R$ 1,2 milhão por ano com uma franquia SoluMedi
          </Heading>

          <Paragraph className="block mt-6 text-blue500 mb-10">
            Tenha o seu próprio negócio e faça parte de uma rede consolidada no
            mercado nacional de saúde.
          </Paragraph>

          <Button label="Seja um franqueado" icon={<ArrowRightIcon />} />
        </div>

        <Image
          className="absolute bottom-0 right-[210px]"
          width={799}
          height={762}
          src="/franquia/hero.png"
          alt="Woman and informations."
        />
      </main>

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
        className="bg-blue100 py-[120px] px-[56px]"
        id="meetOurFranchises"
      >
        <Heading
          className="text-center max-w-[766px] text-blue500 mx-auto"
          variant="h1"
        >
          Conheça nossos modelos de franquia
        </Heading>

        <div className="flex gap-x-6 mt-20">
          {franchises.map(({ features, imageHref, title }, index) => {
            return (
              <div
                data-first={index === 0}
                className="flex items-center bg-neutral100 h-[640px] rounded-[48px] data-[first=false]:mt-20 data-[first=true]:flex-row-reverse"
                key={title}
              >
                <Image width={446} height={640} src={imageHref} alt={title} />
                <div className="px-12">
                  <Heading variant="h3" className="text-blue500">
                    Unidade digital
                  </Heading>

                  <ul className="mt-16 flex flex-col items-start gap-y-6">
                    {features.map(({ label, value }) => {
                      return (
                        <li key={label}>
                          <Paragraph size="md" className="text-blue400">
                            {label}
                          </Paragraph>
                          <Heading variant="h4" className="text-blue500">
                            {value}
                          </Heading>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section
        className="flex items-center justify-between mx-[210px] py-[110px]"
        id="dayADay"
      >
        <div className="max-w-[584px]">
          <Heading className="block mb-10" variant="h1">
            Da implantação ao dia-a-dia, todo o suporte que você precisa
          </Heading>

          <Paragraph size="md" className="text-blue500">
            Buscamos excelência em todos os nossos processos, para que o
            franqueado possua menos complexidade ao administrar a operação da
            loja.
          </Paragraph>
          <br />
          <Paragraph size="md" className="text-blue500">
            Através do SAF (serviço de atendimento ao franqueado), é possível
            obter soluções e dicas dos canais de suporte contábil, jurídico,
            marketing, parceria, tecnologia e sistema de software.
          </Paragraph>
        </div>

        <Image
          width={585}
          height={680}
          src="/franquia/womanWorking.png"
          alt="Woman talking to someone using microphones."
          className="rounded-[48px]"
        />
      </section>

      <section
        className="py-[120px] px-[56px] flex flex-col items-center bg-blue100"
        id="steps"
      >
        <Heading variant="h2">É rápido, fácil e você só paga se usar</Heading>

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
        className='bg-[url("/franquia/doctor.png")] bg-cover pl-[210px] h-[848px] flex items-center'
        id="helpImprovingBrazilianHealth"
      >
        <div className="max-w-[739px] flex flex-col gap-y-20">
          <strong className="text-neutral100 text-[6.5rem] leading-[6rem] font-semibold font-manrope">
            Ajude também a melhorar a saúde brasileira
          </strong>

          <Button
            label="Seja um franqueado"
            variant="white"
            icon={<ArrowRightIcon />}
          />
        </div>
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
