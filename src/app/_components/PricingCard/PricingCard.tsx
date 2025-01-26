'use client'

import { CheckIcon } from '@/components/@icons/check'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Caption } from '@/components/@solumedi-ui/atoms/Caption/Caption'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export interface PricingProps {
  cta?: string
  highlightText?: string
  highlight?: boolean
  best?: boolean
  title: string
  price: string
  priceLabel?: string
  features?: {
    price: string
    priceLabel: string
  }[]
  subFeatures: {
    label: string
  }[]
}

;<div className="py-2 px-4 bg-green100 rounded-full absolute top-4 right-4">
  <Caption className="text-green400">Mais procurado</Caption>
</div>

export const pricingCardStyle = tv({
  slots: {
    wrapper:
      'w-full flex flex-1 flex-col gap-y-8 relative py-20 px-14 border border-blue200 rounded-[20px]',
    highligthWrapper:
      'py-2 px-4 bg-green100 rounded-full absolute top-4 right-4',
    highlightTextStyle: 'text-green400',
    titleStyle: 'text-blue500',
    subfeatureWrapper: 'flex flex-col gap-y-1',
    subfeatureItemWrapper: 'flex items-center gap-x-2',
    subfeatureIcon: 'text-blue400',
    subfeatureText: 'text-blue500',
    buttonStyle: 'w-full justify-center',
    featuresWrapper: 'flex gap-x-8',
    featureText: 'text-blue500',
    priceText: 'text-blue400',
  },
  variants: {
    best: {
      true: {
        wrapper: 'bg-blue400 border-none',
        priceText: 'text-neutral100',
        titleStyle: 'text-neutral100',
        subfeatureIcon: 'text-blue200',
        subfeatureText: 'text-neutral100',
        featureText: 'text-neutral100',
      },
      false: {},
    },
  },
})

export type PricingCardProps = ComponentProps<'div'> &
  PricingProps &
  VariantProps<typeof pricingCardStyle>

export function PricingCard({
  title,
  highlight,
  price,
  priceLabel,
  features,
  subFeatures,
  className,
  best,
  cta = 'Agendar agora',
  highlightText = 'Mais procurado',
  ...rest
}: PricingCardProps) {
  const {
    wrapper,
    buttonStyle,
    featureText,
    featuresWrapper,
    highlightTextStyle,
    highligthWrapper,
    subfeatureIcon,
    subfeatureItemWrapper,
    subfeatureText,
    subfeatureWrapper,
    priceText,
    titleStyle,
  } = pricingCardStyle({ className, best })

  return (
    <div className={wrapper({ className })} {...rest}>
      {highlight && (
        <div className={highligthWrapper()}>
          <Caption className={highlightTextStyle()}>{highlightText}</Caption>
        </div>
      )}

      <Heading variant="h3" className={titleStyle()}>
        {title}
      </Heading>

      <div>
        <Heading className={priceText()} variant="h1">
          {price}
        </Heading>
        {priceLabel && (
          <Paragraph className={priceText()} size="md">
            {priceLabel}
          </Paragraph>
        )}
      </div>

      {features && (
        <ul className={featuresWrapper()}>
          {features.map((feature, index) => (
            <li key={index}>
              <Heading variant="h4" className={featureText()}>
                {feature.price}
              </Heading>
              <Paragraph className={featureText()} size="md">
                {feature.priceLabel}
              </Paragraph>
            </li>
          ))}
        </ul>
      )}

      <ul className={subfeatureWrapper()}>
        {subFeatures.map(({ label }, index) => (
          <li key={index}>
            <div className={subfeatureItemWrapper()}>
              <CheckIcon className={subfeatureIcon()} />
              <Paragraph className={subfeatureText()} size="sm">
                {label}
              </Paragraph>
            </div>
          </li>
        ))}
      </ul>

      {cta && (
        <Button
          className={buttonStyle()}
          variant={best ? 'white' : 'blue'}
          label={cta}
        />
      )}
    </div>
  )
}
