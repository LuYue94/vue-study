```html
<select-list
  v-model="formData.provId"
  placeholder="请选择省"
  :api="$root.api.sysProvCityArea"
  keyName="sysCode"
  valueName="sysName"
  :params="{sysLevel:1}"
/>
<select-list
  v-model="formData.areaId"
  placeholder="请选择市"
  :api="$root.api.sysProvCityArea"
  keyName="sysCode"
  valueName="sysName"
  :basicId="formData.provId"
  :params="{parentCode:formData.provId,sysLevel:2}"
/>
<select-list
  v-model="formData.companyId"
  placeholder="请选择所属公司"
  :api="$root.api.sysCompany+'_list'"
  keyName="companyId"
  valueName="companyName"
  :basicId="formData.areaId"
  :params="{cityId:formData.areaId}"
/>
<select-list
  v-model="formData.factoryId"
  placeholder="请选择厂区"
  :api="$root.api.sysDepartment+'_list'"
  keyName="departmentId"
  valueName="departmentName"
  :basicId="formData.companyId"
  :params="{companyId:formData.companyId,departmentLevel: 1}"
/>
<select-list
  v-model="formData.workshopId"
  placeholder="请选择车间"
  :api="$root.api.sysDepartment+'_list'"
  keyName="departmentId"
  valueName="departmentName"
  :basicId="formData.companyId"
  :params="{companyId:formData.companyId,departmentLevel: 2}"
/>
```