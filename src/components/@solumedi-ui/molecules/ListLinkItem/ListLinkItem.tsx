import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { IconButton } from '../../atoms/IconButton/IconButton'
import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { tv } from 'tailwind-variants'

export const linkListItemStyle = tv({
  slots: {
    wrapper:
      'w-full h-[80px] group flex items-center gap-x-4 border-b border-blue100 px-2',
    labelStyle: 'flex-1',
  },
})

export interface ListLinkItemProps extends ComponentProps<typeof Link> {
  label: string
  icon?: ReactNode
}

export function ListLinkItem({
  className,
  label,
  icon = <ArrowRightIcon />,
  ...rest
}: ListLinkItemProps) {
  const { wrapper, labelStyle } = linkListItemStyle({ className })

  return (
    <Link
      data-hover-text={label}
      className={wrapper({
        className:
          ' relative before:font-manrope before:text-[1.125rem] before:leading-[150%] before:text-blue400 before:font-semibold overflow-hidden before:transition-all before:duration-200 before:content-[attr(data-hover-text)] before:absolute before:opacity-0 hover:before:opacity-100 before:translate-y-[100%] hover:before:translate-y-0',
      })}
      {...rest}
    >
      <Paragraph
        className={labelStyle({
          className:
            'group-hover:translate-y-[-100%] group-hover:opacity-0 transition-all duration-200',
        })}
        size="md"
      >
        {label}
      </Paragraph>
      <IconButton icon={icon} />
    </Link>
  )
}
