<script lang="ts" setup name="VbenInput">
  import { maps } from '/@/vbenComponents';
  const Input = maps.get('Input');
</script>
<template>
  <Input v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot> </template
  ></Input>
</template>

<style scoped></style>
