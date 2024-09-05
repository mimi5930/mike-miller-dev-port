import { forwardRef } from 'react'
import styles from './styles/dialogue.module.css'
import { SuccessIcon, ErrorIcon } from './svg'

type DialogueProps = React.HTMLAttributes<HTMLDialogElement> & {
  success: boolean
  toggleDialogue: () => void
}

// TODO: Dialogue needs to be mobile-friendly
const Dialogue = forwardRef<HTMLDialogElement, DialogueProps>(
  ({ toggleDialogue, success, ...props }, ref) => {
    const successMessage = {
      title: 'Success!',
      paragraph:
        'Thank you for reaching out! Your message has been received and Mike will be in touch with you soon.',
      buttonText: 'Continue'
    }
    const errorMessage = {
      title: 'Error!',
      paragraph:
        'There was an issue with sending your message. Please try again.',
      buttonText: 'Try Again'
    }

    return (
      <dialog className={styles.dialogue} ref={ref} {...props}>
        <div className={`${styles.dialogueWrapper} ${props.className}`}>
          {success ? <SuccessIcon /> : <ErrorIcon />}
          <h1
            className={`${
              success ? ` ${styles.successText}` : ` ${styles.errorText}`
            }`}
          >
            {success ? successMessage.title : errorMessage.title}
          </h1>
          <p>{success ? successMessage.paragraph : errorMessage.paragraph}</p>
          <button onClick={toggleDialogue}>
            {success ? successMessage.buttonText : errorMessage.buttonText}
          </button>
        </div>
      </dialog>
    )
  }
)

export default Dialogue
