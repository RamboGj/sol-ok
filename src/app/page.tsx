'use client'

import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'

import { Header } from '@/components/molecules/Header/Header'
import Image from 'next/image'

import solumediCardImg from '@/assets/main-page/solumedi-card.png'
import { CardEspecialidade } from './_components/CardEspecialidade/CardEspecialidade'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import NextLink from 'next/link'
import {
  PricingCard,
  PricingProps,
} from './_components/PricingCard/PricingCard'
import { Caption } from '@/components/@solumedi-ui/atoms/Caption/Caption'
import { StepCard } from '@/components/molecules/StepCard/StepCard'
import {
  TestimonialProps,
  Testimonials,
} from './_components/Testimonials/Testimonials'
import { Link } from '@/components/@solumedi-ui/atoms/Link/Link'
import { ArrowUpRightIcon } from '@/components/@icons/arrow-up-right'
import { PostCard } from '@/components/molecules/PostCard/PostCard'
import { Footer } from '@/components/molecules/Footer'
import { Banner } from '@/components/molecules/Banner/Banner'
import { useDeviceType } from '@/hooks/useDeviceType'

export default function HomePage() {
  const especialidades = [
    {
      title: 'Cuidado com os olhos',
      imageHref: '/especialidades/olhos.png',
      href: '#',
    },
    {
      title: 'Saúde bucal',
      imageHref: '/especialidades/saude_bucal.png',
      href: '#',
    },
    {
      title: 'Mente saudável',
      imageHref: '/especialidades/mente.png',
      href: '#',
    },
    {
      title: 'Cuidados da pele',
      imageHref: '/especialidades/cuidados_pele.png',
      href: '#',
    },
    {
      title: 'Coração em dia',
      imageHref: '/especialidades/coracao.png',
      href: '#',
    },
  ]

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
        'Escolha a especialidade e informe a cidade em que você mora.',
    },
    {
      step: 2,
      description:
        'Será iniciado um atendimento com a unidade mais próxima de você através do WhatsApp.',
    },
    {
      step: 3,
      description:
        'Um de nossos atendentes irá te ajudar a selecionar um profissional ou laboratório.',
    },
    {
      step: 4,
      description:
        'Após você realizer o pagamento, seu atendimento já estará marcado.',
    },
    {
      step: 5,
      description:
        'Depois é só comparecer na clínica ou laboratório no dia agendado!',
    },
  ]

  const symptoms = [
    {
      imageHref: '/problems/endoscopia.png',
      theme: 'Saúde',
      title: 'Endoscopia: Quando ela é necessária?',
      href: '/blog',
    },
    {
      imageHref: '/problems/gastrite.png',
      theme: 'Saúde',
      title: '5 sintomas da gastrite nervosa',
      href: '/blog',
    },
    {
      imageHref: '/problems/diabetes.png',
      theme: 'Saúde',
      title:
        'Este hábito diário é responsável por 70% dos casos de diabetes; saiba como se proteger',
      href: '/blog',
    },
    {
      imageHref: '/problems/gastrite_2.png',
      theme: 'Saúde',
      title: 'Gastrite: aquele incomodo que deve ser tratado!',
      href: '/blog',
    },
  ]

  const banners = [
    {
      title: 'Seja um franqueado',
      description:
        'Fature em média R$ 1,8 milhão por ano com a rede de franquias que mais cresce no Brasil.',
      cta: 'Saiba mais',
      bannerImageUrl: '/banner.png',
    },
    {
      title: 'Profissional da saúde',
      description:
        'Tenha mais pacientes com a SoluMedi ampliando sua rede de atendimentos.',
      cta: 'Cadastre-se',
      bannerImageUrl: '/banner2.png',
    },
  ]

  const testimonials: TestimonialProps[] = [
    {
      personTitle: 'Francisco',
      testimonial:
        '“Fiz a minha carteirinha e foi muito rápido, não paguei nada e gostei porque não tem mensalidade.”',
      personImg: '/cases/francisco.png',
    },
    {
      personTitle: 'Francisco',
      testimonial:
        '“Fiz a minha carteirinha e foi muito rápido, não paguei nada e gostei porque não tem mensalidade.”',
      personImg: '/cases/francisco.png',
    },
    {
      personTitle: 'Rebeca Silva',
      testimonial:
        '“Me ajudou muito pois em um momento super delicado consegui realizar um ultrassom obstétrico de forma rápida e com valor baixo.”',
      personImg: '/cases/rebecca.png',
    },
  ]

  const { isMobile } = useDeviceType()

  return (
    <div className="w-full overflow-x-hidden">
      <section
        className="bg-[url('/hero.png')] h-[240px] md:h-[400px] lg:h-[760px] 2xl:h-[904px] bg-cover bg-center"
        id="hero"
      >
        <Header />

        <main className="hidden lg:block max-w-[473px] w-full py-[109px] 2xl:py-[168px] ml-16 2xl:ml-[210px]">
          <Heading variant="h1">
            Consultas médicas com valores reduzidos
          </Heading>

          <Paragraph className="block mt-6 text-blue500">
            Agende consultas particulares e exames nas melhores clínicas e
            laboratórios com valores acessíveis.
          </Paragraph>

          <div className="flex mt-10 gap-4">
            <Button label="Agendar agora" icon={<ArrowRightIcon />} />
            <Button label="Procurar uma unidade" variant={'white'} />
          </div>
        </main>
      </section>

      <main className="lg:hidden lg:max-w-[473px] w-full pt-8 px-6 md:px-12">
        <Heading className="hidden md:block" variant="h2">
          Consultas médicas com valores reduzidos
        </Heading>
        <Heading className="md:hdiden" variant="h3">
          Consultas médicas com valores reduzidos
        </Heading>

        <Paragraph className="block mt-6 text-blue500">
          Agende consultas particulares e exames nas melhores clínicas e
          laboratórios com valores acessíveis.
        </Paragraph>

        <div className="w-full flex flex-col md:flex-row mt-10 gap-3">
          <Button
            className="w-full justify-between"
            label="Agendar agora"
            icon={<ArrowRightIcon />}
          />
          <Button
            className="w-full text-center justify-center"
            label="Procurar uma unidade"
            variant={isMobile ? 'light-blue' : 'white'}
          />
        </div>
      </main>

      <section
        className="w-full flex flex-col gap-y-8 md:gap-y-20 items-center my-20 px-6 md:px-12 lg:px-14"
        id="cards"
      >
        <Heading
          className="max-w-[892px] w-full text-center text-blue500 hidden md:block"
          variant="h2"
        >
          Economize com a SoluMedi para se consultar ou fazer exames
        </Heading>
        <Heading className="md:hidden text-center text-blue500" variant="h3">
          Economize com a SoluMedi para se consultar ou fazer exames
        </Heading>

        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:mx-[56px] items-center gap-3 md:gap-6">
          <div className="bg-blue100 rounded-[24px] md:rounded-[48px] h-[268px] p-6 md:p-12 lg:p-[56px] order-1 grid row-span-1 col-span-1">
            <Heading
              className="w-full 2xl:w-[232px] md:block mt-auto hidden"
              variant="h4"
            >
              Cadastro fácil, rápido e totalmente gratuito.
            </Heading>
            <Paragraph className="w-full block mt-auto md:hidden" size="sm">
              Cadastro fácil, rápido e totalmente gratuito.
            </Paragraph>
          </div>

          <div className="bg-neutral100 border border-blue200 h-full rounded-[24px] md:rounded-[48px] order-2 p-6 md:p-12 lg:p-[56px] grid row-span-2 col-span-2 md:col-span-1">
            <div className="mt-auto flex flex-col">
              <Heading variant="h4">A partir de</Heading>

              <Heading className="block mt-2" variant="h1">
                R$ 7,00
              </Heading>

              <Paragraph className="text-blue500 block mt-6" size="md">
                O melhor custo x benefício para manter sua saúde em dia.
              </Paragraph>
            </div>
          </div>

          <div className="bg-blue100 relative h-[560px] order-3 overflow-hidden rounded-[24px] md:rounded-[48px] p-6 md:p-12 lg:p-[56px] grid lg:h-full row-span-2 col-span-2">
            <Image
              alt="Cartão Solumedi"
              src={solumediCardImg}
              className="absolute top-0 inset-x-0 w-full h-[220px] md:h-[300px] lg:h-[260px] 2xl:h-[400px]"
            />

            <div className="mt-auto flex flex-col 2xl:flex-row items-start 2xl:items-end justify-between">
              <div className="max-w-[400px] w-full">
                <Heading className="hidden md:block" variant="h2">
                  Cartão SoluMedi
                </Heading>
                <Heading className="md:hidden" variant="h3">
                  Cartão SoluMedi
                </Heading>

                <Paragraph
                  className="text-blue500 mt-6 hidden md:block"
                  size="md"
                >
                  Gratuito, rapido e fácil de usar. Sem cobrança de mensalidade
                  e anuidade. Você só paga quando precisa usar.
                </Paragraph>
                <Paragraph
                  className="text-blue500 block mt-4 md:hidden"
                  size="sm"
                >
                  Gratuito, rapido e fácil de usar. Sem cobrança de mensalidade
                  e anuidade. Você só paga quando precisa usar.
                </Paragraph>
              </div>

              <Button
                className="mt-6 2xl:mt-0"
                label="Peça agora o seu"
                variant="white"
                icon={<ArrowRightIcon />}
              />
            </div>
          </div>

          <div className="bg-blue400 rounded-[24px] md:rounded-[48px] h-[268px] p-6 md:p-12 lg:p-[56px] grid row-span-1 order-1 md:order-2 lg:order-3 col-span-1">
            <Heading
              className="w-full 2xl:w-[232px] md:block mt-auto hidden text-neutral100"
              variant="h4"
            >
              Pague só quando usar, sem taxas mensais.
            </Heading>
            <Paragraph
              className="w-full block mt-auto md:hidden text-neutral100"
              size="sm"
            >
              Pague só quando usar, sem taxas mensais.
            </Paragraph>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col lg:flex-row md:items-center justify-between 2xl:mx-[210px] mt-16 md:mt-20 lg:mt-[160px] mb-[120px]"
        id="especialidades"
      >
        <div className="lg:max-w-[434px] w-full  px-6 md:px-12 lg:px-14">
          <Heading className="text-blue500" variant="h2">
            Encontre a especialidade que você precisa
          </Heading>

          <Paragraph className="text-blue500 block mt-8" size="md">
            São mais de 50 especialidades de profissionais para atender as suas
            necessidades.
          </Paragraph>

          <ul className="md:flex hidden flex-row lg:flex-col mt-14 gap-y-14 gap-6">
            <li className="w-full">
              <Heading variant="h3">+ de 60</Heading>
              <Heading className="block ml-[28px] text-blue500" variant="h3">
                especialidades
              </Heading>
            </li>

            <li className="w-full">
              <Heading variant="h3">+ de 15 mil</Heading>
              <Heading className="block ml-[28px] text-blue500" variant="h3">
                profissionais
              </Heading>
            </li>
          </ul>
        </div>

        <div className="flex gap-6 mt-8 md:mt-16 lg:mt-0 overflow-x-scroll px-6 md:px-12 lg:px-14">
          <div className="flex flex-row md:flex-col gap-6 md:mt-10">
            <CardEspecialidade
              title={especialidades[0].title}
              href={especialidades[0].href}
              imageHref={especialidades[0].imageHref}
            />
            <CardEspecialidade
              title={especialidades[1].title}
              href={especialidades[1].href}
              imageHref={especialidades[1].imageHref}
            />
          </div>

          <div className="flex flex-row md:flex-col gap-6">
            <CardEspecialidade
              title={especialidades[2].title}
              href={especialidades[2].href}
              imageHref={especialidades[2].imageHref}
            />
            <CardEspecialidade
              title={especialidades[3].title}
              href={especialidades[3].href}
              imageHref={especialidades[3].imageHref}
            />
          </div>
          <div className="flex flex-row md:flex-col gap-6 md:mt-[120px]">
            <CardEspecialidade
              title={especialidades[4].title}
              href={especialidades[4].href}
              imageHref={especialidades[4].imageHref}
            />

            <NextLink
              href={'#'}
              className="rounded-[40px] w-[200px] h-[240px] bg-blue100 p-8 group flex flex-col"
            >
              <Heading variant="h3">Ver todos</Heading>
              <div className="flex justify-end mt-auto">
                <IconButton icon={<ArrowRightIcon />} />
              </div>
            </NextLink>
          </div>
        </div>
      </section>

      <section
        id="plans"
        className="flex flex-col items-center py-16 md:py-20 lg:py-[120px] 2xl:mx-[210px]"
      >
        <Heading
          className="text-blue500 hidden md:block px-6 md:px-12 lg:px-0 max-w-[586px] w-full text-center"
          variant="h2"
        >
          Compare valores da SoluMedi com o mercado
        </Heading>

        <Heading
          className="md:hidden text-left text-blue500 px-6 md:px-12 lg:px-0 max-w-[586px] w-full"
          variant="h3"
        >
          Compare valores da SoluMedi com o mercado
        </Heading>

        <ul className="w-full flex lg:grid lg:grid-cols-3 gap-x-6 mt-8 md:mt-20 snap-x snap-mandatory overflow-x-scroll scrollbar-none px-6 md:px-12 2xl:mx-[210px]">
          {plans.map((plan, index) => {
            return (
              <li key={index}>
                <PricingCard className="w-[296px] lg:w-full" {...plan} />
              </li>
            )
          })}
        </ul>

        <Caption className="max-w-[520px] px-6 md:px-12 lg:px-16 text-left w-full md:text-center mt-10">
          Valores meramente ilustrativos com base nos preços praticados pelo
          mercado. A SoluMedi não garante valores de consultas e exames médicos.
        </Caption>
      </section>

      <section
        className="py-16 md:py-20 lg:py-[120px] flex flex-col xl:items-center bg-blue100"
        id="steps"
      >
        <Heading
          className="text-center md:px-12 lg:px-16 hidden md:block"
          variant="h2"
        >
          É rápido, fácil e você só paga se usar
        </Heading>
        <Heading className="text-center px-6 md:hidden" variant="h3">
          É rápido, fácil e você só paga se usar
        </Heading>

        <ul className="flex xl:grid xl:grid-cols-5 gap-x-3 md:gap-x-6 mt-10 md:mt-20 overflow-x-scroll snap-x snap-mandatory px-6 md:px-12 lg:px-16">
          {steps.map(({ description, step }) => {
            return (
              <li className="snap-center" key={step}>
                <StepCard
                  className="w-[296px] lg:w-full"
                  description={description}
                  step={step}
                />
              </li>
            )
          })}
        </ul>
      </section>

      <Testimonials testimonials={testimonials} />

      <section className="py-16 md:py-[120px]" id="stayAware">
        <div className="w-full flex flex-col md:flex-row gap-y-2 md:gap-0 items-start lg:items-center justify-between  px-6 md:px-12 lg:px-14">
          <Heading variant="h2" className="text-blue500 hidden md:block">
            Fique por dentro
          </Heading>
          <Heading variant="h3" className="text-blue500 md:hidden">
            Fique por dentro
          </Heading>

          <Link
            label="Ir para o blog"
            href="/blog"
            icon={<ArrowUpRightIcon className="text-blue400" />}
          />
        </div>

        <ul className="mt-8 md:mt-20 flex overflow-x-scroll lg:grid lg:grid-cols-4 items-stretch gap-x-6  px-6 md:px-12 lg:px-14">
          {symptoms.map(({ href, imageHref, theme, title }) => {
            return (
              <li key={title}>
                <PostCard
                  href={href}
                  imageHref={imageHref}
                  theme={theme}
                  title={title}
                />
              </li>
            )
          })}
        </ul>
      </section>

      <section
        id="banners"
        className="py-0 md:py-20 lg:py-[120px] mx-6 md:mx-12 lg:mx-14"
      >
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {banners.map(({ bannerImageUrl, cta, description, title }) => {
            return (
              <li key={title}>
                <Banner
                  bannerImageUrl={bannerImageUrl}
                  cta={cta}
                  description={description}
                  title={title}
                />
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
