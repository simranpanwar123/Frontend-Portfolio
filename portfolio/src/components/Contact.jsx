import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkedAlt } from 'react-icons/fa'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        emailjs.send(
            "service_7pe1uor",
            "template_ona182f",
            formData,
           "OF4ueiIyABEoGB5qW"
        )
            .then(() => {
                alert("Message sent successfully 🚀");

                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });

            })
            .catch(() => {
                alert("Something went wrong");
            });

    };


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

                    <div className='bg-gray-800 p-8 rounded-2xl shadow-lg  w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto' >

                        <form
                            onSubmit={handleSubmit}
                            className='space-y-6'
                        >

                            <div>
                                <input
                                    type='text'
                                    placeholder='Your Name'
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full  p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-400'
                                />
                            </div>

                            <div>
                                <input
                                    type='email'
                                    placeholder='Your Email'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-400'
                                />
                            </div>

                            <div>
                                <textarea
                                    rows='5'
                                    placeholder='Your Message'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                            
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

            </div >

        </section >
    )
}

export default Contact

