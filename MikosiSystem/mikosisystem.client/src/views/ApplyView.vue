<script setup lang="ts">
import {ref, computed} from 'vue'
import type {ChildData ,FullName} from '@/types/index.ts'
import {User} from'@/stores/applicationUser.ts'


//入力情報を格納する変数。
const inputFullName = ref<FullName>({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: ''
});

let tests = ref<ChildData[]>([
    {
        id: 1,
        type: 'child',
        name: {
            lastName:      '優作',
            firstName:     '泉山',
            lastNameKana:  'ユウサク',
            firstNameKana: 'イズミヤマ',
        },
        participateDate:'53st',
        serviceOption:['test','test']
    }
]);
//お申込み人数を格納する変数。
const testnumber = computed(() =>{
    if(inputFullName.value.firstName !== ''){
        return `${inputFullName.value.firstName}様`
    }
    return `${tests.value.length + 1}人目`
})

function push(){

    let addtest:ChildData = {
        id: 1,
        type: 'child',
        //シャローコピー
        name:{ ...inputFullName.value },
        participateDate:'',
        serviceOption:['']
    }; 

    tests.value.push(addtest);
}

</script>
<template>
    <h2>{{ testnumber }}</h2>
    <p>名前：漢字 {{ inputFullName.lastName }} {{ inputFullName.firstName }}</p>
    <input v-model="inputFullName.lastName"></input><input v-model="inputFullName.firstName"></input>
    <p>名前：カナ {{ inputFullName.lastNameKana }} {{ inputFullName.firstNameKana }}</p>
    <input v-model="inputFullName.lastNameKana"></input><input v-model="inputFullName.firstNameKana"></input>

</template>