<script lang="ts" setup name="VbenDivider">
  import { maps } from '/@/vbenComponents';
  const Divider = maps.get('Divider');
</script>
<template>
  <Divider v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot> </template
  ></Divider>
</template>

<style scoped></style>
