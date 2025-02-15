import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const stepCardStyles = tv({
  slots: {
    wrapper:
      'p-8 2xl:p-[56px] rounded-[48px] bg-neutral100 flex flex-col gap-y-[56px]',
    title: 'text-blue200',
    descriptionStyle: 'text-blue500',
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

export interface StepCardProps
  extends ComponentProps<'div'>,
    VariantProps<typeof stepCardStyles> {
  step: number
  description: string
}

export function StepCard({
  step,
  description,
  className,
  size = 'default',
  ...rest
}: StepCardProps) {
  const { descriptionStyle, title, wrapper } = stepCardStyles({ className })

  return (
    <div className={wrapper({ className })} {...rest}>
      <Heading className={title()} variant={size === 'sm' ? 'h2' : 'h1'}>
        {step}
      </Heading>
      {size === 'sm' ? (
        <Paragraph className={descriptionStyle()} size="sm">
          {description}
        </Paragraph>
      ) : (
        <Heading className={descriptionStyle()} variant="h4">
          {description}
        </Heading>
      )}
    </div>
  )
}
