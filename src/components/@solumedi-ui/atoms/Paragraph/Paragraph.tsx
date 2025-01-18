import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const paragraphStyle = tv({
  base: 'font-manrope font-semibold text-blue400 leading-[150%]',
  variants: {
    size: {
      md: 'text-[1.125rem]',
      sm: 'text-[1rem]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface ParagraphProps
  extends ComponentProps<'p'>,
    VariantProps<typeof paragraphStyle> {}

export function Paragraph({ className, size, ...rest }: ParagraphProps) {
  return <p className={paragraphStyle({ className, size })} {...rest} />
}
