import * as Dialog from '@radix-ui/react-dialog'
import { DialogProps } from '@radix-ui/react-dialog'

export interface ModalProps extends DialogProps {
  onClose?: () => void
}

export function Modal({ children, ...rest }: ModalProps) {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 data-[state=open]:animate-overlayShow z-40" />
        <Dialog.Content className="fixed bottom-0 top-0 right-0 w-screen md:w-[540px] bg-neutral100 p-6 z-50 lg:p-14 focus:outline-none data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
