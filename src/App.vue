<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          
          <router-link class="navbar-brand" to="/">
            <img 
                src="@/assets/logo.svg" 
                alt="" 
                width="30" 
                height="24"
                class="d-inline-block align-text-top"
            />
            PokeAPI
          </router-link>
          <div>
            <router-link to="/" class="btn btn-outline-primary me-2" >Home</router-link>
            <router-link to="/poke" class="btn btn-outline-primary" >Pokemones</router-link>
          </div>
        </div>
      </nav>
      <div class="container">
        <RouterView />
      </div>
</template>

