<template>
    <div class="container">
        <div class="row justify-content-around">
            <div v-for="project in projects" :key="project.id" class="col-12 col-lg-4" >
                <router-link class="nav-link" :to="'/portfolio-about/' + project.id">
                    <div class="button bg-dark">
                        <img :src="getImgPath(project.imgPath)" alt="" class="aplicacionesWeb-img">
                        <p>{{ project.name }}</p>
                        
                    </div>
                </router-link>

                
            </div>
            
        </div>
    </div>
</template>

<script>
import { getWebProjects } from '@/modules/portfolio/helpers/helpers';
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
            this.projects = getWebProjects();
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

<style scoped>
    .container {
        margin-top: 50px;
        font-family: 'Roboto Mono', monospace;
    }
    .button{
        background-color: #0c0c14;
        font-size: 25px;
        color: white;
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 30px;
    }
    .button p{
        margin-left: 20px;
    }
    .button img {
        width: 200px;
    }
    .row > div {
        margin-bottom: 50px;
    }
</style>