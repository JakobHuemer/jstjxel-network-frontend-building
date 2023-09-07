<script setup>
import { defineComponent, onMounted, ref } from 'vue';


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
let editedImgUrl = ref('');

onMounted(() => {

  if (props.imgUrl.startsWith('/')) {
    editedImgUrl.value = window.location.protocol + '//' + window.location.hostname + (window.location.port != 433 ? ':' + window.location.port : '') + props.imgUrl;
  } else {
    editedImgUrl.value = props.imgUrl;
  }

  // editedImgUrl.value = "http://localhost:5173/social_media/twitch.svg"

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

      <img :src="editedImgUrl" :alt="name">
      <h1>Redirecting to {{ props.name }} in <b :style="{color: '#00C7AC', fontWeight: 600}">{{ currentTime }}</b></h1>
      <p class="backup-link">Click <a :href="link">here</a> if you didn't get redirected!</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.wrapper {
  //height: 100vh;
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


  img {
    height: 10rem;
    filter: invert(1);
    margin-bottom: 2%;
  }

  .backup-link a {
    color: #00C7AC;
  }
}


</style>