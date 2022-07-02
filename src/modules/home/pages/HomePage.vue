<template>
    
    <div class="container">
        <div class="row justify-content-around">
            <div class="col-12 col-md-4">
                <img src="@/assets/img/FotoPortafolio.jpg" alt="" class="img-portfolio">
            </div>
            <div class="col-12 col-md-4 welcome-message">
                <h2>¡Hola!, Mi nombre es Erick Castillo</h2>
                <h3>Soy desarrollador web Fullstack <font-awesome-icon icon="fa-brands fa-twitter" /></h3>
            </div>
        </div>
    </div>


</template>

<style scoped>
.img-portfolio{
    width: 300px;
    border-radius: 100%;
}
.container {
    margin-top: 150px;
    color: rgb(214, 214, 214);
}
.welcome-message {
    font-family: 'Roboto Mono', monospace;
    
}
.welcome-message h2, .welcome-message h3 {
    font-weight: bolder;
    font-size: 33px;
}
</style>