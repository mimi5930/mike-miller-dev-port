import styles from './styles/contact.module.css'
import {
  FaUserCircle,
  FaRegComment,
  FaTimesCircle,
  FaSpinner
} from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type ContactFormSchema, contactFormSchema } from '../utils/schema'
import { useRef, useState } from 'react'
import { Dialogue } from '../components'

export default function Contact() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [success, setSuccess] = useState<boolean>(false)

  function toggleDialogue() {
    if (!dialogRef.current) {
      return
    }
    dialogRef.current.hasAttribute('open')
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  const handleDialogue = (success: boolean, error: boolean = false) => {
    if (success) {
      setSuccess(true)
      toggleDialogue()
      reset()
    } else if (error) {
      setSuccess(false)
      console.log(error)
      toggleDialogue()
    } else {
      setSuccess(false)
      toggleDialogue()
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormSchema>({ resolver: zodResolver(contactFormSchema) })

  const onSubmit: SubmitHandler<ContactFormSchema> = async data => {
    try {
      const response: Response = await fetch(
        'https://formsubmit.co/ajax/mikej.miller440@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      if (!response.ok) {
        handleDialogue(false)
      } else {
        handleDialogue(true)
      }
    } catch (error) {
      handleDialogue(false, true)
    }
  }

  return (
    <div className={styles.container} id="contact">
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.pageTitle}>Contact Mike</h1>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            defaultValue=""
            {...register('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
            placeholder={errors.name ? errors.name?.message : 'Your name'}
          />
          {!errors.name ? (
            <FaUserCircle className={styles.inputIcon} />
          ) : (
            <FaTimesCircle
              className={`${styles.inputIcon} ${styles.errorIcon}`}
            />
          )}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            defaultValue=""
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            placeholder={errors.email ? errors.email?.message : 'Your email'}
          />
          {!errors.email ? (
            <MdAlternateEmail className={styles.inputIcon} />
          ) : (
            <FaTimesCircle
              className={`${styles.inputIcon} ${styles.errorIcon}`}
            />
          )}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="message">Message or Question</label>
          <textarea
            {...register('message')}
            rows={4}
            aria-invalid={errors.message ? 'true' : 'false'}
            placeholder={
              errors.message ? errors.message?.message : 'Your message'
            }
          />
          {!errors.message ? (
            <FaRegComment className={styles.inputIcon} />
          ) : (
            <FaTimesCircle
              className={`${styles.inputIcon} ${styles.errorIcon}`}
            />
          )}
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <FaSpinner className={styles.loadingSpinner} />
          ) : (
            'Submit'
          )}
        </button>
      </form>
      <Dialogue
        // success={false} // Test
        success={success}
        ref={dialogRef}
        toggleDialogue={toggleDialogue}
      />
      {/* <button onClick={toggleDialogue}>Test dialog</button> // Test */}
    </div>
  )
}
