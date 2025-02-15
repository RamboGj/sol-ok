import { Caption } from '@/components/@solumedi-ui/atoms/Caption/Caption'
import { Link } from '@/components/@solumedi-ui/atoms/Link/Link'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { ComponentProps } from 'react'

export type FooterCopyrightProps = ComponentProps<'div'>
export function FooterCopyright({ ...rest }: FooterCopyrightProps) {
  return (
    <section className="w-full" id="footerCopyright" {...rest}>
      <div className="w-full flex flex-col xl:flex-row gap-y-6 justify-between items-start">
        <div className="flex flex-col">
          <Paragraph className="text-blue500" size="md">
            © SoluMedi, 2024
          </Paragraph>
          <Paragraph className="text-blue500" size="md">
            Todos os direitos reservados
          </Paragraph>
        </div>

        <Link
          href={'/politica-de-privacidade'}
          label="Política de privacidade"
          icon={null}
        />
      </div>

      <Caption className="text-blue500 block max-w-[760px] w-full mt-10">
        A SoluMedi não é plano de saúde e não garante a cobertura financeira de
        riscos e de custos assistenciais à saude. Você paga apenas quando usar,
        sem taxa de adesão, mensalidades ou anuidades.
      </Caption>
    </section>
  )
}
