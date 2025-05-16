import React, { useRef } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useTranslation } from 'react-i18next'
import { useContactFormHandlers } from '../../hooks/useContactFormHandlers'
import './style/ContactForm.css'


const ContactForm: React.FC = () => {
  const { t } = useTranslation()
  const statusKey = useAppSelector(state => state.contactForm.statusKey)
  const formStatusMessage = t(`shared.contactForm.statusMessages.${statusKey}`)

  const {
    formRef,
    feedbackRef,
    buttonRef,
    iconRef,
    handleSendEmail,
    handleCloseForm
  } = useContactFormHandlers()

  return (
    <form ref={formRef} onSubmit={handleSendEmail} className='contactForm'>
      <span onClick={handleCloseForm} className='contactForm__x material-symbols-outlined'>
        cancel
      </span>

      <h2 className='contactForm__h2'>{t('shared.contactForm.title')}</h2>

      <label className='contactForm__label'>
        <span className='contactForm__field__name contactForm__field--required'>{t('shared.contactForm.nameFieldLabel')}</span>
        <input name='name' className='contactForm__field' type='text' required />
      </label>

      <label className='contactForm__label'>
        <span className='contactForm__field__name contactForm__field--required'>{t('shared.contactForm.emailFieldLabel')}</span>
        <input name='email' className='contactForm__field' type='email' required />
      </label>

      <label className='contactForm__label'>
        <span className='contactForm__field__name'>{t('shared.contactForm.phoneFieldLabel')}</span>
        <input name='phone' className='contactForm__field' type='tel' />
      </label>

      <label className='contactForm__label'>
        <span className='contactForm__field__name contactForm__field--required'>{t('shared.contactForm.messageFieldLabel')}</span>
        <textarea name='message' className='contactForm__textArea' required rows={5}></textarea>
      </label>

      <button ref={buttonRef} className='contactForm__btn'>
        {t('shared.contactForm.button')}
      </button>

      <span ref={feedbackRef} className='contactForm__feedback formStatusOff'>
        <i ref={iconRef} className='contactForm__feedback__icon bx bx-mail-send bx-flashing'></i>
        {formStatusMessage}
      </span>

      <div className='contactForm__icon__container'>
        <a className='contactForm__a' href='tel:+573145872733'>
          <i className='contactForm__a__icon icon bx bx-phone'></i>
        </a>
        <a className='contactForm__a' href='https://wa.me/+573145872733' target='_blank'>
          <i className='contactForm__a__icon icon bx bxl-whatsapp'></i>
        </a>
        <a className='contactForm__a' href='https://www.linkedin.com/in/devferming/' target='_blank'>
          <i className='contactForm__a__icon icon bx bxl-linkedin'></i>
        </a>
        <a className='contactForm__a' href='https://github.com/devferming' target='_blank'>
          <i className='contactForm__a__icon icon bx bxl-github'></i>
        </a>
        <p> / devferming@gmail.com</p>
      </div>
    </form>
  )
}

export default ContactForm
