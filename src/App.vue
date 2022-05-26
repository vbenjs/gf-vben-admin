<template>
  <VbenConfig>
    <VbenMessageProvider>
      <ConfigProvider :locale="getAntdLocale">
        <AppProvider>
          <RouterView />
          <DogtagModal />
        </AppProvider>
      </ConfigProvider>
    </VbenMessageProvider>
  </VbenConfig>
</template>

<script lang="ts" setup>
  import { ConfigProvider } from 'ant-design-vue';
  import { AppProvider } from '/@/components/Application';
  import { useTitle } from '/@/hooks/web/useTitle';
  import { useLocale } from '/@/locales/useLocale';

  import 'dayjs/locale/zh-cn';
  // support Multi-language
  const { getAntdLocale } = useLocale();

  // Listening to page changes and dynamically changing site titles
  useTitle();
</script>
