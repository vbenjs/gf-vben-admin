<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './menu.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { Curd } from '/@/api/Curd';

  const emit = defineEmits(['success', 'register']);
  const isUpdate = ref(true);
  const id = ref(0);
  const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
    labelWidth: 100,
    schemas: formSchema,
    showActionButtonGroup: false,
    baseColProps: { lg: 12, md: 24 },
  });

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    resetFields();
    setDrawerProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;
    const { record } = data;

    console.log(record);
    if (unref(isUpdate)) {
      id.value = record.id;
      setFieldsValue({
        ...record,
        title: record.meta.title,
      });
    }

    let treeData = [{ name: '无父级', value: 0, id: 0 }];
    const res = await Curd({ i: 'router', a: 'list' });
    treeData = treeData.concat(res.items);
    // console.log(treeData);
    updateSchema({
      field: 'parent',
      componentProps: { treeData },
    });
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '新增菜单' : '编辑菜单'));

  async function handleSubmit() {
    try {
      const values = await validate();
      setDrawerProps({ confirmLoading: true });
      // TODO custom api
      console.log(values);
      if (unref(isUpdate)) {
        await Curd({ i: 'router', a: 'edit', id: id.value, ...values });
      } else {
        await Curd({ i: 'router', a: 'add', ...values });
      }

      closeDrawer();
      emit('success');
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }
</script>
