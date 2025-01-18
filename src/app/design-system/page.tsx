import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Link } from '@/components/@solumedi-ui/atoms/Link/Link'

export default function DesignSystemPage() {
  return (
    <div className="mx-auto flex flex-col gap-y-20 items-center">
      <Link href={'#'} label="Test" icon />
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
    </div>
  )
}
