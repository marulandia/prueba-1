import React from 'react'

import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <p>
                fuente:{' '}
                <a
                    href="https://mindicador.cl"
                    target="_blank"
                    rel="noreferrer">
                    api.coincap.io
                </a>
            </p>
        </div>
    )
}

export default Footer
