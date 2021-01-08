import React from 'react'
import { Img } from '../../atoms'

const Footer = () => {
    return (
        <div className="flex justify-evenly py-20 bg-blue-50">
            <div className="flex-1 px-20">
                {/* <Img
                    src="https://mekari.com/wp-content/uploads/2019/03/logo-mekari.svg"
                    alt="Mekari"
                /> */}
                <h3 className="text-xl font-bold">PT. Ajisaka Nusa Ilmu</h3>
                <p className="text-xs mt-2">Dev: <span className="text-red-900 font-bold"><a href="tel:+628998461720">Andang Vijayanto Utomo</a></span>. All rights reserved.
                </p>
            </div>
            <div className="flex-1">
                <h3 className="font-bold">Products</h3>
                <p>About us</p>
                <p>Careers</p>
                <p>Blog</p>
            </div>
            <div className="flex-1">
                <h3 className="font-bold">Company</h3>
                <p>About us</p>
                <p>Careers</p>
                <p>Blog</p>
            </div>
            <div className="flex-1">
                <h3 className="font-bold">Stay in touch</h3>
                <p>Yogyakarta</p>
            </div>
        </div>
    )
}

export default Footer
