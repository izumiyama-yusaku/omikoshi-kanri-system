<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
import {ref} from "vue"
</script>

<template>
  <body>
  <Header/>
  <RouterView/>
  <Footer/>
</body>
</template>

<style scoped></style>
