import NextLink from 'next/link'

import { Logo } from '@/components/@solumedi-ui/atoms/Logo/Logo'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { Caption } from '@/components/@solumedi-ui/atoms/Caption/Caption'

export function HeaderUnity() {
  return (
    <header className="h-[90px] md:h-[104px] w-full flex items-center justify-between px-6 md:px-12 lg:px-[56px] bg-white lg:bg-transparent">
      <NextLink href="/">
        <Logo />
      </NextLink>

      <div className="hidden md:flex flex-col items-end">
        <Paragraph size="sm" className="text-blue500">
          Unidade franqueada
        </Paragraph>
        <Paragraph size="sm">Curitiba - Augusta</Paragraph>
      </div>

      <div className="flex md:hidden flex-col items-end">
        <Caption className="text-blue500">Unidade franqueada</Caption>
        <Caption>Curitiba - Augusta</Caption>
      </div>
    </header>
  )
}
