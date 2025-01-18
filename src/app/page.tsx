import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Link } from '@/components/@solumedi-ui/atoms/Link/Link'

export default function HomePage() {
  return (
    <div className="mx-auto flex flex-col gap-y-20 items-center">
      <Link href={'#'} label="Test" icon />
      <Button label="Button" />
    </div>
  )
}
