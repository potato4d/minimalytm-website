import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  srcDir: 'src',
  mode: 'universal',
  head: {
    title: 'minimalytm - Minimal YouTube Music Player built with Electron',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Minimal awesome YouTube Music player built with Electron' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/css/tailwind.css'
  ],
  modules: [
    'nuxt-device-detect',
    ['@nuxtjs/google-analytics', {
      id: 'UA-135633858-3'
    }]
  ]
}

export default config
