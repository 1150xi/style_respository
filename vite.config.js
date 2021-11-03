import {createVuePlugin} from 'vite-plugin-vue2'

export default {
    base: '/',
    server: {
        port: 3000,
        open: true
    },
    plugins: [
        createVuePlugin()
    ]
}