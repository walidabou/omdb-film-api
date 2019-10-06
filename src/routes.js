import Vue from 'vue';
import VueRouter from 'vue-router';

//Components
import LatestMovie from './components/LatestMovie';
import Movie from './components/Movie';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: LatestMovie
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        component: Movie
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
