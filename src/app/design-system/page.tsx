import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Caption } from '@/components/@solumedi-ui/atoms/Caption/Caption'
import { Checkbox } from '@/components/@solumedi-ui/atoms/Checkbox/Checkbox'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Link } from '@/components/@solumedi-ui/atoms/Link/Link'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { Switch } from '@/components/@solumedi-ui/atoms/Switch/Switch'

export default function DesignSystemPage() {
  return (
    <div className="mx-auto flex flex-col gap-y-20 items-center px-20">
      <Link href={'#'} label="Test" icon />

      <section className="flex items-center gap-x-10 w-full" id="Buttons">
        <Button
          label="Button"
          size="md"
          variant="blue"
          icon={<ArrowRightIcon />}
        />
        <Button label="Button" size="sm" variant="blue" />
        <Button
          label="Button"
          size="md"
          variant="light-blue"
          icon={<ArrowRightIcon />}
        />
        <Button label="Button" size="sm" variant="light-blue" />
        <Button
          label="Button"
          size="md"
          variant="white"
          icon={<ArrowRightIcon />}
        />
        <Button label="Button" size="sm" variant="white" />
      </section>

      <section className="flex items-center gap-x-10 w-full" id="Texts">
        <Heading className="text-blue100" variant="h1">
          H1
        </Heading>
        <Heading variant="h2">H2</Heading>
        <Heading variant="h3">H3</Heading>
        <Heading variant="h4">H4</Heading>

        <Paragraph size="md">Paragraph MD</Paragraph>
        <Paragraph size="sm">Paragraph SM</Paragraph>

        <Caption>Caption</Caption>
      </section>

      <section className="flex items-center gap-x-10 w-full" id="Switch">
        <Switch checked />
        <Switch checked={false} />
      </section>
      <section className="flex items-center gap-x-10 w-full" id="Checkbox">
        <Checkbox checked />
        <Checkbox checked={false} />
      </section>
    </div>
  )
}
