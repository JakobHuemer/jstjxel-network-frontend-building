<script setup>
import { onMounted, ref } from 'vue';
import { useClipboard } from '@vueuse/core';
import ExternalLink from '@/assets/svg/linktree-options/externalLinkSVG.vue';
import CopyLink from '@/assets/svg/linktree-options/copyLinkSVG.vue';

const source = ref('');

const { text, copy, copied, isSupported } = useClipboard({ source });

const props = defineProps({
  url: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  imgUrl: {
    required: false,
    type: true,
  },
  svgIcon: {
    required: true,
  },
});

defineEmits(['more']);

const svg = ref('');

// const savedLinks = {
//   'Twitch': {
//     'svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/></svg>',
//
//   },
//   'Discord': {
//     'svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>',
//
//   },
//   'TikTok': {
//     'svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>',
//
//   },
// };

// onMounted(() => {
//   if (props.imgUrl === null || props.imgUrl === '' || props.imgUrl === undefined) {
//     svg.value = savedLinks[props.name] ? savedLinks[props.name].svg : null;
//   }
//
// });

</script>

<template>
  <a :href="url">
<!--    <slot/>-->
    <component :is="svgIcon" class="social-pic"></component>
    <span>{{ name }}</span>

    <span class="options">
      <external-link @click="window.open(url, 'blank')" class="options-external"/>
      <copy-link :style="isSupported ? {}: {fill: 'red'}" @click.prevent="copy(url)"
                 :class="isSupported ? 'options-copy' : 'options-copy unsupported'"/>
    </span>
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


  .social-pic {
    width: 2.4rem;
    //height: 2.4rem;
    //border-radius: 100rem;
    //background: gray;
    padding: .4rem;
    //margin-inline: 0;
    margin-left: .6rem;
  }

  span {
    color: black;
    font-size: 1.4rem;
    font-weight: 600;
    margin-block: .4rem;
  }


  &:hover {

    top: -2px;
    left: -2px;

    &:after {
      top: 5px;
      left: 5px;
    }
  }

  .options {
    margin: 0 .6rem 0 0;
    height: 100%;
    position: relative;
    display: flex;
    //gap: .6rem;


    svg {
      fill: black;
      width: 2.4rem;
      padding: .4rem;

      transition: transform .05s, fill .1s;

      &:hover {
        fill: #00C7AC;
        transform: scale(1.08);
      }

      &:active {
        fill: #00917f;
        transform: scale(0.95);
      }
    }
  }
}
</style>