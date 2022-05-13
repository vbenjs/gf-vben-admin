<script lang="ts" setup name="VbenButton">
  import { maps } from '/@/vbenComponents';
  const Tag = maps.get('Tag');
</script>
<template>
  <Tag v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot> </template
  ></Tag>
</template>

<style scoped></style>
