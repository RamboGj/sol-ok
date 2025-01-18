import './link.css'

import { ComponentProps } from 'react'
import NextLink from 'next/link'

import { ArrowUpRightIcon } from '@/components/@icons/arrow-up-right'
import { Paragraph } from '../Paragraph/Paragraph'

export interface LinkProps extends ComponentProps<typeof NextLink> {
  label: string
  icon?: boolean
}

export function Link({ label, icon, ...rest }: LinkProps) {
  return (
    <NextLink className="solumedi-ui-link" data-hover-text={label} {...rest}>
      <Paragraph size="md" className="span">
        {label}
      </Paragraph>
      {icon && <ArrowUpRightIcon className="text-blue400" />}
    </NextLink>
  )
}
