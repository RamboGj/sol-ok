import { ComponentProps } from 'react'

export type FooterRootProps = ComponentProps<'footer'>
export function FooterRoot({ ...rest }: FooterRootProps) {
  return (
    <footer
      className="w-full px-12 xl:px-14 py-20 xl:py-[120px] flex flex-col gap-y-20 items-start"
      {...rest}
    />
  )
}
