import { CheckIcon } from '@/components/@icons/check'
import * as RCheckbox from '@radix-ui/react-checkbox'
import { tv } from 'tailwind-variants'

export type CheckboxProps = RCheckbox.CheckboxProps

export const checkboxStyle = tv({
  slots: {
    wrapper:
      'relative h-[24px] w-[24px] flex items-center justify-center cursor-pointer rounded-[8px] bg-transparent data-[state=unchecked]:shadow-[inset_0_0_0_1px_var(--blue200)] data-[state=unchecked]:hover:shadow-[inset_0_0_0_1px_var(--blue400)] data-[state=checked]:bg-blue400 data-[state=checked]:hover:bg-blue500 transition-all duration-500',
    indicator: 'text-neutral100',
  },
})

export function Checkbox({ className, ...rest }: CheckboxProps) {
  const { wrapper, indicator } = checkboxStyle({ className })

  return (
    <RCheckbox.Root className={wrapper()} {...rest}>
      <RCheckbox.Indicator className={indicator()}>
        <CheckIcon />
      </RCheckbox.Indicator>
    </RCheckbox.Root>
  )
}
