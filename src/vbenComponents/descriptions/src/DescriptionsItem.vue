<script lang="ts" setup name="VbenDescItem">
  import { maps } from '/@/vbenComponents';
  const DescriptionsItem = maps.get('DescriptionsItem');
  console.log(DescriptionsItem, 111);
</script>
<template>
  <DescriptionsItem v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot> </template
  ></DescriptionsItem>
</template>

<style scoped></style>
