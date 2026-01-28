<script setup lang="ts">
import {ref} from 'vue'
import {User} from'@/stores/applicationUser.ts'
import InputForm from '@/components/common/FormInput.vue'
import SelectForm from '@/components/common/FormNumberSelect.vue'
const Child = User();

const inputChild = ["名前", "名前(フリガナ)","電話番号", "メールアドレス"];
</script>
<template>




</template>