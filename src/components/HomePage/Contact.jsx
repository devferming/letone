import React from 'react'
import './styles/Contact.css'

const Contact = ( { setContactFormClose } ) => {

  const handleOpenForm = () => {
    setContactFormClose(false)
  }

  return (
    <section className='contact' id='contact'>
      <h2 className='contact__h2' data-translate-en='Contact Me' data-translate-es='Contáctame'>Contáctame</h2>
      <p className='contact__p'
        data-translate-en='I am available through multiple channels. Choose the one you prefer:'
        data-translate-es='Estoy disponible a través de múltiples canales. Elige el que prefieras:'>
        Estoy disponible a través de múltiples canales. Elige el que prefieras:
      </p>

      <article className='contact__options'>

        <a className='contact__option' href="tel:+573145872733">
          <i className='contact__option__icon icon bx bx-phone'></i>
          <span
            data-translate-en='Call' data-translate-es='LLamada'
            className='contact__option__span'>
            LLamada
          </span>
        </a>

        <a className='contact__option' onClick={handleOpenForm}>
          <i className='contact__option__icon icon bx bxl-gmail'></i>
          <span className='contact__option__span'>Correo</span>
        </a>

        <a className='contact__option' href="https://wa.me/+573145872733" target="_blank">
          <i className='contact__option__icon icon bx bxl-whatsapp'></i>
          <span className='contact__option__span'>Whatsapp</span>
        </a>

        <a className='contact__option' href="https://www.linkedin.com/in/devferming/" target="_blank">
          <i className='contact__option__icon icon bx bxl-linkedin'></i>
          <span className='contact__option__span'>LinkedIn</span>
        </a>

        <a className='contact__option' href="https://github.com/devferming" target="_blank">
          <i className='contact__option__icon icon bx bxl-github'></i>
          <span className='contact__option__span'>Github</span>
        </a>

      </article>
    </section>
  )
}

export default Contact