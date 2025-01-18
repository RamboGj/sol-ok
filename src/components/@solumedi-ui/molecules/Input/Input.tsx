import { ComponentProps, ReactNode } from 'react'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { Caption } from '../../atoms/Caption/Caption'
import { tv } from 'tailwind-variants'
import { SearchIcon } from '@/components/@icons/search'

export const inputStyle = tv({
  slots: {
    wrapper: 'w-full flex flex-col gap-y-2 items-start group',
    fieldWrapper:
      'flex items-center gap-x-4 px-6 rounded-[80px] h-[64px] ring-1 ring-blue200 group-hover:ring-blue400 group-focus-within:ring-blue400 group-focus-within:ring-2 transition-shadow duration-500',
    fieldStyle:
      'flex-1 focus:outline-none text-blue500 font-semibold placeholder:text-blue400 placeholder:font-semibold font-manrope',
    labelStyle: 'text-blue400',
    hintStyle: 'text-blue500 opacity-60',
    iconStyle: 'text-blue400',
  },
  variants: {
    error: {
      true: {
        hintStyle: 'text-error400 opacity-100',
        fieldWrapper: 'ring-error400',
      },
      false: {},
    },
  },
})

export interface InputProps extends ComponentProps<'input'> {
  label?: string
  hint?: string
  icon?: ReactNode
  errorMessage?: string
}

export function Input({
  label,
  hint,
  icon = <SearchIcon />,
  className,
  errorMessage,
  ...rest
}: InputProps) {
  const {
    wrapper,
    fieldWrapper,
    hintStyle,
    fieldStyle,
    labelStyle,
    iconStyle,
  } = inputStyle({
    className,
    error: !!errorMessage?.length,
  })

  return (
    <div className={wrapper()}>
      {label && (
        <Paragraph className={labelStyle()} size="sm">
          {label}
        </Paragraph>
      )}

      <div className={fieldWrapper()}>
        <span className={iconStyle()}>{icon}</span>
        <input className={fieldStyle()} {...rest} />
      </div>

      {hint && <Caption className={hintStyle()}>{hint}</Caption>}
    </div>
  )
}
