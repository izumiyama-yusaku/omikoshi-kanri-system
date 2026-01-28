import { ref, toRaw, computed } from 'vue'
import { defineStore } from 'pinia'
import type {ParentData, ChildData, sendDateType} from '@/types/index.ts'

export const User = defineStore('user', () => {
  
  //入力された保護者・お子様の情報を管理する配列を定義する。(ユニオン型を使用)
  const sendData = ref<sendDateType[]>([]);
  const inputName = ref<string>('ゲスト');
  const count = ref(0);

  function addSendData(inputData:sendDateType):void{
    
    //共通の名前を格納する。


    //親の情報か子の情報によって分岐する
    if(true){

    }
  }

  function plusOne(){
    count.value++;
  }
  function minusOne():void{
  
  }

  function input():void{
    //inputName.value = sendData.value.firstName[]
  }
  //重要computedはrefを処理した結果を返したい場合に使用
  const headerTitle = computed(()=>{  
    if(inputName.value !== ''){
        return `${inputName.value}様`;
    }else if(count.value === 0){
        return `新野睦`;
    }
    return `${count.value}人目`;
  });
  
  return {
    plusOne,
    minusOne,
    inputName,
    count,
    headerTitle,
    input,
    parent
  }
})
