<script setup lang="ts">
import {ref, computed } from 'vue'
import type {ParentData ,FullName} from '@/types/index.ts'

//入力した名前を格納する変数。
const inputFullName = ref<FullName>({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: ''
});

let ParentData:ParentData[] = [
    {
        id: 1,
        type: USER_TYPE.PARENT,
        name: {
            lastName:      '優作',
            firstName:     '泉山',
            lastNameKana:  'ユウサク',
            firstNameKana: 'イズミヤマ',
        },
        email:'',
        phone:''
    }
];

</script>
<template>
    <h2>お祭り実行委員会名</h2>
    <p>名前：漢字 {{ inputFullName.lastName }} {{ inputFullName.firstName }}</p>
    <input v-model="inputFullName.lastName"></input><input v-model="inputFullName.firstName"></input>
    <p>名前：カナ {{ inputFullName.lastNameKana }} {{ inputFullName.firstNameKana }}</p>
    <input v-model="inputFullName.lastNameKana"></input><input v-model="inputFullName.firstNameKana"></input>
    <p>お申込み</p>
    <button @click="push">テスト</button>
    <p>お子様の人数</p>
    <select>
      <option :value="0">お子様の人数を選択してください</option>
      <option v-for="n in 9" :key="n" :value="n">{{ n }}人</option>
    </select>
    <button @click="push">テスト</button>
    <p v-for="value in tests" :key="value.id">
        {{value}}
    </p>
</template>