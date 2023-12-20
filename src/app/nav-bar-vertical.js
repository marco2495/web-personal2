import React from 'react';
const Navbar = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-1/2 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
                <div className=''>
                    <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
                        Marco Antonio 
                    </h1>
                    <h2 className='mx-0 mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
                        Matemático y cientifico de datos
                    </h2>
                    <p className='mt-4 max-w-xs leading-normal text-justify'>
                        Especializado en la resolución de problemas matemáticos y computacionales, con un enfoque particular en programación back-end e inteligencia artificial.
                    </p>
                </div>
                <nav className="nav hidden lg:block" aria-label="In-page jump links" >
                    <ul className="mt-16 w-max" >
                        <li >
                            <a  className='group flex items-center py-3 active' href="#" >
                            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'></span>
                                Acerca de
                            </a>
                            
                        </li>
                        <li>
                            <a className='group flex items-center py-3 active' href='#'>
                                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'></span>
                                Experiencia
                            </a>
                        </li>
                        <li>
                            <a  className='group flex items-center py-3 active' href="#">
                                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'></span>
                                Proyectos
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
