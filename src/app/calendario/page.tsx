'use client'

import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Calendario() {
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
          perView: 2.2,
          spacing: 16,
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
    <div className={styles.container}>
      <div className={styles.selectedDate}>
        <strong>7</strong>
        <div>
          <span>Terça</span>
          <span>Abril | 2021</span>
        </div>
      </div>

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
          <button
            className={`${styles.scheduledDay} ${styles.active} keen-slider__slide`}
          >
            <strong>Ter</strong>
            <strong>12</strong>
          </button>
          <button className={`${styles.scheduledDay} keen-slider__slide`}>
            <strong>qua</strong>
            <strong>13</strong>
          </button>
          <button className={`${styles.scheduledDay} keen-slider__slide`}>
            <strong>qua</strong>
            <strong>13</strong>
          </button>
          <button className={`${styles.scheduledDay} keen-slider__slide`}>
            <strong>qua</strong>
            <strong>13</strong>
          </button>
          <button className={`${styles.scheduledDay} keen-slider__slide`}>
            <strong>qua</strong>
            <strong>13</strong>
          </button>
        </div>
      </div>

      <div className={styles.scheduledTimeContainer}>
        <table className={styles.scheduledDayTable}>
          <thead>
            <tr>
              <th></th>
              <th>medicamento</th>
              <th>horário</th>
              <th>status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Amoxilina</td>
              <td>22:45</td>
              <td>aguardando</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Amoxilina</td>
              <td>22:45</td>
              <td>aguardando</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Amoxilina</td>
              <td>22:45</td>
              <td>aguardando</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Amoxilina</td>
              <td>22:45</td>
              <td>aguardando</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Amoxilina</td>
              <td>22:45</td>
              <td>aguardando</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
