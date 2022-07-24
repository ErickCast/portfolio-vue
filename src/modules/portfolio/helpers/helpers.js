const portfolio = require('./portfolio.json');


export const getWebProjects = () => {
    const webProjects = JSON.parse(JSON.stringify(portfolio.webProjects));
    return webProjects;
}

export const getWebProjectById = (id) => {
    let project = getWebProjects();
    project = project.filter(project => project.id == id);
    return project;
}

/* export const getImgPath = (path) => {
    if( path !== '' ) {
        try {
            // En caso de llamar el path de la imagen de forma dinamica, hay que usar una funcion que retorne el path con require()
            path = require('C:/Users/Admin/Desktop/Proyectos Web/Portfolio 2.0/portfolio-vue/src/assets/img/portfolio-web' + path)
        } catch (e) {
            path = '' // I used a default image. 
        }
    }

    return path;
} */