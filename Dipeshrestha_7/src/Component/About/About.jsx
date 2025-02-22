import React from 'react'

function About() {
  return (
    <div className='bg-gray-100 min-h-screen p-8'>
      <div className='max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg'>
        {/* Personal Introduction */}
        <section className='mb-8'>
          <h1 className='text-4xl font-bold text-gray-800'>About Me</h1>
          <p className='mt-4 text-lg text-gray-700'>
            Hello! I'm Dipesh Shrestha, a passionate Web Developer with a love for crafting responsive, user-friendly websites. 
            My journey in web development started with a curiosity for creating things on the internet, and since then, I have honed my skills to bring ideas to life.
          </p>
        </section>

        {/* Skills Section */}
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-800'>Skills</h2>
          <p className='mt-2 text-gray-700'>
            Over the years, I've gained proficiency in several web development technologies, including:
          </p>
          <ul className='list-disc list-inside mt-4 text-gray-700'>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>PHP and MySQL</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git)</li>
          </ul>
        </section>

        {/* Hobbies and Interests */}
        <section>
          <h2 className='text-2xl font-semibold text-gray-800'>Hobbies & Interests</h2>
          <p className='mt-2 text-gray-700'>
            Outside of coding, I enjoy exploring new places, reading tech blogs, and working on personal projects that challenge my skills.
            I’m also a big fan of technology and enjoy staying updated with the latest trends in web development.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About