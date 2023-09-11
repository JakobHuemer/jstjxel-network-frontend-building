<script setup>

// import { onMounted } from 'vue';
//
// onMounted(() => {
//   console.log('Redirecting');
//
// //   redirect to https://discord.gg/sUz82BCXzf
//   setTimeout(() => {
//     window.location.href = 'https://discord.gg/sUz82BCXzf';
//   }, 1000);
// });

import Redirect from '@/components/Redirect.vue';
import twitchSVG from '@/assets/svg/social_media/twitchSVG.vue';
</script>

<template>
<!--  <p>Redirecting to the official JstJxel Community Discord</p>-->
  <Redirect :svg-icon="twitchSVG" name="Twitch" link="https://twitch.tv/jstjxel"></Redirect>
</template>

<style lang="scss" scoped>

</style>