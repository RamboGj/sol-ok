import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ComponentProps } from 'react'

export interface BannerProps extends ComponentProps<'div'> {
  bannerImageUrl: string
  title: string
  description: string
  cta: string
}

export function Banner({
  bannerImageUrl,
  cta,
  description,
  title,
  ...rest
}: BannerProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImageUrl})`,
      }}
      className="w-full bg-center bg-cover bg-no-repeat h-[550px] relative overflow-hidden rounded-[48px]"
      {...rest}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="absolute z-20 inset-x-6 md:inset-x-14 bottom-6 md:bottom-14 flex flex-col 2xl:flex-row items-start gap-y-6 2xl:gap-0 2xl:items-end justify-between">
        <div className="max-w-[400px]">
          <Heading className="text-neutral100 hidden md:block" variant="h2">
            {title}
          </Heading>
          <Heading className="text-neutral100 md:hidden" variant="h3">
            {title}
          </Heading>

          <Paragraph className="text-neutral100 mt-6 hidden md:block" size="md">
            {description}
          </Paragraph>
          <Paragraph className="text-neutral100 block mt-6 md:hidden" size="sm">
            {description}
          </Paragraph>
        </div>

        <Button variant="white" label={cta} icon={<ArrowRightIcon />} />
      </div>
    </div>
  )
}
