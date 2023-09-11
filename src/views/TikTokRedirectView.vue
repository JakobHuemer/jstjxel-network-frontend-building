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
import tiktokSVG from '@/assets/svg/social_media/tiktokSVG.vue';
</script>

<template>
<!--  <p>Redirecting to the official JstJxel Community Discord</p>-->
  <Redirect :svg-icon="tiktokSVG" name="TikTok" link="https://www.tiktok.com/@jstjxel_official"></Redirect>
</template>

<style lang="scss" scoped>

</style>