import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Navbar = () => {
    const navItems = ['Features', 'About Us', 'Contact Us'];

    return (
        <nav className='flex justify-between items-center lg:px-40 md:px-16 py-5'>
            <div className='font-extrabold text-xl text-theading'>DE BANKE</div>
            <div className='flex space-x-6 text-theading'>
                {navItems.map(item => <Link to="/" key={item}><span className='font-semibold'>{item}</span></Link>)}
            </div>
            <Button name="Sign In" styles="font-semibold rounded-md" primary />
        </nav>

    )
}

export default Navbar