import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

export const captionStyle = tv({
  base: 'font-manrope font-semibold text-blue400 leading-[150%] text-[0.875rem]',
})

export type CaptionProps = ComponentProps<'span'>

export function Caption({ className, ...rest }: CaptionProps) {
  return <span className={captionStyle({ className })} {...rest} />
}
