import { withInstall } from '/@/utils';
import Descriptions from './src/Descriptions.vue';
import DescriptionsItem from './src/DescriptionsItem.vue';
import { DESCRIPTION_ITEM_FLAG } from 'naive-ui/es/descriptions/src/utils';
// @ts-ignore
DescriptionsItem[DESCRIPTION_ITEM_FLAG] = true;

export const VbenDesc = withInstall(Descriptions);
export const VbenDescItem = withInstall(DescriptionsItem);
