import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

export interface BulletProps extends ComponentProps<'div'> {
  headline: string
  paragraph: string
}

export const bulletStyle = tv({
  slots: {
    wrapper: 'max-w-[268px]',
    paragraphStyle: 'block ml-[28px] text-blue500',
  },
})

export function Bullet({
  className,
  headline,
  paragraph,
  ...rest
}: BulletProps) {
  const { paragraphStyle, wrapper } = bulletStyle({ className })

  return (
    <div className={wrapper()} {...rest}>
      <Heading variant="h3">{headline}</Heading>
      <Paragraph className={paragraphStyle()} size="md">
        {paragraph}
      </Paragraph>
    </div>
  )
}
