<template>
  <div>
    <a-spin :spinning="spinning">
      <a-tree-select
        v-model="id"
        allowClear
        dropdownClassName="treeSelectList"
        tree-data-simple-mode
        style="width: 100%"
        placeholder="请选择"
        :dropdown-style="{ maxHeight: '600px', overflow: 'auto' }"
        :tree-data="treeData"
        :treeDefaultExpandAll="true"
        :showSearch="true"
        :filterTreeNode="handleSearch"
        @select="onSelect"
      >
        <template slot="title" slot-scope="record">
          <div class="customTitle">
            <span class="storehouseIcon" v-if="record.type == 1" />
            {{ record.text }}
          </div>
        </template>
      </a-tree-select>
    </a-spin>
  </div>
</template>

<script>
import request from "@/utils/request";
import service from "@/config/service";

export default {
  name: "StoreHouseTree",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      treeData: [],
      spinning: false,
      id: "",
    };
  },
  watch: {
    id(newVal, oldVal) {
      this.id = newVal;
    },
  },
  created() {
    this.id = this.value;
    this.getData();
  },
  methods: {
    getData() {
      request({
        method: "get",
        url: service.department + "/treeBox",
        params: {},
      }).then((data) => {
        this.convertToTree(data);
      });
    },
    onSelect(selectedKeys, vnode) {
      let type = vnode.dataRef.type;
      // let id = vnode.eventKey
      // console.log('vnode',id)
      this.$emit("input", selectedKeys);
      this.$emit("change", selectedKeys, type);
    },
    convertToTree(list) {
      let pid = sessionStorage.getItem("user").pid;
      console.log("pId", pid);
      const tree = [];
      this.listToTree(list, tree, pid);
      this.treeData = tree;
      console.log("tree", tree);
    },
    listToTree(list, tree, parentId) {
      list.forEach((item) => {
        // 判断是否为父级菜单
        if (item.pid === parentId) {
          const child = {
            id: item.id,
            value: item.id,
            key: item.id,
            text: item.text,
            type: item.type,
            scopedSlots: { title: "title" },
            children: [],
          };
          // 迭代 list， 找到当前菜单相符合的所有子菜单
          this.listToTree(list, child.children, item.id);
          // 删掉不存在 children 值的属性
          if (child.children.length <= 0) {
            delete child.children;
          }
          // 加入到树中
          tree.push(child);
        }
      });
    },
    handleSearch(inputValue, node) {
      return node.componentOptions.propsData.dataRef.text.includes(inputValue);
    },
  },
};
</script>

<style lang="scss">
.customTitle {
  .storehouseIcon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("~@/assets/images/storehouse.png") no-repeat center center;
    background-size: cover;
    vertical-align: sub;
  }
}
</style>
