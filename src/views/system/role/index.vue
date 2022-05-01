<script lang="ts" setup>
  import { Button } from '/@/components/Button';

  import { BasicTable, useTable } from '/@/components/Table';
  import { Curd } from '/@/api/Curd';
  import { useModal } from '/@/components/Modal';
  import RoleModal from './RoleModal.vue';
  const [registerRoleModal, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    api: Curd,
    beforeFetch: (p) => {
      p.i = 'role';
      p.a = 'list';
      return p;
    },
    title: '角色列表',
    showIndexColumn: false,
    showTableSetting: true,
    bordered: true,
    columns: [
      {
        dataIndex: 'id',
        title: '角色ID',
        width: 100,
      },
      {
        dataIndex: 'name',
        title: '角色名称',
      },
      {
        dataIndex: 'value',
        title: '角色值',
      },
      { dataIndex: 'action', title: '操作' },
    ],
  });

  const handleOpenModal = (v) => {
    openModal(true, v);
  };
  const success = () => {
    reload();
  };
  const delRole = async (id) => {
    await Curd({ i: 'role', a: 'del', id });
    reload();
  };
</script>

<template>
  <div class="p-2">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleOpenModal"> 新增角色 </a-button>
      </template>
      <template #bodyCell="{ text, record, index, column }">
        <template v-if="column.key === 'action'">
          <div class="">
            <Button type="success" @click="handleOpenModal(record)">编辑</Button>
            <Button type="error" @click="delRole(record.id)">删除</Button></div
          >
        </template>
      </template>
    </BasicTable>
    <RoleModal @register="registerRoleModal" @success="success" />
  </div>
</template>
