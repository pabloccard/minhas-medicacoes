'use client'

import * as DialogRadix from '@radix-ui/react-dialog'
import { IoCloseOutline } from 'react-icons/io5'

import styles from './styles.module.css'
import { Form } from '../Form'

export const Dialog = () => {
  return (
    <DialogRadix.Root>
      <DialogRadix.Trigger asChild className={styles.trigger}>
        <button>Agendar agora</button>
      </DialogRadix.Trigger>

      <DialogRadix.Portal>
        <DialogRadix.Overlay className={styles.overlay} />

        <DialogRadix.Content className={styles.content}>
          <DialogRadix.Title>Nova medicação</DialogRadix.Title>
          <Form />

          <DialogRadix.Close asChild className={styles.close}>
            <button className={styles.closeButton}>
              <IoCloseOutline />
            </button>
          </DialogRadix.Close>
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}
