import * as RSwitch from '@radix-ui/react-switch'
import { tv } from 'tailwind-variants'

export type SwitchProps = RSwitch.SwitchProps

export const switchStyle = tv({
  slots: {
    wrapper:
      'relative h-[32px] w-[48px] cursor-pointer rounded-full bg-blue200 outline-none data-[state=checked]:bg-blue400 transition-colors duration-500',
    thumb:
      'block size-[26px] translate-x-[4px] rounded-full bg-neutral100 drop-shadow-sm transition-transform duration-500 will-change-transform data-[state=checked]:translate-x-[18px]',
  },
})

export function Switch({ className, ...rest }: SwitchProps) {
  const { wrapper, thumb } = switchStyle({ className })

  return (
    <RSwitch.Root className={wrapper()} {...rest}>
      <RSwitch.Thumb className={thumb()} />
    </RSwitch.Root>
  )
}
