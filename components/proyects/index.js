import ProyectCard from "./proyectCard"
import Link from "next/link"
import React from "react"
import Repository from '../../styles/customBtn.module.css'
import Data from './Data'

function Proyects() {
    return (
        <section id="proyects" className=" w-full lg:px-48 min-h-screen lg:p-14 md:p-10 p-8 bg-gray-800">
            <div className="justify-between items-center flex sm:m-2 md:m-3 lg:m-4 xl:m-5 ">
                <h1 className="text-white lg:text-5xl md:text-5xl sm:text-3xl text-3xl items-center font-simplex font-bold">Proyects</h1>
                <Link href="https://www.github.com/armanyfelix">
                    <a className={Repository.btn}>
                        <span className="font-mono">See all</span>
                    </a>
                </Link>
            </div>
            <div className="mt-12 grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center justify-center">
                {
                    Data.map((data) => (
                        <ProyectCard
                            key={data.name}
                            name={data.name}
                            url={data.url}
                            source={data.source}
                            description={data.description}
                            image={data.image}
                            tecs={data.tecs}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Proyects;
