<template>
  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="info-box">
      <span class="info-box-icon bg-aqua">
        <i class="fa fa-car"></i>
      </span>
      <div class="info-box-content">
        <span class="info-box-text">{{item.title}}</span>
        <span class="info-box-number progress-description">{{item.description}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
