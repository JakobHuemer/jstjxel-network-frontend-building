import { createRouter, createWebHistory } from 'vue-router';
import DiscordRedirectView from '@/views/DiscordRedirectView.vue';
import CurrentlyBuildingView from '@/views/CurrentlyBuildingView.vue';
import TwitchRedirectView from '@/views/TwitchRedirectView.vue';
import TikTokRedirectView from '@/views/TikTokRedirectView.vue';
import NotFound404View from '@/views/NotFound404View.vue';
import LinktreeView from '@/views/LinktreeView.vue';
import YouTubeRedirectView from '@/views/YouTubeRedirectView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: CurrentlyBuildingView,
            meta: {},
        },
        {
            path: '/home',
            name: 'home',
            component: CurrentlyBuildingView,
            meta: {
                on404: true,
            },
        },
        {
            path: '/dc',
            name: 'dc',
            component: DiscordRedirectView,
            meta: {
                on404: true,
                documentTitle: 'Discord',
            },
        },
        {
            path: '/disc',
            name: 'disc',
            component: DiscordRedirectView,
            meta: {
                on404: true,
                documentTitle: 'Discord',
            },
        },
        {
            path: '/discord',
            name: 'discord',
            component: DiscordRedirectView,
            meta: {
                on404: true,
                documentTitle: 'Discord',
            },
        },
        {
            path: '/building',
            component: CurrentlyBuildingView,
            name: 'building',
        },
        {
            path: '/live',
            name: 'live-twitch',
            component: TwitchRedirectView,
            meta: {
                on404: true,
                documentTitle: 'Twitch',
            },
        },
        {
            path: '/twitch',
            name: 'twitch',
            component: TwitchRedirectView,
            meta: {
                on404: true,
                documentTitle: 'Twitch',
            },
        },
        {
            path: '/tiktok',
            name: 'tiktok',
            component: TikTokRedirectView,
            meta: {
                on404: true,
                documentTitle: 'TikTok',
            },
        },
        {
            path: '/linktree',
            name: 'linktree',
            component: LinktreeView,
            meta: {
                on404: true,
                documentTitle: 'Linktree',
            },
        },
        {
            path: '/youtube',
            name: 'youtube',
            component: YouTubeRedirectView,
            meta: {
                on404: true,
                documentTitle: "YouTube"
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'catchAll',
            component: NotFound404View,
            meta: {
                documentTitle: "404 - Not found"
            }
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.documentTitle || 'JstJxel Network';
    next();
});

export default router;
