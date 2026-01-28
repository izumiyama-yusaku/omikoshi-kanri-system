<script setup lang="ts">
import {User} from'@/stores/applicationUser.ts'
const Child = User();
</script>

<template>
     <footer>
     <RouterLink to="/" @Click="Child.minusOne">前へ</RouterLink>
     <RouterLink to="/" @Click="Child.plusOne">次へ</RouterLink>
     </footer>
</template>