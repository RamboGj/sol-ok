'use client'

import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { DeleteIcon } from '@/components/@icons/delete'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ListLinkItem } from '@/components/@solumedi-ui/molecules/ListLinkItem/ListLinkItem'
import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header/Header'
import Image from 'next/image'

import * as Accordion from '@radix-ui/react-accordion'
import { useRouter } from 'next/navigation'

export default function TalkWithUsPage() {
  const { push } = useRouter()

  const links = [
    {
      label: 'WhatsApp',
      href: '#',
    },
    {
      label: '(41) 4003-6534',
      href: 'tel:+554140036534',
    },
    {
      label: 'sac@solumedi.com.br',
      href: 'mailto:sac@solumedi.com.br',
    },
  ]

  const ouvidoriaLinks = [
    {
      label: '4003-6534',
      href: 'tel:+5540036534',
    },
    {
      label: 'ouvidoria@solumedi.com.br',
      href: 'mailto:ouvidoria@solumedi.com.br',
    },
  ]

  const socialLinks = [
    {
      alt: 'Facebook',
      href: '#',
    },
    {
      alt: 'Instagram',
      href: '#',
    },
    {
      alt: 'Youtube',
      href: '#',
    },
  ]

  const faqList = [
    {
      question: 'O que é a SoluMedi?',
      answer: 'O que é a SoluMedi?',
    },
    {
      question: 'Como funciona a SoluMedi?',
      answer: 'Como funciona a SoluMedi?',
    },
    {
      question: 'A Solumedi é um plano de saúde, convênio ou cartão desconto?',
      answer: 'A Solumedi é um plano de saúde, convênio ou cartão desconto?',
    },
    {
      question: 'A Solumedi aceita convênio?',
      answer: 'A Solumedi aceita convênio?',
    },
    {
      question: 'Existe alguma unidade Solumedi em minha cidade?',
      answer: 'Existe alguma unidade Solumedi em minha cidade?',
    },
    {
      question: 'Como faço meu cadastro gratuito/cartão de usuário Solumedi?',
      answer: 'Como faço meu cadastro gratuito/cartão de usuário Solumedi?',
    },
  ]

  return (
    <>
      <Header />

      <div className='w-full h-[320px] md:h-[560px] bg-cover bg-center bg-[url("/womanWithCard3.png")] lg:hidden bg-no-repeat' />

      <section
        className="mt-10 flex items-start justify-between lg:px-8 xl:mx-[155px] 2xl:mx-[210px]"
        id="weAreHereToHelp"
      >
        <aside className="w-full px-6 md:px-12 lg:px-0 lg:max-w-[374px] 2xl:max-w-[586px] block">
          <div className="flex flex-col gap-y-10 pt-10 lg:pt-[120px] 2xl:pt-40 pb-[120px]">
            <Heading className="hidden 2xl:block" variant="h1">
              Estamos aqui para te ajudar
            </Heading>
            <Heading className="md:block hidden 2xl:hidden" variant="h2">
              Estamos aqui para te ajudar
            </Heading>
            <Heading className="md:hidden" variant="h3">
              Estamos aqui para te ajudar
            </Heading>
            <Paragraph size="md" className="text-blue500">
              Precisa falar com a gente? É só escolher um de nossos meios de
              atendimento ao cliente que vamos ajudar você com todo suporte
              necessário.
            </Paragraph>

            <ul>
              {links.map(({ href, label }) => {
                return (
                  <li key={label}>
                    <ListLinkItem
                      label={label}
                      href={href}
                      icon={<ArrowRightIcon />}
                    />
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="my-10 p-8 2xl:p-14 bg-blue100 rounded-[24px] flex flex-col gap-y-10">
            <Heading variant="h3" className="text-blue500">
              Encontre uma unidade próxima de você
            </Heading>

            <Button
              className="md:flex hidden w-full justify-between lg:w-fit"
              label="Procurar uma unidade"
              icon={<ArrowRightIcon />}
            />
            <Button
              size="sm"
              className="w-full justify-between md:hidden"
              label="Procurar uma unidade"
              icon={<ArrowRightIcon />}
            />
          </div>

          <div className="px-8 py-14 2xl:p-14 border border-blue200 rounded-[24px] flex flex-col gap-y-6">
            <Heading variant="h3" className="text-blue500">
              Ouvidoria
            </Heading>
            <Paragraph size="md" className="text-blue500">
              Já conversou conosco e mesmo assim não conseguiu resolver o que
              precisava? Nossa Ouvidoria pode avaliar seu caso. De segunda a
              sexta (exceto feriados) das 08:00 às 18:00
            </Paragraph>

            <ul>
              {ouvidoriaLinks.map(({ href, label }) => {
                return (
                  <li key={label}>
                    <ListLinkItem
                      label={label}
                      href={href}
                      icon={<ArrowRightIcon />}
                    />
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="py-20 flex flex-col gap-y-6">
            <Heading variant="h3" className="text-blue500">
              Siga-nos nas redes
            </Heading>
            <Paragraph size="md" className="text-blue500">
              Saiba das novidades e receba dicas na nossas redes sociais.
            </Paragraph>

            <ul>
              {socialLinks.map(({ alt, href }) => {
                return (
                  <li key={alt}>
                    <ListLinkItem
                      label={alt}
                      href={href}
                      icon={<ArrowRightIcon />}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>

        <Image
          width={739}
          height={895}
          alt="Woman with a card in hands"
          src="/womanWithCard2.png"
          className="hidden lg:block lg:sticky top-10 w-[474px] h-[536px] 2xl:w-[739px] 2xl:h-[895px]"
        />
      </section>

      <section
        className="flex flex-col lg:flex-row items-start justify-between px-6 md:px-12 lg:mx-[155px] 2xl:mx-[210px] py-[200px]"
        id="frequentlyAskedQuestions"
      >
        <Heading
          className="max-w-[434px] text-blue500 mb-10 lg:mb-0 block"
          variant="h2"
        >
          Dúvidas frequentes
        </Heading>

        <div className="flex flex-col gap-y-16">
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

          <Button
            onClick={() => {
              push('/faq')
            }}
            variant="light-blue"
            label="Ver todas as dúvidas"
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
    </>
  )
}
