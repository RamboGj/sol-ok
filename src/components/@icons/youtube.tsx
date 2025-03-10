import type { Ref, SVGProps } from 'react'
import { forwardRef } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.583 6.37299C21.354 5.36899 20.676 4.57699 19.814 4.30499C18.255 3.81799 12 3.81799 12 3.81799C12 3.81799 5.748 3.81799 4.186 4.30499C3.327 4.57299 2.649 5.36499 2.417 6.37299C2 8.19499 2 12 2 12C2 12 2 15.805 2.417 17.627C2.646 18.631 3.324 19.423 4.186 19.695C5.748 20.182 12 20.182 12 20.182C12 20.182 18.255 20.182 19.814 19.695C20.673 19.427 21.351 18.635 21.583 17.627C22 15.805 22 12 22 12C22 12 22 8.19499 21.583 6.37299Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.002 15L15.198 12L10.002 9V15Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'YoutubeIcon'

export { ForwardRef as YoutubeIcon }
