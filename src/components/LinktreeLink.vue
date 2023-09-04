<script setup>
import { onMounted, ref } from 'vue';
import { useClipboard } from '@vueuse/core';

const source = ref('');

const { text, copy, copied, isSupported } = useClipboard({ source });

const props = defineProps({
  url: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  },
  imgUrl: {
    required: false,
    type: true
  }
});

defineEmits(['more']);

const svg = ref('');

const savedLinks = {
  'Twitch': {
    'svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/></svg>',

  },
  'Discord': {
    'svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>',

  },
  'TikTok': {
    'svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>',

  }
};

onMounted(() => {
  if (props.imgUrl === null || props.imgUrl === '' || props.imgUrl === undefined) {
    svg.value = savedLinks[props.name] ? savedLinks[props.name].svg : null;
  }

});

function newTab(url, target) {
  window.open(url, target)
}
</script>

<template>
  <a :href="url">
    <img class="social-pic" v-if="imgUrl !== undefined" :src="imgUrl" alt="img">
    <div class="social-pic" v-html="svg" v-if="imgUrl === undefined"></div>

    <span>{{ name }}</span>

    <span class="options">
      <svg :style="isSupported ? {}: {fill: 'red'}" @click.prevent="copy(url)" :class="isSupported ? 'options-copy' : 'options-copy unsupported'" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg>

      <svg @click.prevent="newTab(url, '_blank')" class="option-external" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
    </span>
    <!--    <svg @click.prevent="$emit('more', id)" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">-->
    <!--      <path-->
    <!--          d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>-->
    <!--    </svg>-->
  </a>
</template>

<style scoped lang="scss">
a {
  display: flex;
  width: min(90%, 35rem);
  background: white;
  justify-content: space-between;
  align-items: center;
  border-radius: .4rem;
  position: relative;
  text-decoration: none;

  top: 0;
  left: 0;

  transition: top .1s, left .1s;

  &:after {
    content: "";
    position: absolute;
    //top: 10px;
    //left: 10px;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    border-radius: .4rem;
    //background: #00C7AC;
    background: #d27dfc;
    transition: top .1s, left .1s;
  }


  span {
    color: black;
    font-size: 1.4rem;
    font-weight: 600;
    margin-block: .4rem;
  }

  & > *:first-child {
    margin-inline: 1rem;
  }

  .social-pic {
    height: fit-content;
    width: 1.4rem;
    position: relative;

    display: grid;
    align-items: center;

    svg {
      //width: 1.4rem;
      //height: auto;
    }
  }

  &:hover {

    top: -2px;
    left: -2px;

    &:after {
      top: 5px;
      left: 5px;
    }
  }


  & > svg {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 100rem;
    //background: gray;
    padding: .5rem;
    margin-inline: 0;
  }

  .options {
    margin: 0 1rem 0 0;
    height: 100%;
    position: relative;
    display: flex;
    //gap: .6rem;


    svg {
      fill: black;
      width: 2.4rem;
      padding: .4rem;

      transition: transform .05s;

      &:hover {
        transform: scale(1.08);
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
}
</style>