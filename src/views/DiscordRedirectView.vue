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
import discordSVG from '@/assets/svg/social_media/discordSVG.vue';
</script>

<template>
<!--  <p>Redirecting to the official JstJxel Community Discord</p>-->
  <Redirect :svg-icon="discordSVG" name="Discord" link="https://discord.gg/sUz82BCXzf"></Redirect>
</template>

<style lang="scss" scoped>

</style>