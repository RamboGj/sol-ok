import { ArrowUpRightIcon } from '@/components/@icons/arrow-up-right'
import { Link } from '@/components/@solumedi-ui/atoms/Link/Link'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ComponentProps } from 'react'

export type FooterLinksProps = ComponentProps<'div'>
export function FooterLinks({ ...rest }: FooterLinksProps) {
  const footerLinks = [
    {
      title: 'Para pacientes',
      links: [
        {
          label: 'Especialidades',
          href: '#',
          icon: false,
        },
        {
          label: 'Exames e procedimentos',
          href: '#',
          icon: false,
        },
        {
          label: 'Cartão SoluMedi',
          href: '#',
          icon: false,
        },
      ],
    },
    {
      title: 'Para profissionais da saúde',
      links: [
        {
          label: 'Seja um parceiro',
          href: '#',
          icon: false,
        },
        {
          label: 'Acessar plataforma',
          href: '#',
          icon: true,
        },
      ],
    },
    {
      title: 'Franquia',
      links: [
        {
          label: 'Seja um franqueado',
          href: '#',
          icon: false,
        },
        {
          label: 'Central do franqueado',
          href: '#',
          icon: true,
        },
      ],
    },
    {
      title: 'A Solumedi',
      links: [
        {
          label: 'Sobre nós',
          href: '#',
          icon: false,
        },
        {
          label: 'Unidades',
          href: '#',
          icon: false,
        },
        {
          label: 'Blog',
          href: '#',
          icon: false,
        },
      ],
    },
    {
      title: 'Contato',
      links: [
        {
          label: 'Dúvidas frequentes',
          href: '#',
          icon: false,
        },
        {
          label: 'Fale conosco',
          href: '#',
          icon: false,
        },
        {
          label: 'WhatsApp',
          href: '#',
          icon: true,
        },
      ],
    },
  ]

  return (
    <section
      className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-y-20 gap-x-6 items-start"
      id="footerLinks"
      {...rest}
    >
      {footerLinks.map(({ links, title }) => {
        return (
          <div key={title}>
            <Paragraph className="text-blue500" size="md">
              {title}
            </Paragraph>
            <ul className="flex flex-col gap-y-2 mt-8">
              {links.map(({ href, icon, label }) => {
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      icon={
                        icon && <ArrowUpRightIcon className="text-blue400" />
                      }
                      label={label}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
