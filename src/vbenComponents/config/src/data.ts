import { ref } from 'vue';
export enum ThemeEnum {
  Light,
  Dark,
}

export const theme = ref(ThemeEnum.Dark);
