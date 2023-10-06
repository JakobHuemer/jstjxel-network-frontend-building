<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import discordSVG from '@/assets/svg/social_media/discordSVG.vue';
import twitchSVG from '@/assets/svg/social_media/twitchSVG.vue';
import tiktokSVG from '@/assets/svg/social_media/tiktokSVG.vue';
import youtubeSVG from '@/assets/svg/social_media/youtubeSVG.vue';

const online = ref(false);


const socialsArr = reactive([
  {
    svg: discordSVG,
    to: '/discord',
    uri: 'https://discord.gg/sUz82BCXzf',
    classNames: '',
  },
  {
    svg: twitchSVG,
    to: '/live',
    uri: 'https://twitch.tv/jstjxel',
    classNames: '',
    conditions: {
      live: (async () => {
        const response = await axios.get('https://api.jstjxel.de/v-1/twitch-online');
        // console.log('RESPONSE DATA INSIDE COMPUTED', !!response.data);
        return !!response.data;
      }),
    },
  },
  {
    svg: tiktokSVG,
    to: '/tiktok',
    uri: 'https://www.tiktok.com/@jstjxel_official',
    classNames: '',
  },
  {
    svg: youtubeSVG,
    to: '/youtube',
    uri: 'https://www.youtube.com/@jstjxel',
    classNames: '',
  },
]);

onMounted(() => {
  // fetch("https://jstjxel.de/api/v-1/twitch-online", {
  //   header: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET, PUT, POST",
  //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  //   }
  // })
  //     .then(res => {
  //       console.log(res.body);
  //       if (res.bodyUsed) {
  //
  //         online.value = true
  //       }
  //     })
  // axios.get('https://jstjxel.de/api/v-1/twitch-online')
  //     .then(res => {
  //       console.debug('live:', res.data);
  //       if (res.data) {
  //         online.value = true;
  //       }
  //     });

  for (const item of socialsArr) {
    processConditions(item);
  }
});


async function processConditions(item) {


  if (!item || !item.conditions) {
    return '';
  }


  let classString = '';

  for (const condition of Object.entries(item.conditions)) {
    // console.log('If async function:', typeof item[1] === typeof (async () => {
    // }));
    if (typeof condition[1] !== typeof (async () => {
    })) continue;
    // console.log('Now runnign this weird async function with await');
    // const response = await condition[1]()
    // console.log("VAL VAL:", await condition[1]())
    if (await condition[1]()) {
      // console.log(`ADDING ${ condition[0] } to classString`);
      classString += ` ${ condition[0] } `;
    }
  }
  // console.log(`RETURNING "${ ' ' + classString.trim() + ' ' }"`);
  item.classNames = ' ' + classString.trim() + ' ';
  return ' ' + classString.trim() + ' ';

}


</script>


<template>
  <div class="wrapper">

    <div class="container">
      <h1>Under Construction</h1>

      <div class="sec-row">
        <!--        <h2>Du kannst mir auch hier folgen</h2>-->
        <div class="socials">
          <a v-for="item in socialsArr" :href="item.uri" :class="item.classNames">
            <component :is="item.svg"></component>
          </a>
          <!--          <RouterLink to="/discord" class="link" id="discord-link">-->
          <!--            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">-->
          <!--              &lt;!&ndash;! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. &ndash;&gt;-->
          <!--              <path-->
          <!--                  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>-->
          <!--            </svg>-->
          <!--          </RouterLink>-->
          <!--          <RouterLink to="/twitch" class="link" id="twitch-link">-->
          <!--            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">-->
          <!--              &lt;!&ndash;! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. &ndash;&gt;-->
          <!--              <path-->
          <!--                  d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/>-->
          <!--            </svg>-->
          <!--            <div :style="{background: online ? '#eb0400' : '#eb040000'}" id="twitch-live-indicator"></div>-->
          <!--          </RouterLink>-->
          <!--          <RouterLink to="/tiktok" class="link" id="tiktok-link">-->
          <!--            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">-->
          <!--              &lt;!&ndash;! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. &ndash;&gt;-->
          <!--              <path-->
          <!--                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>-->
          <!--            </svg>-->
          <!--          </RouterLink>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.wrapper {
  height: 100%;
  display: grid;
  align-items: center;
  position: relative;

  .container {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    h1 {
      font-size: 500%;
      font-weight: 100;
    }

    @media only screen and (max-width: 800px) {
      h1 {
        font-size: 350%;
      }
    }

    @media only screen and (max-width: 600px) {
      h1 {
        font-size: 250%;
      }
    }
    @media only screen and (max-width: 400px) {
      h1 {
        font-size: 210%;
      }
    }

    .sec-row {

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: .5rem;

      h2 {
        font-size: 120%;
      }

      .socials {
        display: flex;
        gap: 1rem;


        a {
          position: relative;

          &::after {
            content: "";
            height: 11px;
            width: 11px;

            background: transparent;
            border-radius: 100rem;
            z-index: 1000;
            position: absolute;
            bottom: 5px;
            right: -1px;
            pointer-events: none;

            transition: background .5s;
          }

          &.live::after {
            background: red;
          }

          svg {
            height: 2rem;
            position: relative;

            #twitch-live-indicator {
              position: absolute;
              height: 13px;
              width: 13px;
              border-radius: 100rem;
              bottom: -1px;
              right: -1px;

              transition: background .5s;
            }

            fill: white;
            transition: fill .2s;

            &:hover {
              fill: #00C7AC;
            }

          }
        }
      }
    }
  }
}
</style>
