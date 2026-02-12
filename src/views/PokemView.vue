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
    }
}

getData();
</script>

<template>
    <img :src="p.sprites?.front_default" alt=""/>
    <h1>poke name: {{ $route.params.n }}</h1>
    <button @click="back">volver</button>
</template>