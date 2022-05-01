<script lang="ts" setup>
  import { useModalInner } from '/@/components/Modal';
  import BasicModal from '/@/components/Modal/src/BasicModal.vue';
  import BasicForm from '/@/components/Form/src/BasicForm.vue';
  import { useForm } from '/@/components/Form';
  import { computed, ref } from 'vue';
  import { Curd } from '/@/api/Curd';
  const title = computed(() => (id.value == 0 ? '新增' : '编辑'));
  const id = ref(0);
  const emit = defineEmits(['success']);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    schemas: [
      { field: 'name', label: '角色名', component: 'Input' },
      { field: 'value', label: '角色值', component: 'Input' },
    ],
    showActionButtonGroup: false,
  });
  const [register, { closeModal }] = useModalInner((data) => {
    resetFields();
    id.value = data.id || 0;
    if (data) {
      setFieldsValue(data);
    }
  });
  const handleOK = async () => {
    const data = await validate();
    data.i = 'role';
    data.id = id.value;
    if (id.value != 0) {
      data.a = 'edit';
    } else {
      data.a = 'add';
    }
    await Curd(data);
    closeModal();
    emit('success');
  };
</script>
<template>
  <BasicModal @register="register" :title="`${title}角色`" @ok="handleOK">
    <BasicForm @register="registerForm"></BasicForm>
  </BasicModal>
</template>
