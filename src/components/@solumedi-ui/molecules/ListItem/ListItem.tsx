import { ComponentProps, ReactNode } from 'react'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { tv, VariantProps } from 'tailwind-variants'
import { TargetIcon } from '@/components/@icons/target'
import { Caption } from '../../atoms/Caption/Caption'

export const linkListItemStyle = tv({
  slots: {
    wrapper:
      'w-full h-[77px] group flex items-center gap-x-4 px-6 hover:bg-blue100 transition-colors duration-500',
    contentWrapper: 'flex-1 flex flex-col',
    labelStyle: 'text-blue500',
    captionStyle: 'text-blue500 opacity-60',
    iconWrapper: 'text-blue400',
  },
  variants: {
    active: {
      true: {
        labelStyle: 'text-blue400',
      },
      false: {},
    },
  },
})

export interface ListItemProps
  extends ComponentProps<'div'>,
    VariantProps<typeof linkListItemStyle> {
  label: string
  caption: string
  icon?: ReactNode
}

export function ListItem({
  className,
  label,
  caption,
  active,
  icon = <TargetIcon />,
  ...rest
}: ListItemProps) {
  const { wrapper, labelStyle, contentWrapper, iconWrapper, captionStyle } =
    linkListItemStyle({
      className,
      active,
    })

  return (
    <div
      role="button"
      aria-label={`Select ${label} ${caption}`}
      className={wrapper()}
      {...rest}
    >
      <div className={iconWrapper()}>{icon}</div>
      <div className={contentWrapper()}>
        <Paragraph className={labelStyle()} size="sm">
          {label}
        </Paragraph>
        <Caption className={captionStyle()}>{caption}</Caption>
      </div>
    </div>
  )
}
