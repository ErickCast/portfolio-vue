<template>

    <div class="container">
        <div class="row justify-content-around">
            <div class="col-12 col-lg-4">
                <router-link class="nav-link" to="/web">
                    <div class="button animate__animated animate__fadeInLeft">
                        <img src="@/assets/img/web-applications.png" alt="" class="aplicacionesWeb-img">
                        <p>Aplicaciones Web</p> 
                    </div>
                </router-link>

                
            </div>
            <div class="col-12 col-lg-4 mt-3 mt-md-0 ">
                <router-link class="nav-link" to="/mobile">
                    <div class="button animate__animated animate__fadeInRight">
                        <img src="@/assets/img/mobile-applications.png" alt="" class="aplicacionesWeb-img">
                        <p>Aplicaciones Moviles</p>
                        
                    </div>
                </router-link>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        margin-top: 280px;
        font-family: 'Roboto Mono', monospace;
    }
    .button{
        background-color: #0c0c14;
        font-size: 25px;
        border: 3px solid rgb(190, 190, 190);
        color: white;
        display: flex;
        align-items: center;
    }
    .button p{
        margin-left: 20px;
    }
    .button img {
        width: 200px;
    }
</style>