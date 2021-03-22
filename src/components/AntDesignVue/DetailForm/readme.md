#

import DetailForm from '@/components/DetailForm/Index.vue'

<!-- 详情 -->
<detail-form
  :visible="detailVisible"
  :data="detailData"
  :detailProps="detailProps"
  :title="detailTitle"
  @cancelModal="detailVisible = false"
/>


detailTitle: '维保手册',
detailProps: [
  { label: '工单类型', text: '维修工单' },
  { label: '工单类型', text: '维修工单' },
  { label: '创建时间', prop: 'createTime' },
  { label: '设备名称', prop: 'deviceName' },
  { label: '保养内容', prop: 'maintainContent', textarea: true },
  { label: '地址', prop: 'contactAddress', textarea: true },
]

// detailData
this.getDetail(id).then(detailData => {
    console.log('detailData', detailData)
    this.beforeUpdateItem(detailData)
    this.detailData = detailData.data
})

