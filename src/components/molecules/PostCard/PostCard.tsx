import NextLink from 'next/link'
import { ComponentProps } from 'react'

import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { ArrowRightIcon } from '@/components/@icons/arrow-right'

export interface PostCardProps extends ComponentProps<'div'> {
  imageHref: string
  title: string
  theme: string
  href: string
}

export function PostCard({
  href,
  imageHref,
  theme,
  title,
  ...rest
}: PostCardProps) {
  return (
    <NextLink href={href}>
      <div
        className="flex flex-col w-[274px] 2xl:w-full h-[424px] 2xl:h-[460px] overflow-hidden rounded-[24px] border border-blue200 group"
        {...rest}
      >
        <div
          className="w-full h-[150px] 2xl:h-[244px] overflow-hidden bg-cover bg-no-repeat group-hover:scale-105 transition-transform duration-500"
          style={{
            backgroundImage: `url(${imageHref})`,
          }}
        />

        <div className="p-10 pt-6 flex flex-col flex-grow">
          <Paragraph size="sm">{theme}</Paragraph>
          <Paragraph size="md" className="text-blue500 block mt-2 line-clamp-4">
            {title}
          </Paragraph>

          <div className="w-full flex mt-auto justify-end">
            <IconButton icon={<ArrowRightIcon />} />
          </div>
        </div>
      </div>
    </NextLink>
  )
}
