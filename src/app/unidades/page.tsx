import { ArrowRightIcon } from '@/components/@icons/arrow-right'
import { SearchIcon } from '@/components/@icons/search'
import { Button } from '@/components/@solumedi-ui/atoms/Button/Button'
import { Heading } from '@/components/@solumedi-ui/atoms/Heading/Heading'
import { Paragraph } from '@/components/@solumedi-ui/atoms/Paragraph/Paragraph'
import { Input } from '@/components/@solumedi-ui/molecules/Input/Input'
import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header/Header'
import Image from 'next/image'

export default function UnitsPage() {
  return (
    <>
      <Header />

      <section className="mx-[210px] pt-[194px]" id="findNearestUnit">
        <div className="max-w-[586px]">
          <Heading variant="h1">
            Encontre a unidade mais próxima de você
          </Heading>

          <Paragraph className="text-blue500 block mt-10" size="md">
            Nossos atendentes estão prontos para te atender em uma de nossas
            unidades, presencialmente ou via WhatsApp.
          </Paragraph>
        </div>

        <div className="relative block mt-20">
          <Image
            className="relative"
            src={'/map.png'}
            alt="Brazil map image."
            width={1502}
            height={720}
          />

          <Input
            placeholder="Localização"
            className="absolute top-8 left-8 w-fit"
            icon={<SearchIcon />}
          />
        </div>

        <div className="w-full bg-blue100 h-[224px] rounded-[24px] flex items-center justify-between px-20 my-20">
          <Heading className="text-blue500" variant="h3">
            Não encontrou uma unidade próxima?
          </Heading>

          <Button label="Fale com um atendente" icon={<ArrowRightIcon />} />
        </div>
      </section>

      <Footer.Root>
        <Footer.Logo />
        <Footer.Links />
        <Footer.Social />
        <Footer.Copyright />
      </Footer.Root>
    </>
  )
}
