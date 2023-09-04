<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  link: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  },
  imgUrl: {
    required: true,
    type: String
  },
  timeTilRedirect: {
    required: false,
    default: 1,
    type: Number
  }
});

const currentTime = ref(props.timeTilRedirect);

onMounted(() => {
  setInterval(() => {
    if (currentTime.value <= 1) {
      window.location.href = props.link
      // console.log(`Redirecting to ${ props.link }`);
    } else {
      currentTime.value -= 1;
    }
  }, 1000);
});

</script>

<template>
  <div class="wrapper">
    <div class="container">

      <img :src="props.imgLink" alt="">
      <h1>Redirecting to {{ props.name }} in <b>{{ currentTime }}</b></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">

.wrapper{
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  position: relative;
}

.container {
  position: fixed;
  display: grid;
  place-items: center;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}

img {
  height: 10rem;
  padding: .5rem;
}
</style>