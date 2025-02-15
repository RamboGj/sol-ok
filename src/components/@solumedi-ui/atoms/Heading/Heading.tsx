/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const headingStyle = tv({
  base: 'font-manrope font-semibold text-blue400',
  variants: {
    variant: {
      h1: 'text-[3rem] leading-[3.5rem] md:text-[4rem] md:leading-[100%] tracking-[-2%]',
      h2: 'text-[3rem] leading-[3.5rem] tracking-[-2%]',
      h3: 'text-[2rem] leading-[125%] tracking-[-2%]',
      h4: 'text-[1.5rem] leading-[2rem] tracking-[-1%]',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
})

export interface HeadingProps
  extends ComponentProps<'h1'>,
    VariantProps<typeof headingStyle> {}

export function Heading({ className, variant, ...rest }: HeadingProps) {
  const HeadingTag: any = variant

  return (
    <HeadingTag className={headingStyle({ className, variant })} {...rest} />
  )
}
