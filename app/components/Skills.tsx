const skills = [
    { category: "Programming Languages", items: ["Python", "C/C++", "Java", "JavaScript", "HTML", "CSS", "JSP"] },
    { category: "Frameworks/Libraries", items: ["React.js", "Numpy", "Pandas", "Matplotlib"] },
    { category: "Databases", items: ["MySQL"] },
    { category: "Tools/Platforms", items: ["Git", "GitHub", "VS Code"] },
  ]
  
  const Skills = () => {
    return (
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {skill}
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
  
  export default Skills
  
  