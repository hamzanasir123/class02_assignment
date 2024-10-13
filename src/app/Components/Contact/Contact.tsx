import Link from 'next/link'
import React from 'react'


function Contact() {
    return (
        <>
        <div
        className='text-center font-mono'
        >
        <span className="text-center sm:text-7xl font-mono  font-black" id="contact">Contact Me</span>
        <br/>
        I’m always excited to connect and collaborate! Whether you have a
        project in mind,
        <br /> want to ask a question, or just want to say hello,
        <br /> feel free to reach out using any of the methods below.
        <br /> I’ll do my best to respond as soon as possible.
        <br /> Email: <span className="bg-orange-400">hk435981@gmail.com</span>
        <br /> LinkedIn:{" "}
        <Link
          href={"https://www.linkedin.com/in/hamza-nasir-bb02142b5/"}
          target="_blank"
          className="bg-orange-400 rounded-sm "
        >
          Visit
        </Link>{" "}
        <br /> Phone: <span className="bg-orange-400">03122449908</span>.
        <br/>
        <br/>
        <br/>
        </div>
        </>
    )
}

export default Contact
