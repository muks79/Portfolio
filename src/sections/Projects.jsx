import { useState } from "react";
import ecommerce from "../assets/e-commerce-app.png";
import drow from "../assets/drowsiness.png";
import travel from "../assets/travel-app.jpg";
import RevealOnScroll from "../Ui/RevealOnScroll";
import analyzer from "../assets/analyzer.png";
import sorting from "../assets/sorting.png";

function Projects() {
  const [projects] = useState([
    {
      image: analyzer,
      name: "Accessibility Analyzer",
      brief:
        "ClearView is a full-stack web app that analyzes HTML for accessibility issues using axe-core. It helps developers improve web accessibility and build inclusive digital experiences.",
      technologies: ["React", "Node", "Express", "axe-core", "jsdom"],
    },
    {
      image: sorting,
      name: "Sorting Visualizer",
      brief:
        "This project is designed to help you understand various sorting algorithms by visualizing them in action. It provides a clear and interactive way to see how different algorithms process data to sort it.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      image: drow,
      name: "Drowsiness Detection System",
      brief:
        "A Drowsiness Detection System is a safety-focused application designed to monitor a person's alertness, typically while driving. It detects signs of fatigue or sleepiness using techniques like eye-blink detection, yawning detection, or head movement analysis.",
      technologies: ["Python", "OpenCV", "dlib", "Pygame", "Tkinter"],
    },
    {
      image: travel,
      name: "Travel App",
      brief:
        "Scalable Dashboard App with CRUD operations manages all the bookings, users, guests and services.",
      technologies: [
        "React",
        "MongoDB",
        "Express.js",
        "Node.js",
        "TailwindCSS",
      ],
    },
  ]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900"
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] cursor-pointer rounded-xl">
                  <p className="text-gray-200">View Project</p>
                  <a
                    href="https://github.com/muks79"
                    className="flex justify-center items-center font-bold text-blue-400 transition-colors hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} Image`}
                      className="rounded-lg max-h-48 object-contain"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
