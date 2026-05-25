import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkedAlt} from 'react-icons/fa'

const Contact = () => {

    // const contactInfo = [
    //     {
    //         id: 1,
    //         icon: FaEnvelope,
    //         title: "Email",
    //         value: "hello@example.com",
    //         link: "mailto:hello@example.com"
    //     },

    //     {
    //         id: 2,
    //         icon: FaPhone,
    //         title: "Phone",
    //         value: "+123 456-7890",
    //         link: "tel:+11234567890"
    //     },

    //     {
    //         id: 3,
    //         icon: FaLinkedin,
    //         title: "LinkedIn",
    //         value: "linkedin.com/in/username",
    //         link: "#"
    //     },
    //     {
    //         id: 4,
    //         icon: FaMapMarkedAlt,
    //         title: "Location",
    //         value: "Delhi, India",
    //         link: "#"
    //     }
    // ]

    return (
        <section className='py-20 bg-gray-900' id='contact'>

            <div className='container mx-auto px-4 max-w-6xl'>

                {/* Heading */}
                <div className='text-center mb-12'>

                    <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-2'>
                        Let's Connect.
                    </h2>

                    <div className='w-28 h-1 bg-cyan-400 mx-auto mb-2 rounded-2xl'></div>

                </div>

                {/* Grid */}
                

                    {/* Left Side */}
                    <div>

                        <p className='text-white text-center  mb-8 leading-relaxed'>
                            I'm always open to discussing new projects,
                            creative ideas, or opportunities to be part
                            of your vision. Feel free to reach out through
                            any of the contact methods below!
                        </p>
{/* 
                        // <div className='space-y-6'>

                        //     {contactInfo.map((contact) => {

                        //         const Icon = contact.icon

                        //         return (
                        //             <a
                        //                 href={contact.link}
                        //                 key={contact.id}
                        //                 target='_blank'
                        //                 rel='noopener noreferrer'
                        //                 className='flex items-center gap-4 group'
                        //             >

                        //                 <div className='w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300'>

                        //                     <Icon
                        //                         className='text-black'
                        //                         size={18}
                        //                     />

                        //                 </div>

                        //                 <div>

                        //                     <h4 className='text-white font-medium text-sm'>
                        //                         {contact.title}
                        //                     </h4>

                        //                     <p className='text-gray-400 text-sm'>
                        //                         {contact.value}
                        //                     </p>

                        //                 </div>

                        //             </a>
                        //         )
                        //     })}

                        // </div> */}

                    

                    {/* Right Side */}
                    <div className='bg-gray-800 p-8 rounded-2xl shadow-lg  w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto' >

                        <form className='space-y-6'>

                            <div>
                                <input
                                    type='text'
                                    placeholder='Your Name'
                                    className='w-full  p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-400'
                                />
                            </div>

                            <div>
                                <input
                                    type='email'
                                    placeholder='Your Email'
                                    className='w-full p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-400'
                                />
                            </div>

                            <div>
                                <textarea
                                    rows='5'
                                    placeholder='Your Message'
                                    className='w-full p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-400'
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-cyan-500 transition-colors duration-300'
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact