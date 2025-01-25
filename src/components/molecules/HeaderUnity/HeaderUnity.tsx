import NextLink from 'next/link'

import { Logo } from '@/components/@solumedi-ui/atoms/Logo/Logo'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'

export function HeaderUnity() {
  return (
    <header className="h-[104px] w-full flex items-center justify-between px-[56px]">
      <NextLink href="/">
        <Logo />
      </NextLink>

      <div className="flex flex-col items-end">
        <Paragraph size="md" className="text-blue500">
          Unidade franqueada
        </Paragraph>
        <Paragraph size="md">Curitiba - Augusta</Paragraph>
      </div>
    </header>
  )
}
