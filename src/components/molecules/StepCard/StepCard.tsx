import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { ComponentProps } from 'react'

export interface StepCardProps extends ComponentProps<'div'> {
  step: number
  description: string
}

export function StepCard({ step, description, ...rest }: StepCardProps) {
  return (
    <div
      className="p-[56px] rounded-[48px] bg-neutral100 flex flex-col gap-y-[56px]"
      {...rest}
    >
      <Heading className="text-blue200" variant="h1">
        {step}
      </Heading>
      <Heading className="text-blue500" variant="h4">
        {description}
      </Heading>
    </div>
  )
}
