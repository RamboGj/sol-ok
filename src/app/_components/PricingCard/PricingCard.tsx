'use client'

import { CheckIcon } from '@/components/@icons/check'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Caption } from '@/components/@solumedi-ui/atoms/Caption/Caption'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ComponentProps } from 'react'

export interface PricingProps {
  highlight?: boolean
  title: string
  price: string
  priceLabel: string
  features: {
    price: string
    priceLabel: string
  }[]
  subFeatures: {
    label: string
  }[]
}

export type PricingCardProps = ComponentProps<'div'> & PricingProps

export function PricingCard({
  title,
  highlight,
  price,
  priceLabel,
  features,
  subFeatures,
  ...rest
}: PricingCardProps) {
  return (
    <div
      className="w-full flex flex-1 flex-col gap-y-8 relative py-20 px-14 border border-blue200 rounded-[20px]"
      {...rest}
    >
      {highlight && (
        <div className="py-2 px-4 bg-green100 rounded-full absolute top-4 right-4">
          <Caption className="text-green400">Mais procurado</Caption>
        </div>
      )}

      <Heading variant="h3" className="text-blue500">
        {title}
      </Heading>

      <div>
        <Heading variant="h1">{price}</Heading>
        <Paragraph size="md">{priceLabel}</Paragraph>
      </div>

      <ul className="flex gap-x-8">
        {features.map((feature, index) => (
          <li key={index}>
            <Heading variant="h4" className="text-blue500">
              {feature.price}
            </Heading>
            <Paragraph className="text-blue500" size="md">
              {feature.priceLabel}
            </Paragraph>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-y-1">
        {subFeatures.map(({ label }, index) => (
          <li key={index}>
            <div className="flex items-center gap-x-2">
              <CheckIcon className="text-blue400" />
              <Paragraph className="text-blue500" size="sm">
                {label}
              </Paragraph>
            </div>
          </li>
        ))}
      </ul>

      <Button
        className="w-full justify-center"
        variant="blue"
        label="Agendar agora"
      />
    </div>
  )
}
