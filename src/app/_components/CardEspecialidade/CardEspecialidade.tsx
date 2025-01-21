import { ComponentProps } from 'react'
import NextLink from 'next/link'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { ArrowRightIcon } from '@/components/@icons/arrow-right'

export interface CardEspecialidadeProps
  extends ComponentProps<typeof NextLink> {
  title: string
  imageHref: string
  href: string
}

export function CardEspecialidade({
  href,
  imageHref,
  title,
}: CardEspecialidadeProps) {
  return (
    <NextLink
      className="group relative w-[230px] h-[408px] rounded-[40px] bg-cover p-8 overflow-hidden flex flex-col z-0"
      href={href}
    >
      <div
        style={{
          backgroundImage: `url("${imageHref}")`,
        }}
        className={`group-hover:scale-110 transition-transform duration-1000 bg-cover absolute inset-0`}
      />
      <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/50 to-transparent h-[50%] z-10" />

      <Heading variant="h3" className="text-neutral100 z-20">
        {title}
      </Heading>

      <div className="flex justify-end mt-auto z-20">
        <IconButton icon={<ArrowRightIcon />} />
      </div>
    </NextLink>
  )
}
