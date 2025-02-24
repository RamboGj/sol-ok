'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { Logo } from '@/components/@solumedi-ui/atoms/Logo/Logo'
import NextLink from 'next/link'
import { Link } from '@/components/@solumedi-ui/atoms/Link/Link'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ArrowDownIcon } from '@/components/@icons/arrow-down'
import Image from 'next/image'
import { useState } from 'react'
import { BookExamModal } from '../BookExamModal/BookExamModal'

export function Header() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const navigationLinks = [
    {
      title: 'Para pacientes',
      links: [
        {
          label: 'Especialidades',
          href: '/especialidades',
        },
        {
          label: 'Exames e procedimentos',
          href: '/exames-e-procedimentos',
        },
        {
          label: 'Cartão SoluMedi',
          href: '/cartao-solumedi',
        },
      ],
    },
    {
      title: 'Para profissionais da saúde',
      links: [
        {
          label: 'Seja um parceiro',
          href: '/seja-um-parceiro ',
        },
        {
          label: 'Acessar plataforma',
          href: '#',
        },
      ],
    },
    {
      title: 'A SoluMedi',
      links: [
        {
          label: 'Sobre nós',
          href: '/sobre',
        },
        {
          label: 'Unidades',
          href: '/unidades',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
      ],
    },
    {
      title: 'Franquias',
      links: [
        {
          label: 'Seja um franqueado',
          href: '/seja-um-franqueado',
        },
        {
          label: 'Central do franqueado',
          href: '/central-do-franqueado',
        },
      ],
    },
    {
      title: 'Fale conosco',
      directLink: '/fale-conosco',
      links: [],
    },
  ]

  return (
    <header className="h-[104px] w-full flex items-center justify-between px-6 xl:px-[56px]">
      <NextLink href="/">
        <Logo />
      </NextLink>
      <NavigationMenu.Root className="relative z-10 hidden xl:flex">
        <NavigationMenu.List className="flex items-center gap-x-10">
          {navigationLinks.map(({ links, title, directLink }) => {
            if (directLink) {
              return (
                <Link
                  className="text-blue500 hover:text-blue400"
                  label={title}
                  key={title}
                  href={directLink}
                  icon={null}
                  size="sm"
                  colors="darker"
                />
              )
            }

            return (
              <NavigationMenu.Item className="relative" key={title}>
                <NavigationMenu.Trigger className="group select-none flex items-center gap-x-2">
                  <Paragraph
                    size="sm"
                    className="text-blue500 hover:text-blue400 duration-300 transition-colors"
                  >
                    {title}
                  </Paragraph>
                  <ArrowDownIcon
                    className="text-blue500 group-hover:text-blue400 duration-300 transition-all ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>

                {/* Individual viewport for each dropdown */}
                <div className="absolute left-0 top-full perspective-[2000px]">
                  <NavigationMenu.Content className="relative mt-2.5 rounded-[32px] drop-shadow-[0_4px_40px_#2A4F7237] bg-neutral100 overflow-hidden data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft">
                    <ul className="flex flex-col">
                      {links.map(({ href, label }) => {
                        return (
                          <NextLink
                            className="w-full py-4 px-6 text-blue500 font-manrope font-semibold leading-[150%] border-b border-blue100 whitespace-nowrap hover:bg-blue100 transition-colors duration-300"
                            key={label}
                            href={href}
                          >
                            {label}
                          </NextLink>
                        )
                      })}
                    </ul>
                  </NavigationMenu.Content>
                </div>
              </NavigationMenu.Item>
            )
          })}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <Image
        role="button"
        aria-label="Open menu"
        onClick={() => setModalOpen(true)}
        width={24}
        height={24}
        src="/menu.png"
        alt="Menu Icon"
        className="xl:hidden"
      />

      <BookExamModal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </header>
  )
}
