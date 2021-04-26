import About from './components/About.vue';
import Resume from './components/Resume.vue';
import BitBucket from './components/BitBucket';
import Music from './components/Music';
import Welcome from './components/Welcome';

export default[
    {path:'/about', component: About},
    {path: '/resume', component: Resume},
    {path: '/bitbucket', component: BitBucket},
    {path: '/music', component: Music},
    {path: '/', component: Welcome}
]