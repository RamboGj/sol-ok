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

  return (
    <div className="w-full overflow-x-hidden">
      <section className="bg-[url('/hero.png')] bg-cover bg-center" id="hero">
        <Header />

        <main className="max-w-[473px] w-full py-[168px] ml-[210px]">
          <Heading variant="h1">
            Consultas médicas com valores reduzidos
          </Heading>

          <Paragraph className="block mt-6 text-blue500">
            Agende consultas particulares e exames nas melhores clínicas e
            laboratórios com valores acessíveis.
          </Paragraph>

          <div className="flex mt-10 gap-x-4">
            <Button label="Agendar agora" icon={<ArrowRightIcon />} />
            <Button label="Procurar uma unidade" variant="white" />
          </div>
        </main>
      </section>

      <section
        className="w-full flex flex-col gap-y-20 items-center my-20"
        id="cards"
      >
        <Heading
          className="max-w-[892px] w-full text-center text-blue500"
          variant="h2"
        >
          Economize com a SoluMedi para se consultar ou fazer exames
        </Heading>

        <div className="grid grid-cols-4 grid-rows-2 mx-[56px] items-center gap-6">
          <div className="bg-blue100 rounded-[48px] h-[268px] p-[56px] grid row-span-1 col-span-1">
            <Heading
              className="w-full 2xl:w-[232px] block mt-auto"
              variant="h4"
            >
              Cadastro fácil, rápido e totalmente gratuito.
            </Heading>
          </div>

          <div className="bg-neutral100 border border-blue200 h-full rounded-[48px]  p-[56px] grid row-span-2 col-span-1">
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

          <div className="bg-blue100 relative overflow-hidden rounded-[48px] p-[56px] grid h-full row-span-2 col-span-2">
            <Image
              alt="Cartão Solumedi"
              src={solumediCardImg}
              className="absolute top-0 inset-x-0 w-full h-[400px]"
            />

            <div className="mt-auto flex items-end justify-between">
              <div className="max-w-[400px] w-full">
                <Heading variant="h2">Cartão SoluMedi</Heading>

                <Paragraph className="text-blue500 block mt-6" size="md">
                  O melhor custo x benefício para manter sua saúde em dia.
                </Paragraph>
              </div>

              <Button
                label="Peça agora o seu"
                variant="white"
                icon={<ArrowRightIcon />}
              />
            </div>
          </div>

          <div className="bg-blue400 rounded-[48px] h-[268px] p-[56px] grid row-span-1 col-span-1">
            <Heading
              className="w-full 2xl:w-[232px] block mt-auto text-neutral100"
              variant="h4"
            >
              Cadastro fácil, rápido e totalmente gratuito.
            </Heading>
          </div>
        </div>
      </section>

      <section
        className="flex items-center  justify-between mx-[210px] mt-[160px] mb-[120px]"
        id="especialidades"
      >
        <div className="max-w-[434px] w-full">
          <Heading className="text-blue500" variant="h2">
            Encontre a especialidade que você precisa
          </Heading>

          <Paragraph className="text-blue500 block mt-8" size="md">
            São mais de 50 especialidades de profissionais para atender as suas
            necessidades.
          </Paragraph>

          <ul className="flex flex-col mt-14 gap-y-14">
            <li>
              <Heading variant="h3">+ de 60</Heading>
              <Heading className="block ml-[28px] text-blue500" variant="h3">
                especialidades
              </Heading>
            </li>

            <li>
              <Heading variant="h3">+ de 15 mil</Heading>
              <Heading className="block ml-[28px] text-blue500" variant="h3">
                profissionais
              </Heading>
            </li>
          </ul>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col gap-6 mt-10">
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

          <div className="flex flex-col gap-6">
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
          <div className="flex flex-col gap-6 mt-[120px]">
            <CardEspecialidade
              title={especialidades[4].title}
              href={especialidades[4].href}
              imageHref={especialidades[4].imageHref}
            />

            <NextLink
              href={'#'}
              className="rounded-[40px] w-[230px] h-[240px] bg-blue100 p-8 group flex flex-col"
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
        className="flex flex-col items-center py-[120px] mx-[210px]"
      >
        <Heading
          className="text-blue500 max-w-[586px] w-full text-center"
          variant="h2"
        >
          Compare valores da SoluMedi com o mercado
        </Heading>

        <ul className="w-full grid grid-cols-3 gap-x-6 mt-20">
          {plans.map((plan, index) => {
            return (
              <li key={index}>
                <PricingCard {...plan} />
              </li>
            )
          })}
        </ul>

        <Caption className="max-w-[520px] w-full text-center mt-10">
          Valores meramente ilustrativos com base nos preços praticados pelo
          mercado. A SoluMedi não garante valores de consultas e exames médicos.
        </Caption>
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

      <section className="py-[120px] mx-14" id="stayAware">
        <div className="w-full flex items-center justify-between">
          <Heading variant="h2" className="text-blue500">
            Fique por dentro
          </Heading>

          <Link
            label="Ir para o blog"
            href="/blog"
            icon={<ArrowUpRightIcon className="text-blue400" />}
          />
        </div>

        <ul className="mt-20 grid grid-cols-4 items-stretch gap-x-6">
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

      <section id="banners" className="py-[120px] mx-14">
        <ul className="grid grid-cols-2 gap-x-6">
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
