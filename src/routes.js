import About from './components/About.vue';
import Resume from './components/Resume.vue';
import Music from './components/Music';
import Welcome from './components/Welcome';

export default[
    {path:'/about', component: About, meta: {title: 'About' }},
    {path: '/resume', component: Resume, meta: {title: 'Resume' }},
    {path: '/music', component: Music, meta: {title: 'Music' }},
    {path: '/', component: Welcome, meta: {title: 'Banner' }}
]



