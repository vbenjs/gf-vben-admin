<script lang="ts" setup name="VbenForm">
  import { maps } from '/@/vbenComponents';
  import { NSkeleton } from 'naive-ui';
  const Form = maps.get('Form');
</script>
<template>
  <Form v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot> </template
  ></Form>
</template>

<style scoped></style>
