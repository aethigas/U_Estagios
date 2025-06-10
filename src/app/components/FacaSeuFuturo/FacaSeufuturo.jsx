'use client'

import './FacaSeuFuturo.css'
import { motion } from 'framer-motion'

export default function FacaSeuFuturo() {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                {/* Texto - */}
                <motion.div
                    className='col-12 col-md-6 order-md-2 Futuro'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                >
                    <h1>Decole no mercado de trabalho com a Universe Estágios!</h1>
                </motion.div>

                {/* Imagem */}
                <motion.div
                    className='col-12 col-md-6 order-md-1 AstronautaFuturo'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <img src='/Astronautas/AstronautaFuturo.png' alt="Astronauta" />
                </motion.div>
            </div>
        </div>
    )
}