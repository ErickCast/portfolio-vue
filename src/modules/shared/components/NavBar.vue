<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navigation-bar">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item first-element-nav">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Sobre mi</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/portfolio">Proyectos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/skills">Habilidades</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contacto</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    
}
</script>

<style>
  .navigation-bar {
    border-top: 3px solid rgb(18, 187, 18);
    border-bottom: 3px solid rgb(18, 187, 18);
  }
  .navbar-nav {
    font-family: 'Roboto Mono', monospace;
    
  }
  .first-element-nav {
    border-left: 2px solid white;
  }
  .navbar-nav .nav-item {
    padding-right: 40px;
    padding-left: 40px ;
    border-right: 2px solid white;

  }
  .navbar-nav .nav-item a{
    font-size: 20px;
  }
</style>