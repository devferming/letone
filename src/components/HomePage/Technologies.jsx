import React from 'react'
import './styles/Technologies.css'

const Technologies = () => {
  return (
    <section className='technologies' id='technologies'>

      <h2 className='technologies__h2'
        data-translate-en='Technologies'
        data-translate-es='Tecnologías'>
        Tecnologías
      </h2>

      <div className='technologies__div'>
        <span className="technologies__div__icon material-symbols-outlined">
          screenshot_monitor
        </span>

        <h3 className='technologies__div__h3'>Frontend</h3>
        <ul className='technologies__div__ul'>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_1_html.webp" alt="Logo HTML" />
            <span className='technologies__div__span'>HTML</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_2_css.webp" alt="Logo CSS" />
            <span className='technologies__div__span'>CSS</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_3_js.webp" alt="Logo JavaScript" />
            <span className='technologies__div__span'>JavaScript</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_4_react.webp" alt="Logo React" />
            <span className='technologies__div__span'>React</span>
          </li>
        </ul>
      </div>

      <div className='technologies__div'>
        <span className="technologies__div__icon material-symbols-outlined">
          database
        </span>
        <h3 className='technologies__div__h3'>Backend</h3>
        <ul className='technologies__div__ul'>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_3_js.webp" alt="Logo JavaScript" />
            <span className='technologies__div__span'>JavaScript</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_5_node.webp" alt="Logo Node.js" />
            <span className='technologies__div__span'>Node.js</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_6_php.webp" alt="Logo PHP" />
            <span className='technologies__div__span'>PHP</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_7_mysql.webp" alt="Logo MySQL" />
            <span className='technologies__div__span'>MySQL</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_8_sql.webp" alt="Logo SQL" />
            <span className='technologies__div__span'>SQL</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_9_postgre.webp" alt="Logo PostgreSQL" />
            <span className='technologies__div__span'>PostgreSQL</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_10_sequalize.webp" alt="Logo Sequelize" />
            <span className='technologies__div__span'>Sequelize</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_11_express.webp" alt="Logo Express" />
            <span className='technologies__div__span'>Express</span>
          </li>
        </ul>
      </div>

      <div className='technologies__div'>
        <span className='technologies__div__icon material-symbols-outlined'>
          labs
        </span>
        <h3 className='technologies__div__h3'>
          Testing
        </h3>
        <ul className='technologies__div__ul'>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_12_jest.webp" alt="Logo Jest" />
            <span className='technologies__div__span'>Jest</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_13_supertest.webp" alt="Logo Supertest" />
            <span className='technologies__div__span'>Supertest</span>
          </li>
        </ul>
      </div>

      <div className='technologies__div'>
        <span className='technologies__div__icon material-symbols-outlined'>
          home_repair_service
        </span>
        <h3 className='technologies__div__h3'
          data-translate-en='Tools'
          data-translate-es='Herramientas'>
          Herramientas
        </h3>
        <ul className='technologies__div__ul'>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_14_git.webp" alt="Logo Git" />
            <span className='technologies__div__span'>Git</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_15_github.webp" alt="Logo Github" />
            <span className='technologies__div__span'>Github</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_16_postman.webp" alt="Logo Postman" />
            <span className='technologies__div__span'>Postman</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_17_dbdiagram.webp" alt="logo Dbdiagram" />
            <span className='technologies__div__span'>Dbdiagram</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_18_figma.webp" alt="Logo Figma" />
            <span className='technologies__div__span'>Figma</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_19_slack.webp" alt="Logo Slack" />
            <span className='technologies__div__span'>Slack</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="/technologies_20_ps.webp" alt="Logo Photoshop" />
            <span className='technologies__div__span'>Photoshop</span>
          </li>
        </ul>
      </div>

      <img className='technologies__background' src="/technologies_bg.jpg" alt="Logo Photoshop" />

    </section>
  )
}

export default Technologies