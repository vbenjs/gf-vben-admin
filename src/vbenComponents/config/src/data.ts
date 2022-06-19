import { useAppStoreWithOut } from '/@/store/modules/app';
import { computed } from 'vue';

export enum ThemeEnum {
  Light = 'light',
  Dark = 'dark',
}
const appStore = useAppStoreWithOut();
export const theme = computed(() => appStore.getDarkMode);
