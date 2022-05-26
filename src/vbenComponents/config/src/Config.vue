<script lang="ts" setup name="VbenConfig">
  import { maps } from '/@/vbenComponents';
  const Config = maps.get('Config');
  import { darkTheme } from 'naive-ui';
</script>
<template>
  <Config v-bind="$attrs" :theme="darkTheme"> <slot></slot></Config>
</template>

<style scoped></style>
