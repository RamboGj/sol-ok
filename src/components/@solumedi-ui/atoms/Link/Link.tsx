import './link.css'

import { ComponentProps, ReactNode } from 'react'
import NextLink from 'next/link'

import { ArrowUpRightIcon } from '@/components/@icons/arrow-up-right'
import { Paragraph } from '../Paragraph/Paragraph'
import { tv, VariantProps } from 'tailwind-variants'

export const linkStyle = tv({
  slots: {
    wrapper:
      'w-fit gap-x-2 group flex items-center relative before:font-manrope before:font-semibold before:leading-[150%] overflow-hidden before:transition-all before:duration-200 before:content-[attr(data-hover-text)] before:absolute before:opacity-0 hover:before:opacity-100 before:translate-y-[100%] hover:before:translate-y-0',
    labelStyle:
      'group-hover:translate-y-[-100%] group-hover:opacity-0 transition-all duration-200',
  },
  variants: {
    size: {
      md: {
        wrapper: 'before:text-[1.125rem]',
      },
      sm: {
        wrapper: 'before:text-[1rem]',
      },
    },
    colors: {
      default: {
        wrapper: 'before:text-blue400',
      },
      darker: {
        wrapper: 'before:text-blue500',
        labelStyle: 'text-blue500',
      },
    },
  },
  defaultVariants: {
    colors: 'default',
    size: 'md',
  },
})

export interface LinkProps
  extends ComponentProps<typeof NextLink>,
    VariantProps<typeof linkStyle> {
  label: string
  icon?: ReactNode
}

export function Link({
  label,
  className,
  size = 'md',
  icon = <ArrowUpRightIcon className="text-blue400" />,
  colors = 'default',
  ...rest
}: LinkProps) {
  const { labelStyle, wrapper } = linkStyle({ className, size, colors })

  return (
    <NextLink
      className={wrapper({ className })}
      data-hover-text={label}
      {...rest}
    >
      <Paragraph size={size} className={labelStyle()}>
        {label}
      </Paragraph>
      {icon && icon}
    </NextLink>
  )
}
