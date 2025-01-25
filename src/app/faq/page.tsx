import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { DeleteIcon } from '@/components/@icons/delete'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header/Header'

import * as Accordion from '@radix-ui/react-accordion'

export default function FAQPage() {
  const sections = [
    {
      title: 'Sobre a SoluMedi',
      questions: [
        {
          question: 'O que é a SoluMedi?',
          answer: 'O que é a SoluMedi?',
        },
        {
          question: 'Como funciona?',
          answer: 'Como funciona?',
        },
        {
          question:
            'A Solumedi é um plano de saúde, convênio ou cartão desconto?',
          answer:
            'A Solumedi é um plano de saúde, convênio ou cartão desconto?',
        },
        {
          question: 'A Solumedi aceita convênio?',
          answer: 'A Solumedi aceita convênio?',
        },
        {
          question: 'Existe alguma unidade Solumedi em minha cidade?',
          answer: 'Existe alguma unidade Solumedi em minha cidade?',
        },
      ],
    },
    {
      title: 'Cartão SoluMedi',
      questions: [
        {
          question: 'Como funciona o cartão SoluMedi?',
          answer: 'Como funciona o cartão SoluMedi?',
        },
        {
          question: 'Como faço meu cartão de usuário Solumedi?',
          answer: 'Como faço meu cartão de usuário Solumedi?',
        },
        {
          question: 'Preciso pagar mensalidade?',
          answer: 'Preciso pagar mensalidade?',
        },
        {
          question: 'Tenho prioridade nas consultas por ter o cartão SoluMedi?',
          answer: 'Tenho prioridade nas consultas por ter o cartão SoluMedi?',
        },
      ],
    },
    {
      title: 'Agendamento de consultas e exames',
      questions: [
        {
          question: 'Como agendo uma consulta, exame ou odontologia?',
          answer: 'Como agendo uma consulta, exame ou odontologia?',
        },
        {
          question: 'Posso realizar o agendamento por telefone ou whatsapp?',
          answer: 'Posso realizar o agendamento por telefone ou whatsapp?',
        },
        {
          question: 'Como obtenho informações sobre valores e especialidades?',
          answer: 'Como obtenho informações sobre valores e especialidades?',
        },
        {
          question: 'Como eu realizo o pagamento?',
          answer: 'Como eu realizo o pagamento?',
        },
        {
          question:
            'Preciso da nota fiscal referente ao agendamento, quando ela será emitida?',
          answer:
            'Preciso da nota fiscal referente ao agendamento, quando ela será emitida?',
        },
        {
          question:
            'Caso não consiga comparecer à consulta ou exame, que já foi pago, como proceder?',
          answer:
            'Caso não consiga comparecer à consulta ou exame, que já foi pago, como proceder?',
        },
        {
          question:
            'Como proceder em caso de extravio do voucher? Como faço para obter uma segunda via?',
          answer:
            'Como proceder em caso de extravio do voucher? Como faço para obter uma segunda via?',
        },
        {
          question:
            'Quais são as regras em caso de desistência, cancelamento e reembolso de valores?',
          answer:
            'Quais são as regras em caso de desistência, cancelamento e reembolso de valores?',
        },
      ],
    },
  ]

  return (
    <>
      <Header />

      <section
        id="faqSection"
        className="max-w-[892px] mx-auto w-full mt-[120px]"
      >
        <div className="flex flex-col items-center gap-y-6">
          <Heading variant="h1">Dúvidas frequentes</Heading>

          <Paragraph className="text-blue500" size="md">
            Tudo o que você precisa saber, em um só lugar.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-y-[120px] mt-[120px] list-none">
          {sections.map(({ questions, title }) => {
            return (
              <section id={title} key={title}>
                <Heading className="text-blue500" variant="h3">
                  {title}
                </Heading>

                <Accordion.Root
                  className="w-full block list-none mt-8"
                  collapsible
                  type="single"
                >
                  {questions.map(({ answer, question }) => {
                    return (
                      <li key={answer}>
                        <Accordion.Item
                          className="py-10 w-full border-b border-blue100 group"
                          value={question}
                        >
                          <Accordion.Trigger className="w-full p-1 flex items-center gap-x-4">
                            <Heading
                              className="text-left flex flex-1"
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
            )
          })}
        </div>
      </section>

      <section className="mx-[210px] py-20" id="doubtsRemaining">
        <div className="w-full bg-blue100 h-[224px] rounded-[24px] flex items-center justify-between px-20">
          <Heading className="text-blue500" variant="h3">
            Ainda tem dúvidas?
          </Heading>

          <Button label="Fale conosco" icon={<ArrowRightIcon />} />
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
