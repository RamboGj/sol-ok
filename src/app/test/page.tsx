import MultiCardCarousel from '@/components/carrousel'
import '../globals.css'
import CustomCursor from '@/components/section-cursor'

export default function Home() {
  return (
    <body>
      <button className="animated-button" data-hover-text="Hover Me">
        <span className="button-text">Hover Me</span>
      </button>

      <MultiCardCarousel />

      <CustomCursor />
    </body>
  )
}
