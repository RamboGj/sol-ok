import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'

export function PrivacyPolicyContent() {
  const conceptsTableBody = [
    {
      term: 'Dado Pessoal',
      concept:
        'É uma informação relacionada a uma pessoa física e que seja capaz de identificar a pessoa ou tornar possível a sua identificação. São exemplos de dados pessoais que podem permitir a sua identificação: Nome, CPF, telefone, e-mail, placa do seu veículo etc.',
    },
    {
      term: 'Tratamento',
      concept:
        'É toda forma de uso que podemos fazer dos seus Dados Pessoais, incluindo, mas não se limitando às seguintes atividades: coleta, armazenamento, consulta, uso, compartilhamento, transmissão, classificação, reprodução, exclusão e avaliação. Este termo (e outros derivadas dele) não serão utilizados com letras maiúsculas neste documento.',
    },
    {
      term: 'Titular',
      concept: 'É você, a pessoa física a quem os dados pessoais se referem.',
    },
    {
      term: 'Empresa',
      concept: 'Somos nós, a Solumedi.',
    },
    {
      term: 'Política',
      concept: 'É esta Política de Privacidade.',
    },
  ]

  const dataTypesTableBody = [
    {
      reason: 'Execução do contrato',
      dataType:
        'Nome, endereço, telefone, estado civil, CPF, RG, CNH, data de nascimento, e-mail, dado cônjuge (os mesmos), serasa, profissão, filiação (nome de pai e mãe), telefones de terceiros, renda, naturalidade, nacionalidade, regime de bens, escolaridade, endereço comercial, descrição de bens',
    },
    {
      reason: 'Consentimento',
      dataType: 'Nome, endereço, telefone, CPF, RG, CNH, e-mail',
    },
  ]

  const rightsTableBody = [
    {
      reason: 'Confirmação e Acesso',
      dataType:
        'Você pode solicitar à Solumedi a confirmação sobre a existência de tratamento dos seus dados pessoais para que, em caso positivo, você possa acessá-los, inclusive por meio de solicitação de cópias dos registros que temos sobre você.',
    },
    {
      reason: 'Correção',
      dataType:
        'Você pode solicitar a correção dos seus dados pessoais caso estes estejam incompletos, inexatos ou desatualizados.',
    },
    {
      reason: 'Anonimização, bloqueio ou eliminação',
      dataType:
        'Você pode solicitar (a) a anonimização dos seus dados pessoais, de forma que eles não possam mais ser relacionados a você e, portanto, deixem de ser dados pessoais; (b) o bloqueio dos seus dados pessoais, suspendendo temporariamente a sua possibilidade de os tratarmos para certas finalidades; e (c) a eliminação dos seus dados pessoais, caso em que deveremos apagar todos os seus dados pessoais sem possibilidade de reversão.',
    },
    {
      reason: 'Portabilidade',
      dataType:
        'Você tem o direito de saber quais são as entidades públicas e privadas com as quais a Solumedi realiza uso compartilhado dos seus dados pessoais. Manteremos, no item 3 dessa Política, uma indicação das nossas relações com terceiros que podem envolver o compartilhamento de dados pessoais. Em todo caso, se você tiver dúvidas ou quiser mais detalhes, você tem o direito de nos solicitar essas informações. A depender do caso, podemos limitar as informações fornecidas a você caso a sua divulgação possa violar a propriedade intelectual ou segredo de negócios da Solumedi.',
    },
    {
      reason: 'Informação sobre o compartilhamento',
      dataType:
        'Você pode solicitar a correção dos seus dados pessoais caso estes estejam incompletos, inexatos ou desatualizados.',
    },
    {
      reason: 'Informação sobre a possibilidade de não consentir',
      dataType:
        'Você tem o direito de receber informações claras e completas sobre a possibilidade e as consequências de não fornecer consentimento, quando ele for solicitado pela Solumedi. O seu consentimento, quando necessário, deve ser livre e informado. Portanto, sempre que pedirmos seu consentimento, você será livre para negá-lo – nesses casos, é possível que alguns serviços não possam ser prestados.',
    },
    {
      reason: 'Revogação do consentimento',
      dataType:
        'Caso você tenha consentido com alguma finalidade de tratamento dos seus dados pessoais, você pode sempre optar por retirar o seu consentimento. No entanto, isso não afetará a legalidade de qualquer tratamento realizado anteriormente à revogação. Se você retirar o seu consentimento, é possível que fiquemos impossibilitados de lhe prestar certos serviços, mas iremos avisá-lo quando isso ocorrer.',
    },
    {
      reason: 'Oposição',
      dataType:
        'A lei autoriza o tratamento de Dados Pessoais mesmo sem o seu consentimento ou um contrato conosco. Nessas situações, somente trataremos seus Dados Pessoais se tivermos motivos legítimos para tanto, como, por exemplo, para histórico de atendimentos, envio de benefícios e novos serviços que você poderá se utilizar. Caso você não concorde com alguma finalidade de tratamento dos seus Dados Pessoais, você poderá apresentar oposição, solicitando a sua interrupção.',
    },
  ]

  const partners = [
    'Sistema de Gerenciamento',
    'Instituição Financeira',
    'Prefeitura de Curitiba',
    'Rede de Farmácias e Empresa Administradora de Bens e Consórcios',
    'Escritório de Contabilidade',
  ]

  const rightsWarnings = [
    'Para sua segurança, sempre que você apresentar uma requisição para exercer seus direitos, a Solumedi poderá solicitar algumas informações e/ou documentos complementares para que possamos comprovar a sua identidade, buscando impedir fraudes. Fazemos isso para garantir a segurança e a privacidade de todos.',
    'Em alguns casos, a Solumedi pode ter motivos legítimos para deixar de atender a uma solicitação de exercício de direitos. Essas situações incluem, por exemplo, casos em que uma revelação de informações específicas poderia violar direitos de propriedade intelectual ou segredos de negócio da Solumedi ou de terceiros, bem como casos em que pedidos de exclusão de dados não possam ser atendidos em razão da existência de obrigação da Solumedi de reter dados, seja para cumprir obrigações legais, regulatórias ou para possibilitar a defesa da Solumedi ou de terceiros em disputas de qualquer natureza.',
    'Ainda, algumas solicitações podem não ser respondidas de forma imediata, mas a Solumedi se compromete a responder todas as requisições em um prazo razoável e sempre em conformidade com a legislação aplicável.',
  ]

  return (
    <main className="flex flex-col max-w-[892px] mx-auto mt-[325px] mb-[120px]">
      <Heading variant="h1">Política de Privacidade</Heading>
      <Paragraph className="block mt-6 text-blue500" size="md">
        Última atualização em 17 Maio de 2022
      </Paragraph>

      <section className="block mt-[120px]">
        <Paragraph className="text-blue500" size="md">
          Nós, da SOLUMEDI FRANQUIAS E CONSULTORIA LTDA (SOLUMEDI), pessoa
          jurídica de direito privado, inscrita no CNPJ 28.187.612/0001-54, com
          sede na Rua Fagundes Varela, nº 900, Cj 04, Curitiba, Paraná, levamos
          a sua privacidade e a proteção dos seus dados a sério. Este documento
          explica como tratamos seus dados pessoais, quais são os seus direitos
          e como você pode exercê-los.
        </Paragraph>
        <br />
        <Paragraph className="text-blue500 font-extrabold" size="md">
          A finalidade do tratamento de seus dados pessoais é para que possamos
          executar o contrato, otimizar sua interação conosco, divulgar nossos
          serviços, direcionamento à unidade de saúde, análise e pesquisa de
          mercado, histórico de atendimentos e executar publicidade on line
          direcionada.
        </Paragraph>
        <br />
        <Paragraph className="text-blue500" size="md">
          A Solumedi utiliza bases legais, que podem variar de acordo com a
          finalidade da coleta, para tratar seus dados pessoais. O prazo de
          armazenamento pode mudar conforme a base legal aplicável a cada
          situação e a finalidade.
        </Paragraph>
      </section>

      <section className="w-full block mt-14" id="basicConcepts">
        <Heading className="text-blue500" variant="h3">
          1. Conceitos básicos: O que você precisa saber para compreender esta
          política?
        </Heading>

        <Paragraph className="text-blue500 block mt-14" size="md">
          A fim de descomplicar a leitura deste documento, apresentamos algumas
          definições úteis para a sua interpretação. Estes termos serão
          utilizados em letra maiúscula:
        </Paragraph>

        <table className="block mt-14">
          <thead className="flex flex-1 py-6 border-b border-blue200">
            <tr className="flex flex-1 gap-x-10">
              <th className="w-1/5">
                <Paragraph
                  className="text-blue500 font-extrabold text-start"
                  size="md"
                >
                  Termo
                </Paragraph>
              </th>
              <th className="w-4/5">
                <Paragraph
                  className="text-blue500 font-extrabold  text-start"
                  size="md"
                >
                  Conceito
                </Paragraph>
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col border-b border-blue200 divide-y divide-blue200">
            {conceptsTableBody.map(({ concept, term }) => {
              return (
                <tr key={concept + term} className="flex flex-1 gap-x-10 py-6">
                  <td className="w-1/5">
                    <Paragraph className="text-blue500 text-start" size="md">
                      {term}
                    </Paragraph>
                  </td>
                  <td className="w-4/5">
                    <Paragraph className="text-blue500  text-start" size="md">
                      {concept}
                    </Paragraph>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>

      <section className="w-full block mt-14" id="dataTypes">
        <Heading className="text-blue500" variant="h3">
          2. Que tipos de dados pessoais a empresa trata?
        </Heading>
        <Paragraph className="text-blue500 block mt-14" size="md">
          Os tipos de dados pessoais e a forma como a Empresa os coleta dependem
          de como você se relaciona com a Solumedi e por quê. Por exemplo, os
          dados pessoais coletados serão diferentes caso você seja um usuário do
          nosso site, cliente, parceiro, funcionário.
        </Paragraph>
        <br />
        <Paragraph className="text-blue500" size="md">
          Listamos abaixo algumas situações em que nós podemos tratar seus dados
          pessoais no contexto da sua relação com a Solumedi:
        </Paragraph>

        <table className="block mt-14">
          <thead className="flex flex-1 py-6 border-b border-blue200">
            <tr className="flex flex-1 gap-x-10">
              <th className="w-1/5">
                <Paragraph
                  className="text-blue500 font-extrabold text-start"
                  size="md"
                >
                  Finalidades de Tratamento
                </Paragraph>
              </th>
              <th className="w-4/5">
                <Paragraph
                  className="text-blue500 font-extrabold  text-start"
                  size="md"
                >
                  Tipos de Dados Pessoais Utilizados
                </Paragraph>
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col border-b border-blue200 divide-y divide-blue200">
            {dataTypesTableBody.map(({ dataType, reason }) => {
              return (
                <tr
                  key={dataType + reason}
                  className="flex flex-1 gap-x-10 py-6"
                >
                  <td className="w-1/5">
                    <Paragraph className="text-blue500 text-start" size="md">
                      {reason}
                    </Paragraph>
                  </td>
                  <td className="w-4/5">
                    <Paragraph className="text-blue500  text-start" size="md">
                      {dataType}
                    </Paragraph>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>

      <section className="w-full block mt-14" id="dataShared">
        <Heading className="text-blue500" variant="h3">
          3. Com quem a empresa compartilha os seus dados pessoais?
        </Heading>
        <Paragraph className="text-blue500 block mt-14" size="md">
          Nós operamos em parceria com algumas outras organizações para
          viabilizar as nossas atividades. Descrevemos aqui algumas situações em
          que podemos compartilhar Dados Pessoais:
        </Paragraph>

        <div className="block mt-14">
          <Paragraph className="text-blue500 block font-extrabold" size="md">
            Nossos Fornecedores e Parceiros
          </Paragraph>

          <br />

          <ul className="flex flex-col list-disc ml-8">
            {partners.map((partner) => {
              return (
                <li key={partner}>
                  <Paragraph className="text-blue500 block" size="md">
                    {partner}
                  </Paragraph>
                  <br />
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="w-full block mt-14" id="personalData">
        <Heading className="text-blue500" variant="h3">
          4. Quais são os seus direitos como titular de dados pessoais?
        </Heading>
        <Paragraph className="text-blue500 block mt-14" size="md">
          Os dados pessoais são seus e a lei brasileira lhe garante uma série de
          direitos relacionados a eles. Nós estamos comprometidos com o
          cumprimento desses direitos e, nessa seção, vamos explicar quais são
          esses direitos e como você pode exercê-los. Veja a seguir:
        </Paragraph>

        <table className="block mt-14">
          <thead className="flex flex-1 py-6 border-b border-blue200">
            <tr className="flex flex-1 gap-x-10">
              <th className="w-1/5">
                <Paragraph
                  className="text-blue500 font-extrabold text-start"
                  size="md"
                >
                  Seus Direitos
                </Paragraph>
              </th>
              <th className="w-4/5">
                <Paragraph
                  className="text-blue500 font-extrabold  text-start"
                  size="md"
                >
                  Explicação
                </Paragraph>
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col border-b border-blue200 divide-y divide-blue200">
            {rightsTableBody.map(({ dataType, reason }) => {
              return (
                <tr
                  key={dataType + reason}
                  className="flex flex-1 gap-x-10 py-6"
                >
                  <td className="w-1/5">
                    <Paragraph className="text-blue500 text-start" size="md">
                      {reason}
                    </Paragraph>
                  </td>
                  <td className="w-4/5">
                    <Paragraph className="text-blue500  text-start" size="md">
                      {dataType}
                    </Paragraph>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className="block  mt-14">
          <Paragraph className="text-blue500 block font-extrabold" size="md">
            Avisos Importantes
          </Paragraph>

          <br />

          <ul className="flex flex-col list-disc ml-8">
            {rightsWarnings.map((warning) => {
              return (
                <li key={warning}>
                  <Paragraph className="text-blue500" size="md">
                    {warning}
                  </Paragraph>
                  <br />
                </li>
              )
            })}
          </ul>

          <Paragraph className="text-blue500" size="md">
            Caso você tenha alguma dúvida sobre essas questões ou sobre como
            você pode exercer seus direitos, fique à vontade para entrar em
            contato conosco por meio dos canais informados ao final desta
            Política.
          </Paragraph>
        </div>
      </section>

      <section className="w-full block mt-14" id="timeDataIsStore">
        <Heading className="text-blue500" variant="h3">
          5. Por quanto tempo os dados pessoais serão armazenados?
        </Heading>
        <Paragraph className="text-blue500 block mt-14" size="md">
          A Solumedi possui uma política de retenção de dados pessoais alinhada
          com a lei aplicável. Dados pessoais são armazenados somente pelo tempo
          que forem necessários para cumprir com as finalidades para as quais
          foram coletados, salvo se houver qualquer outra razão para sua
          manutenção como, por exemplo, cumprimento de quaisquer obrigações
          legais, regulatórias, contratuais, entre outras permitidas sob a lei.
        </Paragraph>
        <br />
        <Paragraph className="text-blue500 block" size="md">
          Sempre fazemos uma análise técnica para determinar o período de
          retenção adequado para cada tipo de dado pessoal coletado,
          considerando a sua natureza, necessidade de coleta e finalidade para a
          qual ele será tratado, bem como eventuais necessidades de retenção
          para o cumprimento de obrigações ou o resguardo de direitos.
        </Paragraph>
      </section>

      <section className="w-full block mt-14" id="howSolumediProtectYourData">
        <Heading className="text-blue500" variant="h3">
          6. Como a SoluMedi protege seus dados pessoais?
        </Heading>
        <Paragraph className="text-blue500 block mt-14" size="md">
          <strong>
            Nossa responsabilidade é cuidar dos seus dados pessoais e
            utilizá-los somente para as finalidades descritas nessa Política.
          </strong>
          Para garantir a sua privacidade e a proteção dos seus dados pessoais,
          adotamos recursos tecnológicos avançados para garantir a segurança de
          todos os dados tratados pela Solumedi. Entre as medidas de segurança
          implementadas estão a implementação de controles de acesso a sistemas
          e ambientes de tratamento de dados, técnicas de criptografia e a
          instalação de barreiras contra o acesso indevido às bases de dados
          (incluindo firewalls), entre outros controles de segurança da
          informação.
        </Paragraph>

        <br />

        <Paragraph className="text-blue500 block" size="md">
          <strong>
            Nós nos esforçamos para proteger a privacidade de seus dados
            pessoais, mas infelizmente não podemos garantir total segurança.
          </strong>
          Entradas e usos não autorizados de terceiros com informações suas,
          falhas de hardware ou software que não estejam sob controle da
          Solumedi e outros fatores externos podem comprometer a segurança dos
          seus dados pessoais. Por isso, sua atuação é fundamental para a
          manutenção de um ambiente seguro para todos. Caso você identifique ou
          tome conhecimento de qualquer fator que comprometa a segurança dos
          seus dados na sua relação com a Solumedi, por favor entre em contato
          conosco por meio das informações de contato indicadas abaixo.
        </Paragraph>
      </section>

      <section
        className="w-full block mt-14"
        id="howToTalkAboutPersonalDataWithSolumedi"
      >
        <Heading className="text-blue500" variant="h3">
          7. Como falar sobre dados pessoais com a SoluMedi?
        </Heading>
        <Paragraph className="text-blue500 block mt-14" size="md">
          Se você acredita que seus dados pessoais foram tratados de maneira
          incompatível com esta Política ou com as suas escolhas enquanto
          titular dos seus dados pessoais, ou, ainda, se você tiver dúvidas,
          comentários ou sugestões relacionadas a esta Política e à forma como
          tratamos seus dados pessoais, entre em contato conosco. Nós temos um
          Encarregado que está à disposição nos seguintes endereços de contato:
        </Paragraph>
        <br />

        <Paragraph className="text-blue500 block" size="md">
          Encarregado: Eluilson B. Carvalho
        </Paragraph>
        <Paragraph className="text-blue500 block" size="md">
          E-mail para contato: eluilson@solumedi.com.br
        </Paragraph>
      </section>

      <section className="w-full block mt-14" id="changesAtPrivacyPolicy">
        <Heading className="text-blue500" variant="h3">
          8. Mudanças na política de privacidade
        </Heading>
        <Paragraph className="text-blue500 block mt-14" size="md">
          Como estamos sempre buscando melhorar os nossos serviços e a forma
          como operamos, esta Política de Privacidade pode passar por
          atualizações para refletir as melhorias realizadas. Desta forma,
          recomendamos a visita periódica desta página para que você tenha
          conhecimento sobre as modificações efetivadas.
        </Paragraph>
      </section>
    </main>
  )
}
