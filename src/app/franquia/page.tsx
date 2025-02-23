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
      <main
        className="relative bg-blue100 h-[857px] md:h-[1000px] xl:h-[760px] 2xl:h-[904px]"
        id="hero"
      >
        <Header />
        <div className="w-full px-6 md:px-12 xl:max-w-[550px] 2xl:max-w-[585px] py-10 md:py-20 2xl:py-[168px] xl:ml-14 2xl:ml-[210px]">
          <Heading variant="h1" className="hidden md:block z-50">
            Fature até R$ 1,2 milhão por ano com uma franquia SoluMedi
          </Heading>
          <Heading variant="h3" className="md:hidden z-50">
            Fature até R$ 1,2 milhão por ano com uma franquia SoluMedi
          </Heading>

          <Paragraph className="block mt-6 text-blue500 mb-10">
            Tenha o seu próprio negócio e faça parte de uma rede consolidada no
            mercado nacional de saúde.
          </Paragraph>

          <Button label="Seja um franqueado" icon={<ArrowRightIcon />} />
        </div>

        <Image
          className="w-[338px] h-[338px] right-1/2 translate-x-1/2 md:translate-x-0 md:w-[580px] md:h-[502px] xl:h-[659px] xl:w-[682px] 2xl:w-[799px] 2xl:h-[762px] absolute bottom-0 md:right-14 2xl:right-[210px] z-0"
          width={799}
          height={762}
          src="/franquia/hero.png"
          alt="Woman and informations."
        />
      </main>

      <section
        className="py-16 md:py-20 lg:py-[120px] mx-6 md:mx-12 lg:mx-14 2xl:mx-[210px]"
        id="cards"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
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
        className="bg-blue100  py-16 md:py-20 lg:py-[120px] px-6 md:px-12 lg:px-[56px]"
        id="meetOurFranchises"
      >
        <Heading
          className="text-center max-w-[766px] text-blue500 mx-auto hidden md:block"
          variant="h1"
        >
          Conheça nossos modelos de franquia
        </Heading>

        <Heading className="text-center md:hidden text-blue500" variant="h3">
          Conheça nossos modelos de franquia
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[892px,892px] justify-center gap-x-6 mt-10 md:mt-20 mx-auto">
          {franchises.map(({ features, imageHref, title }, index) => {
            return (
              <div
                data-first={index === 0}
                className="flex flex-col md:gap-y-0 md:flex-row items-center bg-neutral100 h-full md:h-[640px] rounded-[48px] data-[first=false]:mt-10 lg:data-[first=false]:mt-20 md:data-[first=true]:flex-row-reverse"
                key={title}
              >
                <Image
                  className="w-[312px] h-[320px] md:w-[336px] lg:w-[286px] 2xl:w-[446px] md:h-[640px] object-cover rounded-[48px]"
                  width={446}
                  height={640}
                  src={imageHref}
                  alt={title}
                />
                <div className="py-12 md:py-0 px-12">
                  <Heading variant="h3" className="text-blue500">
                    {title}
                  </Heading>

                  <ul className="mt-8 md:mt-16 flex flex-col items-start gap-y-6">
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
        className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-14 2xl:mx-[210px] py-[110px]"
        id="dayADay"
      >
        <div className="lg:max-w-[473px] 2xl:max-w-[584px]">
          <Heading className="hidden md:block mb-10" variant="h1">
            Da implantação ao dia-a-dia, todo o suporte que você precisa
          </Heading>
          <Heading className="block md:hidden mb-10" variant="h3">
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
          className="rounded-[48px] mt-10 lg:mt-0 w-full h-[495px] lg:w-[585px] lg:h-[680px] object-cover"
        />
      </section>

      <section
        className="py-16 md:py-[120px] flex flex-col xl:items-center bg-blue100"
        id="steps"
      >
        <Heading className="px-[56px] text-center hidden md:block" variant="h2">
          É mais rápido do que você imagina
        </Heading>

        <Heading className="px-[56px] text-center md:hidden" variant="h3">
          É mais rápido do que você imagina
        </Heading>

        <ul className="flex xl:grid xl:grid-cols-5 gap-x-3 md:gap-x-6 mt-10 md:mt-20 overflow-x-scroll snap-x snap-mandatory px-16 scrollbar-none">
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

      <Testimonials testimonials={testimonials} />

      <section
        className='bg-[url("/franquia/doctor.png")] bg-cover bg-center bg-no-repeat px-6 md:px-12 lg:pl-14 2xl:pl-[210px] h-[544px] md:h-[824px] lg:h-[944px] 2xl:h-[848px] flex items-center'
        id="helpImprovingBrazilianHealth"
      >
        <div className="lg:max-w-[671px] 2xl:max-w-[739px] flex flex-col gap-y-10 lg:gap-y-20">
          <strong className="text-neutral100 text-[6.5rem] leading-[6rem] md:block hidden font-semibold font-manrope">
            Ajude também a melhorar a saúde brasileira
          </strong>
          <Heading className="md:hidden text-neutral100" variant="h2">
            Ajude também a melhorar a saúde brasileira
          </Heading>

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
