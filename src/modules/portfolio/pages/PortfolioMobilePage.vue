<template>
    <div class="container">
        <div class="row justify-content-around">
          <router-link class="nav-link mt-3" to="/portfolio"><p style="color: white; font-weight: bolder;">Volver a categorias</p></router-link>
            <div v-for="project in projects" :key="project.id" class="col-12 col-lg-4" >
                <router-link class="nav-link" :to="'/portfolio-about/' + project.id">
                    <div class="button bg-dark">
                        <img :src="getImgPath(project.imgPath)" alt="" class="aplicacionesWeb-img">
                        <p>{{ project.name }}</p>
                        
                    </div>
                </router-link>

                
            </div>
            <h2 class="text-white mt-5" :v-if="projects.length == 0">No hay proyectos actualmente para esta categoria</h2>
        </div>
    </div>
</template>
<script>
import { getMobileProjects } from '@/modules/portfolio/helpers/helpers';
export default {
    data() {
        return {
            project:{},
            index: 0,
            projects: []
        }
    },
    methods: {
        getProjects() {
            this.projects = getMobileProjects();
        },
        getImgPath(path) {
            if( path !== '' ) {
                try {
                    // En caso de llamar el path de la imagen de forma dinamica, hay que usar una funcion que retorne el path con require()
                    path = require('@/assets/img/portfolio-web/' + path)
                } catch (e) {
                    path = '' // I used a default image. 
                }
            }

            return path;
        }
    },
    created() {
        this.getProjects()
        console.log(this.projects)

    }
}
</script>


<style>

</style>