import type { Component, App } from 'vue';

//组件map
export const maps = new Map<String, Component>();
export let useMsg = () => {};
export const setMessage = (func: Fn = () => {}) => {
  useMsg = func;
};
// 引入组件
import { VbenPopover } from './popover';
import { VbenDivider } from './divider';
import { VbenTag } from './tag';
import { VbenTable } from './table';
import { VbenCard } from './card';
import { VbenSpace } from './space';
import { VbenButton, VbenButtonGroup } from './button';
import { VbenAvatar } from './avatar';
import { VbenStatistic } from './statistic';
import { VbenSelect } from './select';
import { VbenInput } from './input';
import { VbenThing } from './thing';
import { VbenPopconfirm } from './popconfirm';
import { VbenIcon } from './icon';
import { VbenCheckbox, VbenCheckboxGroup } from './checkbox';
import { VbenModal } from './modal';
import { VbenEmpty } from './empty';
import { VbenUpload } from './upload';
import { VbenTabs, VbenTabPane } from './tabs';
import { VbenGrid, VbenGridItem } from './grid';
import { VbenEllipsis } from './ellipsis';
import { VbenImage } from './image';
import { VbenMessageProvider } from './message';
import { VbenPagination } from './pagination';
import { VbenRadio, VbenRadioButton, VbenRadioGroup } from './radio';
import { VbenText } from './typography';
import { VbenConfig } from './config';

// 初始化组件
// global 是否全局注册
export function initVbenComponent(app: App, comp: Object, global: boolean = true) {
  Object.keys(comp).forEach((k) => {
    maps.set(k, comp[k]);
  });

  if (!global) return;
  app
    .use(VbenCard)
    .use(VbenTable)
    .use(VbenTag)
    .use(VbenDivider)
    .use(VbenSpace)
    .use(VbenPopover)
    .use(VbenButton)
    .use(VbenButtonGroup)
    .use(VbenAvatar)
    .use(VbenStatistic)
    .use(VbenSelect)
    .use(VbenInput)
    .use(VbenThing)
    .use(VbenPopconfirm)
    .use(VbenIcon)
    .use(VbenCheckbox)
    .use(VbenCheckboxGroup)
    .use(VbenModal)
    .use(VbenEmpty)
    .use(VbenUpload)
    .use(VbenTabs)
    .use(VbenTabPane)
    .use(VbenGrid)
    .use(VbenGridItem)
    .use(VbenEllipsis)
    .use(VbenImage)
    .use(VbenMessageProvider)
    .use(VbenPagination)
    .use(VbenRadio)
    .use(VbenRadioGroup)
    .use(VbenRadioButton)
    .use(VbenText)
    .use(VbenConfig);
}
