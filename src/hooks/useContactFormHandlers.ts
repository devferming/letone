import { useRef } from 'react'
import { closeForm, setStatus } from '../features/contactForm/contactFormSlice'
import { useSendEmail } from './useSendEmail'
import { useAppDispatch } from './useAppDispatch'

export const useContactFormHandlers = () => {
  const dispatch = useAppDispatch()
  const { sendEmail } = useSendEmail()

  const formRef = useRef<HTMLFormElement>(null)
  const feedbackRef = useRef<HTMLSpanElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const iconRef = useRef<HTMLElement>(null)

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    feedbackRef.current?.classList.remove('formStatusOff')
    feedbackRef.current?.classList.add('formStatusOn')
    buttonRef.current?.setAttribute('disabled', 'true')

    if (!formRef.current) return;
    await sendEmail(
      formRef.current,
      () => {
        iconRef.current?.classList.remove('bx-mail-send', 'bx-flashing');
        iconRef.current?.classList.add('bx-check');
        formRef.current?.reset();
      },
      () => {
        iconRef.current?.classList.remove('bx-mail-send', 'bx-flashing');
        iconRef.current?.classList.add('bx-error-circle');
        buttonRef.current?.removeAttribute('disabled');
      }
    );
    
  }

  const handleCloseForm = () => {
    dispatch(closeForm())
    dispatch(setStatus('sending'))

    feedbackRef.current?.classList.remove('formStatusOn')
    feedbackRef.current?.classList.add('formStatusOff')
    buttonRef.current?.removeAttribute('disabled')
    iconRef.current?.classList.remove('bx-check', 'bx-error-circle')
    iconRef.current?.classList.add('bx-mail-send', 'bx-flashing')
  }

  return {
    formRef,
    feedbackRef,
    buttonRef,
    iconRef,
    handleSendEmail,
    handleCloseForm
  }

}
