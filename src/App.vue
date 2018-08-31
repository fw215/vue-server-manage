<template>
  <div id="app">
    <div class="wrapper">
      <Header></Header>
      <Aside></Aside>
      <div class="content-wrapper">
        <router-view/>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Aside,
    Footer
  },
  mounted: function () {
    var to = this.$route
    this.createPageTitle(to)
  },
  watch: {
    '$route' (to, from) {
      this.createPageTitle(to)
    }
  },
  methods: {
    createPageTitle: function (to) {
      if (to.meta.title) {
        var setTitle = to.meta.title + ' | MyAPP'
        document.title = setTitle
      } else {
        document.title = 'MyAPP'
      }
    }
  },
  computed: {
    message () {
      return this.$store.state.message
    }
  }
}
</script>
