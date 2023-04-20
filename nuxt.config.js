import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false, 
  target: 'static',
  
  head: {
    title: 'Vuetify Gym',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'href="https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100;200;300;400;500;600;700;800&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800&display=swap' }
    ]
  },
  
  css: [
    '@/assets/css/main'
  ],
  
  plugins: [
  ],

  loadingIndicator: {
    name: 'cube-grid',
    color: 'black',
    background: 'radial-gradient(circle at center, white, rgba(0,0,0,.2))'
  },
  
  components: true,
  
  buildModules: [
    '@nuxtjs/vuetify', 
    '@nuxtjs/axios'  
  ],
  
  modules: [],
  
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {  
      dark: false,    
      themes: {
        light: {
          primary: '#eaf2f7',
          accent: '#BCAAA4',
          secondary: '#f6f3f0',
          info: '#FFF8E1',
          warning: '#FFEA00',
          error: '#E65100',
          success: '#7CB342'
        }
      }
    }
  },
  
  build: {
  }
}
