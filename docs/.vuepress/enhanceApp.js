/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  if (typeof window !== 'undefined') {
    import('vue-google-adsense')
      .then(module => {
        const Ads = module.default
        Vue.use(require('vue-script2'))
        Vue.use(Ads.Adsense)
        Vue.use(Ads.InArticleAdsense)
        Vue.use(Ads.InFeedAdsense)
      })
      .catch(e => {
        console.log(e)
      })
  }
}




