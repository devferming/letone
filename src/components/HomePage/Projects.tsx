import React, { useState } from 'react'
import './styles/Project.css'

const Projects = () => {

  const [cardSelected, setCardSelected] = useState(0)

  const totalCards = 9

  const objStyle = {
    transform: `translateX(calc(-${cardSelected}/${totalCards} * 100%))`,
    width: `calc(${totalCards} * 100%)`
  }

  const handleNext = () => {
    if (cardSelected + 1 <= totalCards - 1) {
      setCardSelected(cardSelected + 1)
    }
  }

  const handlePrev = () => {
    if (cardSelected - 1 >= 0) {
      setCardSelected(cv => cv - 1)
    }
  }

  return (
    <section className='projects' id='projects'>

      <h2 className='projects__h2'
        data-translate-en='Projects'
        data-translate-es='Proyectos'>
        Proyectos
      </h2>

      <div className='projects__slider'>

        <button onClick={handlePrev} className='projects__slider__btLeft'>
          <span
            className="projects__slider__btLeft--icon material-symbols-outlined">
            keyboard_double_arrow_left
          </span>
        </button>

        <div className='projects__slider__articles__container'>
          <div className='projects__slider__articles' style={objStyle}>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_9_img1.webp"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_9_img2.webp"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'
                >
                  <span
                    data-translate-en='Virtual Catalog'
                    data-translate-es='Catálogo Virtual'>
                    Catálogo Virtual
                  </span>

                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/technologies_4_react.webp"
                      alt="Logo React"
                    />

                    <img className='projects__icon'
                      src="/technologies_3_js.webp"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/technologies_2_css.webp"
                      alt="Logo CSS"
                    />

                    <img className='projects__icon'
                      src="/technologies_1_html.webp"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='Virtual catalog with menu of categories and subcategories, products are shown on individual cards, with buttons to quote or obtain more information, providing a fluid and complete browsing experience.'
                  data-translate-es='Catálogo virtual con menú de categorías y subcategorías, los productos se muestran en cards individuales, con botones para cotizar u obtener mas información, brindando una experiencia de navegación fluida y completa.'>
                  Catálogo virtual con menú de categorías y subcategorías, los productos se muestran en cards individuales, con botones para cotizar u obtener mas información, brindando una experiencia de navegación fluida y completa.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/devferming/alumiWork", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  <button
                    onClick={() => window.open("https://alumiwork.shop", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>

                </div>

              </div>

            </article>


            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_8_img1.webp"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_8_img2.webp"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  <span
                    data-translate-en='Wedding Invitation'
                    data-translate-es='Invitación a Boda'
                  >
                    Invitación a Boda
                  </span>

                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/technologies_4_react.webp"
                      alt="Logo React"
                    />

                    <img className='projects__icon'
                      src="/technologies_3_js.webp"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/technologies_2_css.webp"
                      alt="Logo CSS"
                    />

                    <img className='projects__icon'
                      src="/technologies_1_html.webp"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en="A website that uses routes to receive the guest's ID and display their personalized invitation. With navigation menu, photo gallery and integration with Pigeon Maps to show the location of the event."
                  data-translate-es='Una web que utiliza rutas para recibir el ID del invitado y mostrar su invitación personalizada. Con menú de navegación, galería de fotos e integración con Pigeon Maps para mostrar la ubicación, del evento'>
                  Una web que utiliza rutas para recibir el ID del invitado y mostrar su invitación personalizada. Con menú de navegación, galería de fotos e integración con Pigeon Maps para mostrar la ubicación, del evento.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/devferming/myWedding", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  <button
                    onClick={() => window.open("https://zenithyfermin.netlify.app/guest/1", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>

                </div>

              </div>

            </article>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_7_img1.webp"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_7_img2.webp"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  <span
                    data-translate-en='School System'
                    data-translate-es='Sistema Escolar'
                  >
                    Sistema Escolar
                  </span>
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/technologies_6_php.webp"
                      alt="Logo Node"
                    />

                    <img className='projects__icon'
                      src="/technologies_7_mysql.webp"
                      alt="Logo JS"
                    />

                    <img className='projects__icon'
                      src="/technologies_3_js.webp"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/technologies_2_css.webp"
                      alt="Logo CSS"
                    />

                    <img className='projects__icon'
                      src="/technologies_1_html.webp"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='Fullstack project for the La Inmaculada Pedagogical Center, developed in PHP and MySQL. It offers multiple levels of access and functions such as uploading notes, issuing bulletins, virtual classroom, among others. Automating 80% of the work'
                  data-translate-es='Proyecto fullstack para el Centro Pedagógico La Inmaculada, desarrollado en PHP y MySQL. Ofrece múltiples niveles de acceso y funciones como la carga de notas, emisión de boletines, aula virtual, entre otras. Automatizando el 80% del trabajo'>
                  Proyecto fullstack para el Centro Pedagógico La Inmaculada, desarrollado en PHP y MySQL. Ofrece múltiples niveles de acceso y funciones como la carga de notas, emisión de boletines, aula virtual, entre otras. Automatizando el 80% del trabajo.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/devferming/siscpi", "_blank")}
                    className='projects__card__button'>
                    Github
                  </button>
                  <button
                    onClick={() => window.open("https://demo1.gfermin.me/modulos/login.php", "_blank")}
                    className='projects__card__button'>
                    Demo
                  </button>
                </div>

              </div>

            </article>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_2_img1.webp"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_2_img2.webp"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  <span
                    data-translate-en='ICFES Simulacrum'
                    data-translate-es='Simulacros ICFES'
                  >
                    Simulacros ICFES
                  </span>
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/technologies_6_php.webp"
                      alt="Logo Node"
                    />

                    <img className='projects__icon'
                      src="/technologies_7_mysql.webp"
                      alt="Logo JS"
                    />

                    <img className='projects__icon'
                      src="/technologies_3_js.webp"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/technologies_2_css.webp"
                      alt="Logo CSS"
                    />

                    <img className='projects__icon'
                      src="/technologies_1_html.webp"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='Fullstack project for the I.E Escuela Normal Superior de Ocaña, allows ICFES Simulations to be carried out online, with analysis of results, monitoring and statistics in real time.'
                  data-translate-es='Proyecto fullstack para la I.E Escuela Normal Superior de Ocaña, permite realizar Simulacros ICFES de forma online, con análisis de resultados, seguimiento y estadística en tiempo real.'>
                  Proyecto fullstack para la I.E Escuela Normal Superior de Ocaña, permite realizar Simulacros ICFES de forma online, con análisis de resultados, seguimiento y estadística en tiempo real.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/devferming/simulicfes", "_blank")}
                    className='projects__card__button'>
                    Github
                  </button>
                  <button
                    onClick={() => window.open("https://demo2.gfermin.me/login.php", "_blank")}
                    className='projects__card__button'>
                    Demo
                  </button>
                </div>

              </div>

            </article>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_1_img1.webp"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_1_img2.webp"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  Booking App
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/technologies_5_node.webp"
                      alt="Logo Node"
                    />
                    <img className='projects__icon'
                      src="/technologies_10_sequalize.webp"
                      alt="Logo Sequelize"
                    />
                    <img className='projects__icon'
                      src="/technologies_11_express.webp"
                      alt="Logo Express"
                    />
                    <img className='projects__icon'
                      src="/technologies_4_react.webp"
                      alt="Logo React"
                    />
                    <img className='projects__icon'
                      src="/technologies_3_js.webp"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/technologies_2_css.webp"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='A fullstack project with a functional frontend offering login, user registration, hotel reviews and a proprietary API integration. It uses technologies like Node.js, Sequelize and Express for a secure and dynamic experience.'
                  data-translate-es='Un proyecto fullstack con un frontend funcional que ofrece inicio de sesión, registro de usuarios, reseñas de hoteles y una integración API propia. Utiliza tecnologías como Node.js, Sequelize y Express para una experiencia segura y dinámica.'>
                  Un proyecto fullstack con un frontend funcional que ofrece inicio de sesión, registro de usuarios, reseñas de hoteles y una integración API propia. Utiliza tecnologías como Node.js, Sequelize y Express para una experiencia segura y dinámica.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/devferming/booking-frontend", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  <button
                    onClick={() => window.open("https://github.com/devferming/booking-backend", "_blank")}
                    className='projects__card__button'>
                    Backend
                  </button>
                  <button
                    onClick={() => window.open("https://booking-by-gfermin.netlify.app", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>
                </div>

              </div>

            </article>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_3_img1.webp"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_3_img2.webp"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  User CRUD
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/technologies_5_node.webp"
                      alt="Logo Node"
                    />
                    <img className='projects__icon'
                      src="/technologies_10_sequalize.webp"
                      alt="Logo Sequelize"
                    />
                    <img className='projects__icon'
                      src="/technologies_11_express.webp"
                      alt="Logo Express"
                    />
                    <img className='projects__icon'
                      src="/technologies_4_react.webp"
                      alt="Logo React"
                    />
                    <img className='projects__icon'
                      src="/technologies_3_js.webp"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/technologies_2_css.webp"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='A fullstack project with a frontend developed in React and its own API, which allows Create, Query, Update and Delete users in a PostgreSQL database.'
                  data-translate-es='Un proyecto fullstack con un frontend desarrollado en React y una API propia, que permite Crear, Consultar, Actualizar y Eliminar usuarios en una base de datos PostgreSQL.'>
                  Un proyecto fullstack con un frontend desarrollado en React y una API propia, que permite Crear, Consultar, Actualizar y Eliminar usuarios en una base de datos PostgreSQL.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/devferming/user-crud", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  <button
                    onClick={() => window.open("https://github.com/devferming/user-crud-api", "_blank")}
                    className='projects__card__button'>
                    Backend
                  </button>
                  <button
                    onClick={() => window.open("https://users-crud-by-gfermin.netlify.app/", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>
                </div>

              </div>

            </article>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_4_img1.webp"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_4_img2.webp"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  Pokédex
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/technologies_4_react.webp"
                      alt="Logo React"
                    />
                    <img className='projects__icon'
                      src="/technologies_3_js.webp"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/technologies_2_css.webp"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='A website that provides detailed information about each Pokémon. Through a colorful and friendly interface with search, filter, and pagination controls.'
                  data-translate-es='Una web, que proporciona información detallada de cada Pokémon. Mediante una interfaz vistosa y amigable con controles para búsqueda, filtro,  y paginación.'>
                  Una web, que proporciona información detallada de cada Pokémon. Mediante una interfaz vistosa y amigable con controles para búsqueda, filtro,  y paginación.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/devferming/pokedex", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  {/* <button className='projects__card__button'>Backend</button> */}
                  <button
                    onClick={() => window.open("https://pokedex-by-gfermin.netlify.app", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>
                </div>

              </div>

            </article>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_5_img1.webp"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_5_img2.webp"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  Rick and Morty
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/technologies_4_react.webp"
                      alt="Logo React"
                    />
                    <img className='projects__icon'
                      src="/technologies_3_js.webp"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/technologies_2_css.webp"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='A web application that immerses users in the fascinating universe of Rick and Morty, providing detailed information about the characters, episodes, locations and other key elements of the series.'
                  data-translate-es='Una aplicación web que sumerge a los usuarios en el fascinante universo de Rick and Morty, proporcionando información detallada sobre los personajes, episodios, ubicaciones y otros elementos clave de la serie.'>
                  Una aplicación web que sumerge a los usuarios en el fascinante universo de Rick and Morty, proporcionando información detallada sobre los personajes, episodios, ubicaciones y otros elementos clave de la serie.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/devferming/rickandmorty", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  {/* <button className='projects__card__button'>Backend</button> */}
                  <button
                    onClick={() => window.open("https://rickandmorty-by-gfermin.netlify.app", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>
                </div>

              </div>

            </article>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_6_img1.webp"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_6_img2.webp"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  <span
                    data-translate-en='Fortune Cookies'
                    data-translate-es='Galletas de la Fortuna'
                  >
                    Galletas de la Fortuna
                  </span>
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/technologies_4_react.webp"
                      alt="Logo React"
                    />
                    <img className='projects__icon'
                      src="/technologies_3_js.webp"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/technologies_2_css.webp"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='A digital fortune cookie app that offers inspirational quotes and reflections, which change randomly with a single click.'
                  data-translate-es='Una aplicación de galletas de la fortuna digital que ofrece frases inspiradoras y reflexiones, cambiando aleatoriamente con solo un clic.'>
                  Una aplicación de galletas de la fortuna digital que ofrece frases inspiradoras y reflexiones, cambiando aleatoriamente con solo un clic.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/devferming/fortunecookie", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  {/* <button className='projects__card__button'>Backend</button> */}
                  <button
                    onClick={() => window.open("https://fortunecookie-by-gfermin.netlify.app", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>
                </div>

              </div>

            </article>

          </div>
        </div>

        <button onClick={handleNext} className='projects__slider__btnRight'>
          <span
            className="projects__slider__btRight--icon material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </button>

      </div>

    </section>
  )
}

export default Projects