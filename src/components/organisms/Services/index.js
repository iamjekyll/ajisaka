import React from 'react'
import { Card } from '../../molecules'

const Services = () => {
    return (
        <div className="py-10">
            <div className="text-4xl text-center font-extrabold text-gray-900 sm:text-5xl md:text-6xl py-8">
                <h2 className="block xl:inline">Program Pelatihan</h2>
            </div>
            <div className="flex flex-wrap px-6 justify-evenly">
                <Card 
                    image="https://i2.wp.com/www.ajisaka.co/wp-content/uploads/2019/09/AHLI-K3-RUMAH-SAKIT.jpg?resize=360%2C240" 
                    title="Training" 
                    content="test"
                    link="/product"
                />
                <Card 
                    image="https://i2.wp.com/www.ajisaka.co/wp-content/uploads/2019/09/AHLI-K3-RUMAH-SAKIT.jpg?resize=360%2C240" 
                    title="Sertifikasi Kemnaker" 
                    content="test" 
                />
                <Card 
                    image="https://i2.wp.com/www.ajisaka.co/wp-content/uploads/2019/09/AHLI-K3-RUMAH-SAKIT.jpg?resize=360%2C240" 
                    title="Sertifikasi BNSP" 
                    content="test" 
                />
            </div>
        </div>
    )
}

export default Services
