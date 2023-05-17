import { ReactNode, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useKeenSlider } from 'keen-slider/react'

type ScheduledDayListProps = {
  children: ReactNode
}

export const ScheduledDateList = ({ children }: ScheduledDayListProps) => {
  const [activeSlide, setActiveSlide] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 'auto',
      spacing: activeSlide ? 8 : 0,
      // origin: 'center',
    },

    range: {
      // align: true,
    },

    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          perView: 'auto',
          spacing: activeSlide ? 8 : 0,
        },
      },
    },
  })

  useEffect(() => {
    if (instanceRef.current) {
      const sliderWidth = instanceRef.current.size
      const itemsWidthSum = instanceRef.current.slides.length * 76
      const spacingWidthSum = (instanceRef.current.slides.length - 1) * 8

      if (sliderWidth < itemsWidthSum + spacingWidthSum) {
        setActiveSlide(true)
      }

      console.log(sliderWidth < itemsWidthSum + spacingWidthSum)
    }
  }, [instanceRef])

  return (
    <div
      className={`${styles.scheduledDayList} ${
        activeSlide && styles.activeSlide
      }`}
    >
      <div
        ref={sliderRef}
        className={`${styles.slider} ${
          activeSlide && styles.activeSlide
        } keen-slider `}
      >
        {children}
      </div>
    </div>
  )
}
