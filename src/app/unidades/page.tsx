'use client'

import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { PhoneCallIcon } from '@/components/@icons/phone-call'
import { PinLocationIcon } from '@/components/@icons/pin-location'
import { SearchIcon } from '@/components/@icons/search'
import { TargetIcon } from '@/components/@icons/target'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Caption } from '@/components/@solumedi-ui/atoms/Caption/Caption'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { Input } from '@/components/@solumedi-ui/molecules/Input/Input'
import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header/Header'
import Image from 'next/image'

export default function UnitsPage() {
  const unitsMock = [
    {
      type: 'Unidade física',
      where: 'Curitiba - Bairro Alto',
      distance: '2.3 km',
      address: 'Rua Alberico Flores Bueno, 789, sala 7, Bairro Alto',
      phoneNumber: '(41) 3026-1020',
      whatsapp: '#',
      cta: 'Como chegar',
      ctaAction: () => {},
    },
    {
      type: 'Unidade digital',
      where: 'Curitiba - Bairro Alto',
      distance: null,
      address: 'Rua Alberico Flores Bueno, 789, sala 7, Bairro Alto',
      phoneNumber: '(41) 3026-1020',
      whatsapp: '#',
      cta: 'Como chegar',
      ctaAction: () => {},
    },
    {
      type: 'Unidade física',
      where: 'Curitiba - Bairro Alto',
      distance: '2.3 km',
      address: 'Rua Alberico Flores Bueno, 789, sala 7, Bairro Alto',
      phoneNumber: '(41) 3026-1020',
      whatsapp: '#',
      cta: 'Como chegar',
      ctaAction: () => {},
    },
    {
      type: 'Unidade física',
      where: 'Curitiba - Bairro Alto',
      distance: '2.3 km',
      address: 'Rua Alberico Flores Bueno, 789, sala 7, Bairro Alto',
      phoneNumber: '(41) 3026-1020',
      whatsapp: '#',
      cta: 'Como chegar',
      ctaAction: () => {},
    },
    {
      type: 'Unidade física',
      where: 'Curitiba - Bairro Alto',
      distance: '2.3 km',
      address: 'Rua Alberico Flores Bueno, 789, sala 7, Bairro Alto',
      phoneNumber: '(41) 3026-1020',
      whatsapp: '#',
      cta: 'Como chegar',
      ctaAction: () => {},
    },
  ]

  return (
    <>
      <Header />

      <section
        className="2xl:mx-[210px] pt-16 md:pt-[114px] lg:pt-[194px]"
        id="findNearestUnit"
      >
        <div className="max-w-[586px] px-6 md:px-12 2xl:px-0">
          <Heading variant="h1">
            Encontre a unidade mais próxima de você
          </Heading>

          <Paragraph className="text-blue500 block mt-10" size="md">
            Nossos atendentes estão prontos para te atender em uma de nossas
            unidades, presencialmente ou via WhatsApp.
          </Paragraph>
        </div>

        <div className="flex flex-col lg:hidden py-10 px-6 md:px-12 gap-y-3">
          <Input
            className="w-full"
            placeholder="Digite um endereço ou CEP"
            icon={<SearchIcon />}
          />

          <Button
            className="w-full justify-between"
            label="Usar minha localização"
            icon={<TargetIcon />}
          />
        </div>

        <div className="relative hidden lg:block mt-20 mx-12 2xl:mx-0">
          <Image
            src={'/map.png'}
            alt="Brazil map image."
            width={1502}
            height={720}
          />

          <Input
            placeholder="Localização"
            className="absolute top-8 left-8 w-fit"
            icon={<SearchIcon />}
          />
        </div>

        <ul className="flex flex-col lg:hidden">
          {unitsMock.map(
            (
              { address, cta, ctaAction, distance, phoneNumber, type, where },
              index,
            ) => {
              return (
                <li key={index}>
                  <div className="flex flex-col gap-y-6 px-6 py-8 md:px-12 border-b border-blue100">
                    <div className="w-full justify-between flex items-start gap-x-3">
                      <div>
                        <Heading className="text-blue500" variant="h4">
                          {type}
                        </Heading>
                        <Heading
                          className="trucate whitespace-nowrap"
                          variant="h4"
                        >
                          {where}
                        </Heading>
                      </div>

                      {distance && (
                        <div className="py-2 px-4 bg-green100 rounded-full">
                          <Caption className="text-green400 whitespace-nowrap">
                            {distance}
                          </Caption>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-y-4">
                      <div className="flex items-start gap-x-3">
                        <PinLocationIcon className="text-blue400" />
                        <Paragraph size="sm" className="text-blue500">
                          {address}
                        </Paragraph>
                      </div>
                      <div className="flex items-start gap-x-3">
                        <PhoneCallIcon className="text-blue400" />
                        <Paragraph size="sm" className="text-blue500">
                          {phoneNumber}
                        </Paragraph>
                      </div>
                    </div>

                    <div className="w-full flex gap-x-2">
                      <Button
                        className="w-full justify-center"
                        size="sm"
                        onClick={() => ctaAction()}
                        variant="light-blue"
                        label={cta}
                      />
                      <Button
                        className="w-full justify-center"
                        size="sm"
                        label={'Whatsapp'}
                      />
                    </div>
                  </div>
                </li>
              )
            },
          )}
        </ul>

        <div className="bg-blue100 h-[216px] md:h-[288px] lg:h-[224px] rounded-[24px] flex flex-col justify-center gap-y-6 lg:flex-row items-start lg:items-center lg:justify-between mx-6 md:mx-12 lg:mx-0  px-6 md:px-8 lg:px-20 my-20">
          <Heading className="hidden md:block text-blue500" variant="h3">
            Não encontrou uma unidade próxima?
          </Heading>
          <Heading
            className="text-center md:text-left md:hidden text-blue500"
            variant="h4"
          >
            Não encontrou uma unidade próxima?
          </Heading>

          <Button
            className="w-full hidden md:flex md:w-fit justify-between"
            label="Fale com um atendente"
            icon={<ArrowRightIcon />}
          />

          <Button
            size="sm"
            className="w-full md:hidden justify-between"
            label="Fale com um atendente"
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
