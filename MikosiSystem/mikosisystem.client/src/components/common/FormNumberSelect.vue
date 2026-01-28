<script setup lang="ts">
import {ref} from 'vue'

interface Props{
  label: string,
}

defineProps<Props>();
</script>
<template>
    <p>{{label}}</p>
    <select>
      <option :value="0">お子様の人数を選択してください</option>
      <option v-for="n in 9" :key="n" :value="n">{{ n }}人</option>
    </select>
</template>
    