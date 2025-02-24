import { ArrowLeftIcon } from '@/components/@icons/arrow-left'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { IconButton } from '@/components/@solumedi-ui/atoms/IconButton/IconButton'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { Switch } from '@/components/@solumedi-ui/atoms/Switch/Switch'
import { InputDropdown } from '@/components/@solumedi-ui/molecules/InputDropdown/InputDropdown'
import { Modal, ModalProps } from '@/components/atoms/Modal/Modal'
import * as Dialog from '@radix-ui/react-dialog'

export function BookExamModal({ open, onClose, ...rest }: ModalProps) {
  const options = [
    {
      label: 'Usar minha localização',
      value: 'usar_minha_localizacao',
      action: () => {},
    },
    {
      label: 'Curitiba',
      value: 'curitiba',
    },
    {
      label: 'Blumenau',
      value: 'blumenau',
    },
    {
      label: 'Florianópolis',
      value: 'florianopolis',
    },
    {
      label: 'Chapecó',
      value: 'chapeco',
    },
  ]

  return (
    <Modal open={open} {...rest}>
      <IconButton
        onClick={onClose}
        icon={<ArrowLeftIcon />}
        variant="light-blue"
      />
      <Dialog.Title asChild>
        <Heading variant="h4" className="text-blue500 block mt-14">
          Agende sua consulta ou exame
        </Heading>
      </Dialog.Title>

      <form className="flex flex-col">
        <div className="flex flex-col gap-y-2 mt-8">
          <InputDropdown options={options} icon={null} placeholder="Cidade" />
          <InputDropdown
            options={options}
            icon={null}
            placeholder="Especialidade ou exame"
          />

          <div className="flex items-center gap-x-3 mt-2 lg:mt-0">
            <Switch />
            <Paragraph security="sm" className="text-blue500">
              Não sei qual especialidade preciso
            </Paragraph>
          </div>
        </div>

        <Button className="w-full justify-center flex mt-8" label="Próximo" />
      </form>
    </Modal>
  )
}
