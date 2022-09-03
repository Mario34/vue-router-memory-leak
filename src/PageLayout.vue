<template>
  <div class="page">
    <div v-for="item in nodeList" class="render-item">
      <h4>
        {{ item.name }}
      </h4>
      <span>node</span>
      <span>node</span>
      <span>node</span>
      <span>node</span>
      <span>node</span>
      <span>node</span>
      <span>node</span>
      <span>node</span>
      <span>node</span>
      <span>node</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  length: {
    type: Number,
    default: 10000,
  }
})
const nodeList = Array.from({ length: props.length }).map((_, index) => ({
  id: index + 1,
  name: `${index + 1}: node content`
}))
</script>

<style>
.render-item {
  margin-bottom: 6px;
  border-bottom: 1px;
}
.render-item span {
  padding: 0 4px;
}

</style>