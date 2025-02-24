import { ComponentProps, ReactNode, useRef, useState } from 'react'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { Caption } from '../../atoms/Caption/Caption'
import { tv } from 'tailwind-variants'
import { SearchIcon } from '@/components/@icons/search'
import { IconButton } from '../../atoms/IconButton/IconButton'
import { ArrowDownIcon } from '@/components/@icons/arrow-down'
import { DeleteIcon } from '@/components/@icons/delete'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { TargetIcon } from '@/components/@icons/target'
import { PinLocationIcon } from '@/components/@icons/pin-location'

export const inputStyle = tv({
  slots: {
    wrapper: 'w-full flex flex-col gap-y-2 items-start group',
    fieldWrapper:
      'w-full flex relative items-center bg-neutral100 gap-x-4 px-6 rounded-[80px] h-[64px] ring-1 ring-blue200 group-hover:ring-blue400 group-focus-within:ring-blue400 group-focus-within:ring-2 transition-shadow duration-500',
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

export interface InputDropdownProps extends ComponentProps<'input'> {
  label?: string
  hint?: string
  icon?: ReactNode
  errorMessage?: string
  options: {
    label: string
    value: string
    action?: () => void
  }[]
}

// function sanitizeSearch(val: string) {
//   return val.toLowerCase().trim()
// }

export function InputDropdown({
  label,
  hint,
  icon = <SearchIcon />,
  className,
  errorMessage,
  options,
  ...rest
}: InputDropdownProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<{ label: string; value: string }>({
    label: '',
    value: '',
  })

  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    wrapper,
    fieldWrapper,
    hintStyle,
    fieldStyle,
    labelStyle,
    iconStyle,
  } = inputStyle({
    error: !!errorMessage?.length,
  })

  function handleOpenDropdown() {
    setOpen(true)
    if (inputRef.current) {
      inputRef.current.focus() // Ensure focus stays on input
    }
  }

  function handleCloseDropdown() {
    setOpen(false)
  }

  // const filteredOptions =
  //   options.filter((opt) => sanitizeSearch(opt.label).includes(value.label)) ||
  //   []

  return (
    <div className={wrapper({ className })}>
      {label && (
        <Paragraph className={labelStyle()} size="sm">
          {label}
        </Paragraph>
      )}

      <DropdownMenu.Root open={open}>
        <DropdownMenu.Trigger disabled className="focus:outline-none" asChild>
          <div ref={dropdownRef} className={fieldWrapper()}>
            <span className={iconStyle()}>{icon}</span>
            <input
              ref={inputRef}
              value={value?.label}
              // onChange={(e) => {
              //   setValue((prev) => ({
              //     ...prev,
              //     label: e.target.value,
              //   }))
              //   handleOpenDropdown()
              // }}
              onKeyDown={(e) => console.log('e ->', e)}
              className={fieldStyle()}
              {...rest}
            />
            <IconButton
              type="button"
              onClick={() => {
                if (open) return handleCloseDropdown()
                handleOpenDropdown()
              }}
              aria-label={open ? 'Close dropdown' : 'Open dropdown'}
              icon={open ? <DeleteIcon /> : <ArrowDownIcon />}
              variant="light-blue"
            />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            tabIndex={-1}
            aria-hidden
            autoFocus={false}
            style={{
              width: dropdownRef.current?.offsetWidth,
            }}
            sideOffset={8}
            className="rounded-[32px] max-h-[296px] h-fit z-50 py-2  drop-shadow-[0_4px_40px_#2A4F7237] bg-neutral100 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn"
          >
            <div className="flex flex-col  max-h-[296px] h-fit  scrollbar-thin scrollbar-thumb-blue200 scrollbar-track-transparent overflow-y-scroll ">
              {options.map(({ label, value, action }, index) => {
                return (
                  <div
                    className="px-6 py-4 flex items-center gap-x-4 hover:bg-neutral200 transition-colors duration-300"
                    role="button"
                    onClick={() => {
                      handleCloseDropdown()
                      if (action) {
                        action()
                      } else {
                        setValue({
                          label,
                          value,
                        })
                      }
                    }}
                    key={value}
                  >
                    {index === 0 ? (
                      <TargetIcon className="text-blue400" />
                    ) : (
                      <PinLocationIcon className="text-blue400" />
                    )}
                    <Paragraph size="md" className="text-blue500">
                      {label}
                    </Paragraph>
                  </div>
                )
              })}
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      {hint && <Caption className={hintStyle()}>{hint}</Caption>}
    </div>
  )
}
