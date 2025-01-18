import './link.css'

import { ComponentProps } from 'react'
import NextLink from 'next/link'

import { ArrowUpRightIcon } from '@/components/@icons/arrow-up-right'
import { Paragraph } from '../Paragraph/Paragraph'
import { tv } from 'tailwind-variants'

export const linkStyle = tv({
  slots: {
    wrapper:
      'w-fit gap-x-2 group flex items-center relative before:font-manrope before:font-semibold before:text-blue400 before:text-[1.125rem] before:leading-[150%] overflow-hidden before:transition-all before:duration-200 before:content-[attr(data-hover-text)] before:absolute before:opacity-0 hover:before:opacity-100 before:translate-y-[100%] hover:before:translate-y-0',
    labelStyle:
      'group-hover:translate-y-[-100%] group-hover:opacity-0 transition-all duration-200',
  },
})

export interface LinkProps extends ComponentProps<typeof NextLink> {
  label: string
  icon?: boolean
}

export function Link({ label, className, icon, ...rest }: LinkProps) {
  const { labelStyle, wrapper } = linkStyle({ className })

  return (
    <NextLink className={wrapper()} data-hover-text={label} {...rest}>
      <Paragraph size="md" className={labelStyle()}>
        {label}
      </Paragraph>
      {icon && <ArrowUpRightIcon className="text-blue400" />}
    </NextLink>
  )
}
