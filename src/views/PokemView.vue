<script setup>
import axios from 'axios';
import { ref } from 'vue'; 
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const p = ref({});

const back = () => {
    router.push('/poke')
}

const getData = async () => {
    try {
        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${route.params.n}`
        );
        console.log(data);
        p.value = data;
    } catch (error) {
        console.log(error);
        p.value = null;
    }
}

getData();
</script>

<template>
    <div v-if="p">
        <img :src="p.sprites?.front_default" alt=""/>
        <h1>poke name: {{ $route.params.n }}</h1>
    </div>
    <h1 v-else class="text-center mt-10"> NO EXISTE EL POKEMON</h1>
    <button @click="back" class="btn btn-outline-primary me-2">volver</button>
</template>