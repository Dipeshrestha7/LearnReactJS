import React from 'react'

function Project() {
    const projects = [
        {
          title: "Project 1: E-commerce Website",
          description: "An online store with user registration, product browsing, cart, and checkout functionalities, built with HTML, CSS, JavaScript, PHP, and MySQL.",
          link: "#",
        },
        {
          title: "Project 2: Portfolio Website",
          description: "A personal portfolio website showcasing my work, skills, and contact information, developed using React and Tailwind CSS.",
          link: "#",
        },
        {
          title: "Project 3: Fintech Landing Page",
          description: "A landing page for a fintech startup, designed with modern UI principles using HTML, CSS, and JavaScript.",
          link: "#",
        }
      ];
    
      return (
        <div className='bg-gray-100 min-h-screen p-8'>
          <div className='max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg'>
            <h1 className='text-4xl font-bold text-gray-800 mb-6'>My Projects</h1>
            <p className='text-lg text-gray-700 mb-8'>
              Here are some of the projects I've worked on. Each project showcases different skills and technologies I've learned and applied.
            </p>
            
            <div className='space-y-6'>
              {projects.map((project, index) => (
                <div key={index} className='p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow'>
                  <h2 className='text-2xl font-semibold text-gray-800'>{project.title}</h2>
                  <p className='mt-2 text-gray-700'>{project.description}</p>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline mt-4 inline-block'
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    
}

export default Project