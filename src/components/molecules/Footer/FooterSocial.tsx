import { FacebookIcon } from '@/components/@icons/facebook'
import { InstagramIcon } from '@/components/@icons/instagram'
import { YoutubeIcon } from '@/components/@icons/youtube'
import NextLink from 'next/link'

export function FooterSocial() {
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
  )
}
