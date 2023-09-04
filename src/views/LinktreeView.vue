<script setup>

import LinktreeLink from '@/components/LinktreeLink.vue';
import { reactive, ref } from 'vue';

const links = [
  {
    link: 'https://twitch.tv/jstjxel',
    name: 'Twitch'
  },
  {
    link: 'https://tiktok.com/@jstjxel_official',
    name: 'TikTok'
  },
  {
    link: "https://discord.gg/sUz82BCXzf",
    name: "Discord"
  }
];

const modal = reactive({
  active: false,
  link: '',
  name: '',
});

function showModal(id) {

  console.log('SHOWING MODAL');

  if (Object.keys(links).includes(id)) {
    modal.active = true;
  }
}
</script>

<template>

  <div class="wrapper">
    <div class="profile-section">
      <img src="../assets/img/jstjxel.png" alt="LOGO">
      <span class="username">@JstJxel</span><br>
      <span class="description">hobbylos und freizeit rentner </span>
    </div>

    <div class="links">
      <LinktreeLink v-for="item of links" :name="item.name" :url="item.link"
                    @more="showModal"></LinktreeLink>
      <!--      <p v-for="(item, id) of links">-->
      <!--        {{ id }}: {{ item }}-->
      <!--      </p>-->
      <!--      <LinktreeLink  id="1" name="Twitch" url="https://twitch.tv/jstjxel"></LinktreeLink>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-section {
  img {
    height: 10rem;
    border: 2px solid rgb(240, 240, 240);
    border-radius: 100vh;
  }
}

.links {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: min(max(calc(10% - 5rem), 2rem), 4rem);
    margin-bottom: 1rem;
  }

  span:nth-child(2) {
    font-size: 1.4rem;
    font-weight: 600;
  }

}
</style>