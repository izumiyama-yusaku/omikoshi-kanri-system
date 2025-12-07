<script setup lang="ts">

</script>

<template>
  <div>


    <form>
      <p>名前</p>
      <input type="text"></input>
      <p>名前（フリガナ）</p>
      <input type="text"></input>
      <p>メールアドレス</p>
      <input type="email"></input>
      <p>電話番号</p>
      <input type="tel"></input>
    </form>
    <RouterLink to="confirm">確認画面へ進む（仮）</RouterLink>
  </div>
</template>