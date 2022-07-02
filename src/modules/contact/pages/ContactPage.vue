<template>
    <div class="container">
        <div class="row">
            <div class="col-6 text-white">
                <h3>Si necesitas un sitio web, enviame un mensaje, el cual llegara a mi correo desde este medio, te respondere en breve</h3>
                <div class="data-contact">
                    <p><font-awesome-icon icon="fa-solid fa-mobile-screen-button" /> 6671770018</p>
                    <p><font-awesome-icon icon="fa-solid fa-envelope" /> erick_said_castillo@hotmail.com </p>
                </div>
            </div>
            <div class="col-12 col-md-6 contact d-flex">
                
                <div class="formulario">
                    <form action="">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="" id="" placeholder="Nombre">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="" id="" placeholder="Telefono">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="" id="" placeholder="Email">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="" id="" placeholder="Mensaje">
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    margin-top: 200px;
    font-family: 'Roboto Mono', monospace;
}
.data-contact p {
    
    color: white;
    
}
.data-contact p svg{
    color: rgb(18, 187, 18);
    font-size: 25px;
}

.formulario {
    background-color:rgba(18, 26, 21, 0.5);
    padding: 50px 50px;
    border-radius:15px ;
    border: 3px solid green;
}
.form-group {
    margin-bottom: 50px;
}
</style>