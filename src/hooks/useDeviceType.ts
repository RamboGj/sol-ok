import { useState, useEffect } from 'react'

interface DeviceType {
  isMobile: boolean
  isDesktop: boolean
}

export const useDeviceType = (breakpoint: number = 1024): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>({
    isMobile: false,
    isDesktop: true,
  })

  useEffect(() => {
    // Initial check
    const checkDeviceType = () => {
      const width = window.innerWidth
      setDeviceType({
        isMobile: width < breakpoint,
        isDesktop: width >= breakpoint,
      })
    }

    // Check on mount
    checkDeviceType()

    // Add resize listener
    window.addEventListener('resize', checkDeviceType)

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkDeviceType)
    }
  }, [breakpoint])

  return deviceType
}
