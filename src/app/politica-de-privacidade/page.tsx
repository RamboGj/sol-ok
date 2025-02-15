import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header/Header'
import { PrivacyPolicyContent } from './_components/PrivacyPolicyContent/PrivacyPolicyContent'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <PrivacyPolicyContent />

      {/* <Footer.Root>
        <Footer.Logo />
        <Footer.Links />
        <Footer.Social />
        <Footer.Copyright />
      </Footer.Root> */}
    </>
  )
}
