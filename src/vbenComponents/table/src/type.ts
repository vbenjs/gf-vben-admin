import type { VxeGridProps } from 'vxe-table';
import { VxeGridPropTypes } from 'vxe-table';

export type VbenTableProps<D = any> = VxeGridProps<D> & {
  api?: Function;
  Params?: Object;

  title?: string;
  pagination?: boolean | VxeGridPropTypes.PagerConfig;
  afterFetch?: Fn;
};
