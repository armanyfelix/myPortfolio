import Image from 'next/image'
import Link from 'next/link'
import resumen from '../styles/customBtn.module.css'
import me from '../public/img/me.jpeg'



function About() {
    return (
        <>
            <section id="about" className="w-full lg:px-48 min-h-screen lg:p-14 md:p-10 p-8 bg-gray-800 ">
                <div className="justify-between items-center text-center flex sm:m-2 md:m-3 lg:m-4 xl:m-5 ">
                    <h1 className="text-white lg:text-5xl md:text-5xl sm:text-3xl text-3xl items-center font-simplex font-bold">About</h1>
                    <Link href="https://drive.google.com/file/d/1o0w4x5xpnOoPM1rS1aN8FMDWoJoUzGoT/view?usp=sharing">
                        <button className={resumen.btn}>
                            <span className="font-mono">Resumen</span>
                        </button>
                    </Link>
                </div>
                <div className="xl:flex justify-center items-center mt-10">
                    <div className="xl:w-1/2 ">
                        <span className="text-xl  text-indigo-300 font-bold">Hi, i'm Armany</span>
                        <p className="text-justify lg:text-lg md:text-base text-sm text-white">
                            I like to create and design websites that improve the way we surf the Internet and make better tools that
                            help us make life easier. I started with C ++ when i was 15 years old, since then i have continued my studies
                            with different languages such as C #, Java, Python, etc. But what i like the most and what i want to do is
                            create things for the internet with javascript, html, css and many frameworks! I also like to do ui / ux
                            design.
                        </p>
                        <br />
                        <p className="text-justify lg:text-lg md:text-base text-sm text-white">
                            I have worked on some websites that i have made for some friends to gain experience
                            and improve my development skills. Right now I am looking for my first job as a developer,
                            so if you are interested in my work please contact me.
                        </p>
                        <br />
                        <p className="text-justify lg:text-lg md:text-base text-sm text-white">
                            I enjoy development and learn how to use news tecnologies.
                        </p>
                    </div>
                    <div className=" flex xl:justify-end justify-center mt-10  xl:w-1/2 ">
                        <Image width="320" height="303"
                            src={me} alt="me"
                            className=" shadow-2xl  rounded-md" />
                    </div>
                </div>
            </section>
            <section className="  md:p-10 p-4 bg-gray-800 lg:min-h-screen  justify-center items-center">
                <div className=" mt-8 lg:mx-48 md:mx-28 ">
                    <h1 className="text-3xl font-bold pb-10 text-center text-indigo-300">Technologies I'm working with recently:</h1>
                    <div className="sm:flex text-indigo-50 mx-auto  justify-between">
                        <ul className="list-none space-y-5 p-5">
                            <li className="flex items-center">
                                <Image src="/icons/javascript.svg" width="38" height="38" alt="javaScript" />
                                <span className="mx-2">JavaScript (ES6+)</span>
                            </li>
                            <li className="flex items-center">
                                <Image src="/icons/html5.svg" width="38" height="38" alt="html5" />
                                <span className="mx-2">HTML</span>
                            </li>
                            <li className="flex items-center">
                                <Image src="/icons/css3.svg" width="38" height="38" alt="css3" />
                                <span className="mx-2">CSS</span>
                            </li>
                            <li className="flex items-center">
                                <Image src="/icons/node-js.svg" width="38" height="38" alt="nodejs" />
                                <span className="mx-2">Node.js</span>
                            </li>
                        </ul>
                        <ul className="list-none space-y-5 p-5">
                            <li className="flex items-center">
                                <Image src="/icons/react.svg" width="38" height="38" alt="reactjs" />
                                <span className="mx-2">React</span>
                            </li>
                            <li className="flex items-center">
                                <Image src="/icons/next-js.svg" width="38" height="38" alt="nextjs" />
                                <span className="mx-2">Next.js</span>
                            </li>
                            <li className="flex items-center">
                                <Image src="/icons/typescript.svg" width="38" height="38" alt="TypeScript" />
                                <span className="ml-2">TypeScript</span>
                            </li>
                            <li className="flex items-center">
                                <Image src="/icons/tailwindcss.svg" width="38" height="38" alt="tailwindcss" />
                                <span className="mx-2">Tailwindcss</span>
                            </li>
                        </ul>
                        <ul className="list-none space-y-5 p-5">
                            <li className="flex items-center">
                                <Image src="/icons/mysql.svg" width="38" height="38" alt="mysql" />
                                <span className="mx-2">MySQL</span>
                            </li>
                            <li className="flex items-center">
                                <Image src="/icons/mongodb.svg" width="38" height="38" alt="mongoDB" />
                                <span className="mx-2">MongoDB</span>
                            </li>

                            <li className="flex items-center">
                                <Image src="/icons/firebase.svg" width="38" height="38" alt="firebase" />
                                <span className="mx-2">Firebase</span>
                            </li>
                            <li className="flex items-center">
                                <Image src="/icons/docker.svg" width="38" height="38" alt="docker" />
                                <span className="mx-2">Docker</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About