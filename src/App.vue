<template>
    <NavBar />
    <router-view />
    
  
  
    
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  

  name: 'App',
  components: {
    NavBar: defineAsyncComponent(() => import(/* webpackChunkName: "NavBar" */ '@/modules/shared/components/NavBar'))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
body{
  background: linear-gradient(
        rgba(2, 3, 10, 0.7),
        rgba(3, 1, 22, 0.7)
      ), url('@/assets/img/fondo-web.jpg');
  background-attachment: fixed;
}
li a{
  color: white;
}
</style>
