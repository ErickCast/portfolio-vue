<template>
  <div class="container">
    <div class="row">
        <div class="col-12 text-left">
            <router-link class="nav-link" to="/web"><p style="color: white; font-weight: bolder;">Volver a proyectos</p></router-link>
        </div>
        <div class="col-12 col-lg-6">
            <div class="image-proyect">
                <img :src="imgPath" alt="">
            </div>
        </div>

        <div class="col-12 col-lg-6 proyect-info">
            <p>
                {{ project[0].descripcion }}
            </p>
            <div class="project-buttons row justify-content-center">
                <!-- Bucle -->
                <div class="col-6" v-if="project[0].github != ''">
                    <a :href="project[0].github" target="_blank"><img src="@/assets/img/github-logo.png" alt=""> Ver en Github</a>
                </div>
                <div class="col-6 web" v-if='project[0].host != "" '>
                    <a :href="project[0].host" target="_blank"><img src="@/assets/img/web.png" alt=""> Ver Sitio Web</a>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { getWebProjectById } from '@/modules/portfolio/helpers/helpers';
export default {

    props: {
        id: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            project: {},
            imgPath: ''
        }
    },
    methods: {
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

        const { id } = this.$route.params;

        this.project = getWebProjectById(id);

        this.imgPath = this.getImgPath(this.project[0].imgPath);


    }

}
</script>

<style scoped>
.container {
    margin-top:150px;
    font-family: 'Roboto Mono', monospace;
}
.image-proyect img {
    width: 600px;

}
.proyect-info p, .project-buttons a {
    color: rgb(214, 214, 214);
    font-size: 18px;
}
.project-buttons a {
    background-color: #1b1b23;
    padding: 15px;
    text-decoration: none;
}
.project-buttons a img {
    width: 50px;
}
.project-button {
    display: flex;
    justify-content: center;
}

.project-buttons .web a {
    background-color:rgb(214, 214, 214);
    color: black;
}
</style>