import React from 'react'
import money_stress_illustration from "../../assets/money_stress.svg";
import Button from '../../components/Button';

const Hero = () => {
    const statistics = [{ title: "Feautres", data: "15" }, { title: "Clients", data: "10" }, { title: "Visuals", data: "2" }];

    return (
        <div className='flex flex-col'>
            <div className='flex lg:px-40 md:px-16 space-x-24 w-full justify-between'>
                <div className='flex flex-1 flex-col justify-center items-start space-y-10'>
                    <h1 className='lg:text-6xl sm:text-3xl font-bold tracking-wider leading-relaxed text-theading'>Fix your <span className='text-primary leading-relaxed'>relationship</span> with money</h1>
                    <p className='text-xl text-tnormal'>Stop hustling yourself into a breakdown and stop wasting time by managing money poorly. Let's stop the grind, together.</p>
                    <Button primary name="Register" styles="px-7 py-3 rounded-lg font-bold" />
                </div>
                <div className='flex-1'>
                    <img src={money_stress_illustration} alt='' className='w-full h-auto' />
                </div>
            </div>
            <div className='py-8 lg:mx-40 md:mx-16 flex justify-center rounded-lg bg-hero_pattern'>
                <div className='flex justify-center divide-tlight divide-x-2 '>
                    {statistics.map(item => (
                        <div className='flex flex-col items-center px-24'>
                            <div className='text-gray-300 text-lg'>{item.title}</div>
                            <div className='text-white text-5xl'>{item.data}</div>
                        </div>
                    ))
                    }
                </div>
            </div >
        </div >
    )
}

export default Hero