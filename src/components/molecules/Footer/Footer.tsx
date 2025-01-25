import { ArrowUpRightIcon } from '@/components/@icons/arrow-up-right'
import { FacebookIcon } from '@/components/@icons/facebook'
import { InstagramIcon } from '@/components/@icons/instagram'
import { YoutubeIcon } from '@/components/@icons/youtube'
import { Caption } from '@/components/@solumedi-ui/atoms/Caption/Caption'
import { Link } from '@/components/@solumedi-ui/atoms/Link/Link'
import { Logo } from '@/components/@solumedi-ui/atoms/Logo/Logo'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'

import NextLink from 'next/link'

export function Footer() {
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

  const socialLinks = [
    {
      alt: 'Facebook',
      href: '#',
      icon: (
        <FacebookIcon className="text-blue400 hover:text-blue500 transition-colors duraiton-500" />
      ),
    },
    {
      alt: 'Instagram',
      href: '#',
      icon: (
        <InstagramIcon className="text-blue400 hover:text-blue500 transition-colors duraiton-500" />
      ),
    },
    {
      alt: 'Youtube',
      href: '#',
      icon: (
        <YoutubeIcon className="text-blue400 hover:text-blue500 transition-colors duraiton-500" />
      ),
    },
  ]

  return (
    <footer className="w-full px-14 py-[120px] flex flex-col gap-y-20 items-start">
      <Logo />

      <section
        className="w-full grid grid-cols-5 gap-x-6 items-start"
        id="footerLinks"
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

      <section id="footerSocialLinks">
        <ul className="flex items-center gap-x-6">
          {socialLinks.map(({ alt, href, icon }) => {
            return (
              <li key={alt}>
                <NextLink target="_blank" aria-label={alt} href={href}>
                  {icon}
                </NextLink>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="w-full" id="footerCopyright">
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col">
            <Paragraph className="text-blue500" size="md">
              © SoluMedi, 2024
            </Paragraph>
            <Paragraph className="text-blue500" size="md">
              Todos os direitos reservados
            </Paragraph>
          </div>

          <Link
            href={'/politica-de-privacidade'}
            label="Política de privacidade"
            icon={null}
          />
        </div>

        <Caption className="text-blue500 block max-w-[760px] w-full mt-10">
          A SoluMedi não é plano de saúde e não garante a cobertura financeira
          de riscos e de custos assistenciais à saude. Você paga apenas quando
          usar, sem taxa de adesão, mensalidades ou anuidades.
        </Caption>
      </section>
    </footer>
  )
}
