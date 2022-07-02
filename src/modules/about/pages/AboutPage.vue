<template>
<div class="container">
    <div class="row section-about">
        <div class="col-12">
            <h1>Sobre mi</h1>
            <img src="@/assets/img/img-about.jpg" alt="" class="img-about">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio fuga deleniti vel corrupti doloremque non est nesciunt veniam esse officia, consequuntur ipsum atque cupiditate soluta? Illo nisi dolores rerum asperiores
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio fuga deleniti vel corrupti doloremque non est nesciunt veniam esse officia, consequuntur ipsum atque cupiditate soluta? Illo nisi dolores rerum asperiores
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio fuga deleniti vel corrupti doloremque non est nesciunt veniam esse officia, consequuntur ipsum atque cupiditate soluta? Illo nisi dolores rerum asperiores
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio fuga deleniti vel corrupti doloremque non est nesciunt veniam esse officia, consequuntur ipsum atque cupiditate soluta? Illo nisi dolores rerum asperiores
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio fuga deleniti vel corrupti doloremque non est nesciunt veniam esse officia, consequuntur ipsum atque cupiditate soluta? Illo nisi dolores rerum asperiores    
            .</p>
            <h3>Esta es mi trayectoria como desarrollador</h3>
            <div class="row" v-for="trabajo in arrTrayectoria" :key="trabajo.id">
                
                <hr>
                <div class="col-4">
                    {{ trabajo.fechaInicio }} - {{ trabajo.fechaFin }}
                </div>
                <div class="col-8">
                    <p><b>{{ trabajo.puesto }}</b></p>
                    <p><small>{{ trabajo.empresa }}</small></p>
                    <p>{{ trabajo.descripcion }}</p>
                    <p><b><small>{{ trabajo.ubicacion }}</small></b></p>
                </div>
                
                
            </div>
        </div>
    </div>
    
</div>
    
</template>

<script>
   export default {
       data() {
           return {
               arrTrayectoria: [
                    {
                        id: 1,
                        fechaInicio: 'Agosto de 2020',
                        fechaFin: 'Febrero de 2021',
                        puesto: 'Desarrollador Web FullStack',
                        empresa: 'TuCasaIdeal',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum temporibus deleniti repellendus corrupti quibusdam quod quos ipsum placeat magni libero quia, aliquam similique a doloremque eos ullam qui ratione! Iusto',
                        ubicacion: 'Culiacan Rosales, Sinaloa, Mexico'
                    },
                    {
                        id: 2,
                        fechaInicio: 'Febrero de 2021',
                        fechaFin: 'Agosto de 2021',
                        puesto: 'Desarrollador Web',
                        empresa: 'Parque de Innovacion Tecnologica UAS',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum temporibus deleniti repellendus corrupti quibusdam quod quos ipsum placeat magni libero quia, aliquam similique a doloremque eos ullam qui ratione! Iusto',
                        ubicacion: 'Culiacan Rosales, Sinaloa, Mexico'
                    },
                    {
                        id: 3,
                        fechaInicio: 'Enero de 2022',
                        fechaFin: 'Actualidad',
                        puesto: 'Desarrollador',
                        empresa: 'Afore Coppel',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum temporibus deleniti repellendus corrupti quibusdam quod quos ipsum placeat magni libero quia, aliquam similique a doloremque eos ullam qui ratione! Iusto',
                        ubicacion: 'Culiacan Rosales, Sinaloa, Mexico'
                    }
                ]
           }
       },

       methods:{
           getTrayectoria() {
                this.arrTrayectoria = [
                    {
                        id: 1,
                        fechaInicio: 'Agosto de 2020',
                        fechaFin: 'Febrero de 2021',
                        puesto: 'Desarrollador Web FullStack',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum temporibus deleniti repellendus corrupti quibusdam quod quos ipsum placeat magni libero quia, aliquam similique a doloremque eos ullam qui ratione! Iusto',
                        ubicacion: 'Culiacan Rosales, Sinaloa, Mexico'
                    },
                    {
                        id: 2,
                        fechaInicio: 'Febrero de 2021',
                        fechaFin: 'Agosto de 2021',
                        puesto: 'Desarrollador Web',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum temporibus deleniti repellendus corrupti quibusdam quod quos ipsum placeat magni libero quia, aliquam similique a doloremque eos ullam qui ratione! Iusto',
                        ubicacion: 'Culiacan Rosales, Sinaloa, Mexico'
                    },
                    {
                        id: 3,
                        fechaInicio: 'Enero de 2022',
                        fechaFin: 'Actualidad',
                        puesto: 'Desarrollador',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum temporibus deleniti repellendus corrupti quibusdam quod quos ipsum placeat magni libero quia, aliquam similique a doloremque eos ullam qui ratione! Iusto',
                        ubicacion: 'Culiacan Rosales, Sinaloa, Mexico'
                    }
                ];

                return this.arrTrayectoria;
            },
       },

       
       
   }
</script>

<style scoped>
.img-about {
    width: 500px;
}
.section-about {
    color: rgb(214, 214, 214);
    font-family: 'Roboto Mono', monospace;
}
</style>