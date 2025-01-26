'use client'

import { ComponentProps } from 'react'
import NextLink from 'next/link'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { tv, VariantProps } from 'tailwind-variants'

export const cardEspecialidadeStyle = tv({
  slots: {
    wrapper:
      'group relative w-[230px] h-[408px] rounded-[40px] bg-cover p-8 overflow-hidden flex flex-col z-0',
    backgroundStyle:
      'group-hover:scale-110 transition-transform duration-1000 bg-cover absolute inset-0',
    backgroundGradient:
      'absolute top-0 inset-x-0 bg-gradient-to-b from-black/50 to-transparent h-[50%] z-10',
    buttonStyle: 'flex justify-end mt-auto z-20',
    titleStyle: 'text-neutral100 z-20',
  },
  variants: {
    size: {
      default: {},
      sm: {},
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export interface CardEspecialidadeProps
  extends ComponentProps<typeof NextLink>,
    VariantProps<typeof cardEspecialidadeStyle> {
  title: string
  imageHref: string
  href: string
}

export function CardEspecialidade({
  href,
  imageHref,
  title,
  className,
  size,
}: CardEspecialidadeProps) {
  const { backgroundGradient, backgroundStyle, buttonStyle, titleStyle } =
    cardEspecialidadeStyle({ className, size })

  return (
    <NextLink
      className={
        'group relative w-[230px] h-[408px] rounded-[40px] bg-cover p-8 overflow-hidden flex flex-col z-0'
      }
      href={href}
    >
      <div
        style={{
          backgroundImage: `url("${imageHref}")`,
        }}
        className={backgroundStyle()}
      />
      <div className={backgroundGradient()} />

      <Heading variant={size === 'sm' ? 'h4' : 'h3'} className={titleStyle()}>
        {title}
      </Heading>

      <div className={buttonStyle()}>
        <IconButton icon={<ArrowRightIcon />} />
      </div>
    </NextLink>
  )
}
