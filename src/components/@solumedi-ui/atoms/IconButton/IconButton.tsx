import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const iconButtonStyle = tv({
  slots: {
    wrapper:
      'flex items-center w-[40px] h-[40px] hover:scale-[125%] group-hover:scale-[125%] text-neutral100 justify-center shrink-0 rounded-full transition-transform duration-500',
  },
  variants: {
    variant: {
      blue: {
        wrapper: 'bg-blue400 text-neutral100',
      },
      white: {
        wrapper: 'bg-neutral100 text-blue400',
      },
      'light-blue': {
        wrapper: 'bg-blue100 text-blue400',
      },
    },
  },
  defaultVariants: {
    variant: 'blue',
  },
})

export interface IconButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof iconButtonStyle> {
  icon: ReactNode
}

export function IconButton({ className, variant, icon }: IconButtonProps) {
  const { wrapper } = iconButtonStyle({
    className,
    variant,
  })

  return <button className={wrapper()}>{icon}</button>
}
