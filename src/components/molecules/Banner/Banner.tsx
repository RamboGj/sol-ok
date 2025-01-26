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
      className="w-full h-[550px] relative overflow-hidden rounded-[48px]"
      {...rest}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="absolute z-20 inset-x-14 bottom-14 flex items-end justify-between">
        <div className="max-w-[400px]">
          <Heading className="text-neutral100" variant="h2">
            {title}
          </Heading>

          <Paragraph className="text-neutral100 block mt-6" size="md">
            {description}
          </Paragraph>
        </div>

        <Button variant="white" label={cta} icon={<ArrowRightIcon />} />
      </div>
    </div>
  )
}
