<template>
  <div id="app">
    <div class="wrapper">
      <Header></Header>
      <Aside></Aside>
      <div class="content-wrapper">
        <router-view/>
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'

export default {
  name: 'App',
  components: {
    Header,
    Aside
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
