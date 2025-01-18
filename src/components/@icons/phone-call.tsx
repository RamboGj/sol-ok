import type { Ref, SVGProps } from 'react'
import { forwardRef } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.131 13.869C8.96099 12.699 8.07899 11.389 7.49299 10.06C7.36999 9.77897 7.44199 9.44997 7.65899 9.23297L8.47799 8.41397C9.14899 7.74297 9.14899 6.79397 8.56299 6.20797L7.38999 5.03497C6.60899 4.25397 5.34299 4.25397 4.56199 5.03497L3.90999 5.68597C3.16899 6.42697 2.85999 7.49597 3.05999 8.55597C3.55399 11.169 5.07199 14.03 7.52099 16.479C9.96999 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.611L17.792 15.438C17.206 14.852 16.256 14.852 15.671 15.438L14.768 16.342C14.551 16.559 14.222 16.632 13.941 16.508C12.612 15.921 11.301 15.038 10.131 13.869Z" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 9V3H15" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 9L21 3" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'PhoneCallIcon'

export { ForwardRef as PhoneCallIcon }
