import React from 'react'
import LayoutEN from "../components/en/LayoutEN"
import monathem from '../images/projects/monathem.png'
import khodarwabahar from '../images/projects/khodarwabahar.png'
import binothaymeen from '../images/projects/binothaymeen.png'
import erteqaa from '../images/projects/erteqaa.png'
import mastorahbr from '../images/projects/mastorahbr.png'
import konasha from '../images/projects/konasha.png'
import NSPROJECT from '../images/projects/NSPROJECT.png'
import carplus from '../images/projects/carplus.png'
import ProjectEN from '../components/en/ProjectEN'

export default function projects() {
    return (
        <LayoutEN>
            <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 pt-36 md:pt-0 md:h-14">
                Projects
            </div>
            <ProjectEN title="Al-Mastorah Bir charity" desc="Added a store to website, which includes a payment gateway which supports Apple pay, mada, Visa" link="http://mastorahbr.org.sa/shop/ " image={mastorahbr} />
            <ProjectEN title="Car plus" desc='Luxurios car renting landing page,Uses google analytics to provide user statistics' link="https://www.carplus-sa.com" image={carplus} />
            <ProjectEN title="Al-Monathem" desc="a task managment website that allows you to easily manage your tasks and add due dates" link="https://monathem.herokuapp.com" image={monathem} />
            <ProjectEN title="Bin othaymeen Halqah" desc="A website to track student progress, two dashboards, one for student and one for teacher" link="https://khodarwabahar.com/" image={binothaymeen}  isPrivate ="true"/>
            <ProjectEN title="Khodar Wa Bahar" desc="A website to sell fruits and vegetables and spices, with the ability for cash on delivery (Not finished)" link="https://khodarwabahar.com/" image={khodarwabahar}/>
            <ProjectEN title="Erteqaa contracting" desc="A contracting company website" link="http://erteqaa.co/en/home-2/" image={erteqaa} />
            <ProjectEN title="Konasha UI" desc="UI design for konasha mobile app" link="#" image={konasha} isPrivate="true" />
            <ProjectEN title="District center project" desc="Low fidelity UI design for District center project " link="#" image={NSPROJECT} isPrivate="true" />

        </LayoutEN>
    )
}
