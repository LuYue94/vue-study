<table-pagination
  :total="total"
  :curr-page="currPage"
  :page-size="pageSize"
  @showSizeChange="onShowSizeChange"
  @change="onShowPageChange"
/>

// 分页初始化及每次修改获取列表
onShowSizeChange(pageSize) {
    this.currPage = 1
    this.pageSize = pageSize

    this.loading = true
    this.getData()
},
onShowPageChange(page) {
    this.currPage = page

    this.loading = true
    this.getData()
}