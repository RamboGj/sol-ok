import NextLink from 'next/link'

import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Logo } from '@/components/@solumedi-ui/atoms/Logo/Logo'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ArrowDownIcon } from '@/components/@icons/arrow-down'

export default function HomePage() {
  return (
    <div className="w-full">
      <section className=" bg-[url('/hero.png')] bg-cover bg-center" id="hero">
        <header className="h-[104px] w-full flex items-center justify-between px-[56px]">
          <NextLink href="/">
            <Logo />
          </NextLink>
          <NavigationMenu.Root className="relative z-10 flex justify-center">
            <NavigationMenu.List className="flex items-center gap-x-10">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group flex items-center gap-x-2">
                  <Paragraph size="sm" className="text-blue500">
                    Para pacientes
                  </Paragraph>
                  <ArrowDownIcon
                    className="text-blue500 transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto"></NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group flex items-center gap-x-2">
                  <Paragraph size="sm" className="text-blue500">
                    Para profissionais da saúde
                  </Paragraph>
                  <ArrowDownIcon
                    className="text-blue500 transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
                  <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3"></ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group flex items-center gap-x-2">
                  <Paragraph size="sm" className="text-blue500">
                    A SoluMedi
                  </Paragraph>
                  <ArrowDownIcon
                    className="text-blue500 transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content></NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group flex items-center gap-x-2">
                  <Paragraph size="sm" className="text-blue500">
                    Franquias
                  </Paragraph>
                  <ArrowDownIcon
                    className="text-blue500 transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content></NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NextLink href={'#'}>
                  <Paragraph size="sm" className="text-blue500">
                    Fale conosco
                  </Paragraph>
                </NextLink>
              </NavigationMenu.Item>
            </NavigationMenu.List>

            <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
              <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
          </NavigationMenu.Root>
        </header>

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
    </div>
  )
}
