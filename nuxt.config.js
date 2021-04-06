const pkg = require('./package')


module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Redirecting...",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "title", content: "Khmer Angkor | Virtual Khmer New Year 2021" },
      {
        hid: "description",
        name: "description",
        content:
          "Join us for the 24th annual celebration of Cambodian (Khmer) New Year!"
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://khmerangkor.net" },
      { property: "og:title", content: "Khmer Angkor | Virtual Khmer New Year 2021" },
      { property: "og:description", content: "Join us for the 24th annual celebration of Cambodian (Khmer) New Year!" },
      { property: "og:image", content: "https://khmerangkor.net/cover_040621.png" },
      { property: "og:image:secure_url", content: "https://khmerangkor.net/cover_040621.png" },
      { property: "twitter:card", content: "We sincerely invite you to join us for the 24th annual celebration of Cambodian (Khmer) New Year celebration, hosted by the Oakland Cambodian Dance Troupe, through Zoom. Join us for an afternoon of good company and of viewing tradition dance performances at the convenience of your location!" },
      { property: "twitter:url", content: "https://khmerangkor.net" },
      { property: "twitter:title", content: "Khmer Angkor | Virtual Khmer New Year 2021" },
      { property: "twitter:description", content: "We sincerely invite you to join us for the 24th annual celebration of Cambodian (Khmer) New Year celebration, hosted by the Oakland Cambodian Dance Troupe, through Zoom. Join us for an afternoon of good company and of viewing tradition dance performances at the convenience of your location!" },
      { property: "twitter:image", content: "https://khmerangkor.net/cover_040621.png" }
    ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      // {
      //   rel: "stylesheet",
      //   type: "text/css",
      //   href:
      //     "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      // },
      // {
      //   rel: "stylesheet",
      //   type: "text/css",
      //   href: "https://fonts.googleapis.com/css?family=Cabin:700,900&display=swap"
      // }
    ],
    script: [
      // {
      //   src:
      //     "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
      // },
      // { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
      // {
      //   src:
      //     "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
      // }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
    // '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
