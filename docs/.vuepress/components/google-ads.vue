<template>
  <div class="ads-link" v-once>
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6855447887247821"
        data-ad-slot="2671429676"
        data-ad-format="link"
        data-full-width-responsive="true"></ins>
  </div>
</template>
<script>
import VueScript2 from 'vue-script2'
export default {
  data() {
    return {}
  },
  mounted() {
    VueScript2.load(
      '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    ).then(function() {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    })
  }
}
</script>
<style scoped>
.ads-link {
  margin: 10px;
  text-align: center;
}
ins {
  background: none;
}
</style>

