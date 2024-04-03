import React from "react";
import './Projects.css'

const projects = [
  { id: 1, name: "Proje 1", imageUrl: "/images/projects/Kitchen.jpg" },
  { id: 2, name: "Proje 2", imageUrl: "/images/projects/Decorative Wall Painting.jpg" },
  { id: 3, name: "Proje 3", imageUrl: "/images/projects/Fireplace.jpg" },
  { id: 4, name: "Proje 3", imageUrl: "/images/projects/Italian Decorative Wall.jpg" },
  { id: 5, name: "Proje 3", imageUrl: "/images/projects/Parquet.jpg" },
  { id: 6, name: "Proje 3", imageUrl: "/images/projects/Tiles.jpg" },
  { id: 7, name: "Proje 3", imageUrl: "/images/projects/Italian Decorative Wall Painting.jpg" },
  { id: 8, name: "Proje 3", imageUrl: "/images/projects/Stairs.jpg" },
  { id: 9, name: "Proje 3", imageUrl: "/images/projects/Paving Stone.jpeg" },
 
];

const getProjectName = (imageUrl) => {
    // Resim dosyasının adını al
    const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
    // Dosya adından ismi çıkar
    const projectName = filename.substring(0, filename.lastIndexOf('.'));
    // İlk harfi büyük yap ve boşlukları değiştir
    return projectName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  };
  

const Projects = () => {
  // Projeleri üçlü gruplara ayırmak
  const chunkedProjects = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const projectsChunks = chunkedProjects(projects, 3);

  return (
    <div className="projects-container">
      <h1>What We Did For You</h1>
      <br/>
      {projectsChunks.map((chunk, index) => (
        <div className="projects-row" key={index}>
          {chunk.map((project) => (
            <div className="project" key={project.id}>
             <img src={process.env.PUBLIC_URL + project.imageUrl} alt={getProjectName(project.imageUrl)} />
              <p>{getProjectName(project.imageUrl)}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;