import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const buttonStyle = tv({
  slots: {
    wrapper:
      'w-fit group flex items-center rounded-[80px] relative before:font-manrope before:font-semibold before:px-4 overflow-hidden before:transition-all before:duration-200 before:content-[attr(data-hover-text)] before:absolute before:opacity-0 hover:before:opacity-100 before:translate-y-[100%] hover:before:translate-y-0',
    labelStyle:
      'leading-[150%] font-manrope font-semibold px-4 whitespace-nowrap',
    iconWrapper:
      'flex items-center text-neutral100 justify-center shrink-0 rounded-full transition-transform duration-500',
  },
  variants: {
    size: {
      md: {
        wrapper: 'px-3 h-[64px] before:text-[1.125rem]',
        labelStyle: 'text-[1.125rem]',
        iconWrapper: 'w-[40px] h-[40px] group-hover:scale-[120%]',
      },
      sm: {
        wrapper: 'px-2 h-[48px] before:text-[1rem]',
        labelStyle: 'text-[1rem]',
        iconWrapper: 'w-[32px] h-[32px] group-hover:scale-[125%]',
      },
    },
    variant: {
      blue: {
        wrapper: 'bg-blue400 before:text-neutral100',
        labelStyle: 'text-neutral100',
        iconWrapper: 'bg-blue500',
      },
      white: {
        wrapper: 'bg-neutral100 before:text-blue400',
        labelStyle: 'text-blue400',
        iconWrapper: 'bg-blue400',
      },
      'light-blue': {
        wrapper: 'bg-blue100 before:text-blue400',
        labelStyle: 'text-blue400',
        iconWrapper: 'bg-blue400',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'blue',
  },
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonStyle> {
  label: string
  icon?: ReactNode
}

export function Button({ className, variant, size, label, icon }: ButtonProps) {
  const { iconWrapper, labelStyle, wrapper } = buttonStyle({
    className,
    size,
    variant,
  })

  return (
    <button data-hover-text={label} className={wrapper({ className })}>
      <span
        className={labelStyle({
          className:
            'group-hover:translate-y-[-100%] group-hover:opacity-0 transition-all duration-200',
        })}
      >
        {label}
      </span>
      {icon && <div className={iconWrapper()}>{icon}</div>}
    </button>
  )
}
