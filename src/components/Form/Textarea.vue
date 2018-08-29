<template>
  <td @dblclick="changeUI">
    <span v-show="!isInput">{{internalValue}}</span>
    <textarea class="form-control" ref="textarea"
    v-model="internalValue" v-show="isInput" @blur="isInput = false"></textarea>
  </td>
</template>

<style>
.table > tbody > tr > td {
  padding: 0px;
}
</style>

<script>
export default {
  name: 'FormTextarea',
  props: {
    value: {},
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      isInput: false
    }
  },
  computed: {
    internalValue: {
      get () {
        return this.value
      },
      set (newVal) {}
    }
  },
  methods: {
    changeUI: function () {
      this.isInput = true
      this.$nextTick(() => this.$refs.textarea.focus())
    }
  }
}
</script>
