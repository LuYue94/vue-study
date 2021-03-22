<select-list-multiple
  v-model="formData.receiveUsers"
  placeholder="请选择用户"
  :api="$root.api.sysUser+'_list'"
  keyName="userId"
  valueName="userNick"
/>