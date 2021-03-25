
<template>
  <div>
    <div class="option_btn_group">
      <a-button type="primary" icon="plus" @click="handleAdd" v-permission="'SettingMenu:add'"> 新增 </a-button>
      <a-button :disabled="!disabled" icon="plus" type="primary" @click="handleAddLeaf">新增子节点</a-button>
      <a-button :disabled="!disabled" icon="edit" type="primary" @click="handleEdit">编辑</a-button>
      <a-button :disabled="!disabled" icon="delete" type="danger" @click="handleDel">删除</a-button>
    </div>
    <a-alert style="margin-top:8px" message="对菜单的任何修改，都会在重新登录后生效。" type="info" show-icon />
    <a-tree :defaultExpandParent="true" :tree-data="menuTreeData" @select="onSelect" 
    >
    <!-- :draggable="true" @drop="drop" -->
      <template slot="title" slot-scope="record">
        {{ record.title }}
        <div class="menu_tree_options">
          <span>{{ record.menuPerms }}</span>
          <span>{{ record.key }}</span>
          <span>{{ $root.config.menuType[record.menuType] }}</span>
        </div>
      </template>
    </a-tree>
    <a-empty v-if="!menuTreeData || menuTreeData.length <= 0" />

    <!-- 编辑、新增 -->
    <update-form
      :visible="modalVisible"
      :data="formData"
      @cancelModal="cancelModal"
      @successCallback="successCb"
      url="sysMenu"
    />
  </div>
</template>

<script>
// import TableList from '@/mixins/TableList.js'
import UpdateForm from './UpdateForm.vue'
import request from '@/utils/request'

export default {
  // mixins: [TableList],
  components: { UpdateForm },
  created() {
    this.apiUrl = this.$root.api['sysMenu']
    this.getData()
  },
  data() {
    return {
      menuTreeData: [],
      selectedKey: '',
      disabled: false,
      modalVisible: false,
      menuData: {},
      formData: {},
    }
  },
  methods: {
    addItem() {},
    onSelect(selectedKey, info) {
      console.log('onSelect', selectedKey, info)
      this.selectedKey = selectedKey
      if (selectedKey.length > 0) {
        this.disabled = true
        this.menuData = Object.assign({}, info.node.dataRef)
        this.formData = Object.assign({}, info.node.dataRef)
      } else {
        this.disabled = false
        this.menuData = {}
        this.formData = {}
      }
    },
    getData() {
      // 获取全部权限
      request({
        method: 'post',
        url: this.$root.api.sysMenu + '_list',
        data: { pageSize: -1 },
      })
        .then((res) => {
          this.convertToTree(res.data)
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
    convertToTree(list) {
      // 后端数据, 根级树数组,  根级 PID
      const tree = []
      this.listToTree(list, tree, 0)
      this.menuTreeData = tree
      console.log('tree', tree)
    },
    /**
     * 数组转树形结构
     * @param list 源数组
     * @param tree 树
     * @param parentId 父ID
     */
    listToTree(list, tree, parentId) {
      list.forEach((item) => {
        // 判断是否为父级菜单
        if (item.parentId === parentId) {
          const child = {
            ...item,
            key: item.menuId,
            title: item.menuTitle,
            scopedSlots: { title: 'title' },
            children: [],
          }
          // 迭代 list， 找到当前菜单相符合的所有子菜单
          this.listToTree(list, child.children, item.menuId)
          // 删掉不存在 children 值的属性
          if (child.children.length <= 0) {
            delete child.children
          }
          // 加入到树中
          tree.push(child)
        }
      })
    },
    handleAdd() {
      this.modalVisible = true
      this.menuData = {}
      this.formData = {}
    },
    handleAddLeaf() {
      this.modalVisible = true
      let { menuId, menuType } = this.menuData
      this.formData = {
        parentId: menuId,
        menuType: menuType + 1,
      }
      console.log('this.formData', this.formData)
    },
    handleEdit() {
      this.modalVisible = true
    },
    // 删除数据
    handleDel() {
      const obj = {
        menuId: this.menuData.menuId,
        delete: true,
      }

      this.$confirm({
        title: '确认删除？',
        content: '该操作会删除数据，请小心使用',
        okType: 'danger',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          request({
            method: 'post',
            url: this.apiUrl + '_save',
            data: obj,
          }).then((res) => {
            console.log('res', res)
            this.$message.success('操作成功')
            this.getData()
          })
        },
        onCancel: () => {},
      })
    },
    cancelModal() {
      this.modalVisible = false
    },
    successCb() {
      this.getData()
    },
    drop({event, node, dragNode, dragNodesKeys}){
      console.log('event, node, dragNode, dragNodesKeys',event, node, dragNode, dragNodesKeys)
    }
  },
}
</script>

<style lang="less" scoped>
/deep/.ant-tree li .ant-tree-node-content-wrapper {
  width: 98%;
}
.ant-tree{
  user-select: none;
}
.menu_tree_options {
  float: right;
  // .ant-btn {
  //   // background: transparent;
  //   margin-right: 10px;
  // }
  span {
    margin-right: 10px;
  }
}
</style>
