const projects = [
    {
      title: "Food Recipe Search",
      description: "Created a website with a search bar to search for food recipes.",
      technologies: ["React.js", "JavaScript"],
    },
    {
      title: "Affiliate Marketing Website",
      description: "Developed a platform that allows users to share favorite products with their audience and earn commissions.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    },
    {
      title: "School Management System",
      description: "Built a web app for efficiently managing school operations.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    },
    {
      title: "My Portfolio",
      description: "Created a personal website showcasing projects, experience, and skills.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    },
  ]
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects
  
  