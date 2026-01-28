<script setup lang="ts">
import {ref} from 'vue'

interface Props{
  label: string,
  type: string
}

defineProps<Props>();

// 親のv-modelと同期する変数を定義

const modelValue= defineModel<string>({required:true})
</script>
<template>
  <div>
    <p><label>{{label}}</label></p>
    <input :type="type" v-model="modelValue" ></input>
  </div>
</template>
    