'use client'

import './FacaSeuFuturo.css'
import { motion } from 'framer-motion'

export default function FacaSeuFurturo() {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                
                {/* Imagem com animação de baixo para cima */}
                <motion.div
                    className='col-md-6 AstronautaFuturo'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <img src='/Astronautas/AstronautaFuturo.png' alt="Astronauta" />
                </motion.div>

                {/* Texto com animação da direita para a esquerda */}
                <motion.div
                    className='col-md-6 Futuro'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                >
                    <h1>Decole no mercado de trabalho com a Universe Estágios!</h1>
                </motion.div>
            </div>
        </div>
    )
}
