import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'

import { Header } from '@/components/molecules/Header/Header'
import Image from 'next/image'

import { StepCard } from '@/components/molecules/StepCard/StepCard'
import { Footer } from '@/components/molecules/Footer'
import { Bullet } from '@/components/molecules/Bullet/Bullet'

export default function AboutUsPage() {
  const steps = [
    {
      step: 2016,
      description:
        'Fundação da SoluMedi com a primeira unidade em Curitiba no bairro Centro Cívico.',
    },
    {
      step: 2017,
      description:
        'A SoluMedi agora faz parte da ABF, Associação Brasileira de Franchising, abrindo portas para mais unidades em todo o Brasil.',
    },
    {
      step: 2019,
      description:
        'Expansão para mais 3 estados brasileiros: Santa Catarina, São Paulo e Rio Grande do Sul.',
    },
    {
      step: 2024,
      description:
        'Nossa CEO Thaty Gimenez é homenageada com o título de Cidadã Honorária de Curitiba na câmara de Municipal de Curitiba.',
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

  const persons = [
    '/diversity/person0.png',
    '/diversity/person1.png',
    '/diversity/person2.png',
    '/diversity/person3.png',
    '/diversity/person4.png',
    '/diversity/person5.png',
    '/diversity/person6.png',
    '/diversity/person7.png',
    '/diversity/person8.png',
  ]

  return (
    <div className="w-full overflow-x-hidden">
      <Header />

      <main className="max-w-[1198px] w-full mt-16 md:my-[120px] 2xl:my-40 px-6 md:px-12 lg:px-14 2xl:mx-auto flex flex-col items-center text-center gap-y-16">
        <h1 className="font-semibold hidden lg:block font-manrope text-[6.5rem] leading-[6rem] tracking-[-2%] text-blue400">
          Saúde acessível e de qualidade para todos
        </h1>

        <Heading className="hidden md:block lg:hidden" variant="h1">
          Saúde acessível e de qualidade para todos
        </Heading>

        <Heading className="block md:hidden" variant="h3">
          Saúde acessível e de qualidade para todos
        </Heading>

        <div className="max-w-[584px]">
          <Paragraph className="block text-blue500">
            A Solumedi surgiu da ideia de conectar clínicas particulares com
            pessoas que buscam atendimento médico de qualidade.
          </Paragraph>

          <br />

          <Paragraph className="block text-blue500">
            Não realizamos nenhum tipo de cobrança recorrente e o usuário efetua
            somente o pagamento do agendamento. O que faz com que a Solumedi
            tenha o melhor custo x benefício no ramo da saúde.
          </Paragraph>
        </div>
      </main>

      <section
        className="py-[120px] bg-blue100 px-14 2xl:px-[210px]"
        id="cards"
      >
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
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
        className="px-6 md:px-12 lg:px-14 2xl:px-[210px] py-16 md:py-24 lg:py-[120px] gap-y-10 md:gap-0 flex flex-col md:flex-row-reverse items-center justify-between bg-blue100"
        id="saveYourTime"
      >
        <div className="max-w-[324px] lg:max-w-[473px] 2xl:max-w-[584px] flex flex-col gap-y-10">
          <Heading className="hidden lg:block" variant="h2">
            São mais de 80 mil brasileiros com acesso a saúde de qualidade
          </Heading>
          <Heading className="lg:hidden" variant="h3">
            São mais de 80 mil brasileiros com acesso a saúde de qualidade
          </Heading>

          <Paragraph className="text-blue500" size="md">
            Com o serviço de agendamento da SoluMedi, as pessoas tem acesso a um
            serviço de saúde com qualidade sem a necessidade de pagar
            mensalidades caras.
          </Paragraph>
        </div>
        <Image
          width={738}
          height={688}
          src={'/about-us/persons.png'}
          alt="Some persons."
          className="w-[324px] lg:w-[572px] 2xl:w-[738px]"
        />
      </section>

      <section
        className="py-16 md:py-[120px] flex flex-col 2xl:items-center bg-blue100"
        id="steps"
      >
        <Heading className="hidden md:block px-[56px]" variant="h2">
          Nossa história
        </Heading>
        <Heading className="md:hidden px-[56px]" variant="h3">
          Nossa história
        </Heading>

        <ul className="flex items-start gap-x-6 mt-10 md:mt-20 px-[56px] 2xl:px-[210px] snap-x snap-mandatory overflow-x-auto">
          {steps.map(({ description, step }) => {
            return (
              <li className="snap-center" key={step}>
                <StepCard
                  className="w-[272px] md:w-[324px] lg:w-[373px] 2xl:w-[434px]"
                  size="sm"
                  description={description}
                  step={step}
                />
              </li>
            )
          })}
        </ul>
      </section>

      <section
        className="py-16 md:py-[120px] px-6 md:px-12 lg:px-14 2xl:px-[210px] bg-blue100"
        id="steps"
      >
        <div className="w-full bg-blue400 px-6 md:px-20 lg:px-0 rounded-[48px] h-[248px] md:h-[376px] flex justify-center items-center flex-col gap-y-10">
          <Heading
            className="hidden md:block lg:max-w-[770px] 2xl:max-w-[682px] text-center text-neutral100"
            variant="h2"
          >
            Ajude a ampliar o acesso à saúde de qualidade no Brasil
          </Heading>
          <Heading
            className="md:hidden lg:max-w-[770px] 2xl:max-w-[682px] text-center text-neutral100"
            variant="h4"
          >
            Ajude a ampliar o acesso à saúde de qualidade no Brasil
          </Heading>

          <Button
            className="md:block hidden"
            variant="white"
            label="Seja um franqueado"
            icon={<ArrowRightIcon />}
          />
          <Button
            className="md:hidden"
            size="sm"
            variant="white"
            label="Seja um franqueado"
            icon={<ArrowRightIcon />}
          />
        </div>
      </section>

      <section className="py-[120px]" id="diversity">
        <div className="relative w-full overflow-hidden">
          <div className="mb-1.5 lg:mb-8">
            <div className="animate-marquee-rtl flex gap-x-4">
              <div className="flex shrink-0 gap-1.5 lg:gap-4">
                {persons.map((person, index) => (
                  <Image
                    height={200}
                    width={200}
                    key={`top-${index}`}
                    src={person}
                    alt="Person"
                    className="w-[100px] h-[100px] lg:h-[200px] lg:w-[200px] rounded-lg object-cover"
                  />
                ))}
              </div>
              <div className="flex shrink-0 gap-1.5 lg:gap-4">
                {persons.map((person, index) => (
                  <Image
                    height={200}
                    width={200}
                    key={`top-duplicate-${index}`}
                    className="w-[100px] h-[100px] lg:h-[200px] lg:w-[200px] rounded-lg object-cover"
                    src={person}
                    alt="Person"
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="animate-marquee-ltr flex gap-x-4">
              <div className="flex shrink-0 gap-1.5 lg:gap-4">
                {persons.map((person, index) => (
                  <Image
                    height={200}
                    width={200}
                    key={`bottom-${index}`}
                    className="w-[100px] h-[100px] lg:h-[200px] lg:w-[200px] rounded-lg object-cover"
                    src={person}
                    alt="Person"
                  />
                ))}
              </div>
              <div className="flex shrink-0 gap-1.5 lg:gap-4">
                {persons.map((person, index) => (
                  <Image
                    height={200}
                    width={200}
                    key={`bottom-duplicate-${index}`}
                    className="w-[100px] h-[100px] lg:h-[200px] lg:w-[200px] rounded-lg object-cover"
                    src={person}
                    alt="Person"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-14 lg:px-0 lg:max-w-[880px] mt-20 mx-auto flex flex-col items-center text-center">
          <Heading className="hidden md:block" variant="h2">
            Diversidade que se traduz em mais qualidade em nossos serviços
          </Heading>
          <Heading className="md:hidden" variant="h3">
            Diversidade que se traduz em mais qualidade em nossos serviços
          </Heading>
          <div className="max-w-[586px] block mt-6 mb-10">
            <Paragraph className="text-blue500" size="md">
              A SoluMedi promove mais diversidade nas contratações e garante um
              ambiente genuinamente inclusivo para todas as pessoas se sentirem
              acolhidas e seguras para serem quem são!
            </Paragraph>
            <br />
            <Paragraph className="text-blue500" size="md">
              Além disso, estamos sempre abrindo novas vagas e uma delas pode
              ser perfeita para você.
            </Paragraph>
          </div>

          <Button label="Trabalhe com a gente" icon={<ArrowRightIcon />} />
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
