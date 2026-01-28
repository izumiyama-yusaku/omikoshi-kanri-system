<script setup lang="ts">
import {User} from'@/stores/applicationUser.ts'
const count = User();
</script>

<template>
    <header>{{count.headerTitle}}</header>
</template>