'use client'

import { CheckIcon } from '@/components/@icons/check'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Caption } from '@/components/@solumedi-ui/atoms/Caption/Caption'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { useDeviceType } from '@/hooks/useDeviceType'
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

export const pricingCardStyle = tv({
  slots: {
    wrapper:
      'w-full flex flex-1 flex-col gap-y-8 relative pt-14 pb-6 lg:py-20 px-6 lg:px-14 border border-blue200 rounded-[20px]',
    highligthWrapper:
      'py-2 px-4 bg-green100 rounded-full absolute top-4 right-4',
    highlightTextStyle: 'text-green400',
    titleStyle:
      'text-[1.5rem] leading-[2rem] tracking-[-1%] lg:text-[2rem] lg:leading-[125%] lg:tracking-[-2%] text-blue500',
    subfeatureWrapper: 'flex flex-col gap-y-1',
    subfeatureItemWrapper: 'flex items-center gap-x-2',
    subfeatureIcon: 'text-blue400',
    subfeatureText: 'text-blue500',
    buttonStyle: 'w-full justify-center',
    featuresWrapper: 'flex gap-x-8',
    featureText: 'text-blue500',
    priceText:
      'text-[3rem] leading-[3.5rem] tracking-[-2%] lg:text-[4rem] lg:leading-[100%] lg:tracking-[-2%] lg:text-blue400',
    priceLabelText: 'lg:text-blue400',
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
  const { isMobile } = useDeviceType()

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
    priceLabelText,
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
          <Paragraph className={priceLabelText()} size="md">
            {priceLabel}
          </Paragraph>
        )}
      </div>

      {features && (
        <ul className={featuresWrapper()}>
          {features.map((feature, index) => (
            <li key={index}>
              <Heading
                variant="h4"
                className={featureText({
                  className:
                    'text-[1.125rem] lg:text-[1.5rem] lg:leading-[2rem] lg:tracking-[-1%]',
                })}
              >
                {feature.price}
              </Heading>
              <Paragraph
                className={featureText({
                  className: 'lg:text-[1.125rem] text-[1rem]',
                })}
                size="md"
              >
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
          size={isMobile ? 'sm' : 'md'}
          className={buttonStyle()}
          variant={best ? 'white' : 'blue'}
          label={cta}
        />
      )}
    </div>
  )
}
