import { CheckIcon } from '@/components/@icons/check'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

export interface CheckListItemProps extends ComponentProps<'div'> {
  item: string
}

export const checkListItemStyle = tv({
  slots: {
    wrapper: 'flex items-center gap-x-5',
    icon: 'text-blue400',
    paragraph: 'text-blue500',
  },
})

export function CheckListItem({
  className,
  item,
  ...rest
}: CheckListItemProps) {
  const { icon, paragraph, wrapper } = checkListItemStyle({ className })

  return (
    <div className={wrapper()} {...rest}>
      <CheckIcon className={icon()} />
      <Paragraph className={paragraph()} size="md">
        {item}
      </Paragraph>
    </div>
  )
}
