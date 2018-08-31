<template>
  <div>
    <article>
      <header class="content-header container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h2>Latest View</h2>
          </div>
        </div>
      </header>
      <div class="content container-fluid">
        <div class="row">
          <info-box v-for="(item, index) in items" :key="index" :item="item"></info-box>
        </div>
      </div>

      <header class="content-header container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h2>Latest Update</h2>
          </div>
        </div>
      </header>
      <div class="content container-fluid">
        <div class="row">
          <info-box v-for="(item, index) in items" :key="index" :item="item"></info-box>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import InfoBox from '@/components/InfoBox'

export default {
  name: 'Dashboard',
  components: {
    InfoBox
  },
  data () {
    return {
      msg1: 'Welcome to Your Vue.js App 1'
    }
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>
