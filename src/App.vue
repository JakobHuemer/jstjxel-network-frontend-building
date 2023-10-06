<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue';
import TestingSVG from './assets/svg/social_media/testing.svg';


onMounted(() => {
  if (isMobile()) {
    document.body.classList.add('mobile');
  }
});

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
</script>

<template>
  <nav>
    <ul class="nav-socials">
      <li>
        <RouterLink to="/linktree">Linktree</RouterLink>
      </li>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
<!--        <TestingSVG></TestingSVG>-->
      </li>
      <!--      <p>{{ isMobile() ? "Mobile" : "Not mobile" }}</p>-->
    </ul>
  </nav>


  <RouterView/>
</template>

<style lang="scss">
body {
  background: url("./assets/img/mc_bg_cool_blurry.png") center/cover no-repeat;
}

nav {
  z-index: 1000;
  position: sticky;
  top: 0;

  //background: rgba(176, 58, 58, .8);
  background: rgba(8, 8, 8, .6);
  display: grid;
  align-items: center;

  ul {
    margin-block: 2rem;
    padding: 0;
    //width: fit-content;
    text-decoration: none;
    list-style: none;
    display: flex;
    gap: min(8%, 2.6rem);
    justify-content: center;
    text-transform: uppercase;

    li a {
      text-decoration: none;
      color: #FFF;
      font-size: 1rem;
      transition: color .2s, text-shadow .15s;
      text-shadow: 0 0 0 #fff,
      0 0 0 #fff,
      0 0 0 #0fa,
      0 0 0 #0fa,
      0 0 0 #0fa;

    }
  }
}

body:not(.mobile) {
  nav ul li a:hover {

    text-shadow: 0 0 7px #fff,
    0 0 21px #fff,
    0 0 92px #0fa,
    0 0 100px #0fa;
  }
}

body.mobile {
  nav ul li a:active {

    text-shadow: 0 0 7px #fff,
    0 0 21px #fff,
    0 0 92px #0fa,
    0 0 100px #0fa;
  }
}

</style>
