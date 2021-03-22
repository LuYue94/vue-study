<template>
    
  <div class="equipmentTree">
     <a-input-search
      style="margin-bottom: 8px"
      placeholder="检索省市、用户单位、厂区、车间、设备"
      @change="onSearchValueChange"
      class="item1"
    />
     <a-space class="item2"
      >    
      <p>设备状态：</p>
      <a-radio-group
        :options="searchTypeMap"
        v-model="searchType"
        @change="onSearchTypeChange"
      />
    </a-space>
        <!-- :show-line="true" -->
        <!-- :show-icon="true" -->
        <!-- :default-expand-all="defaultExpandAll" -->
        
    <div class="item3">
      <a-tree
        :auto-expand-parent="autoExpandParent"
        :expanded-keys="expandedKeys"
        :tree-data="gData"
        @select="onSelect"
        @expand="onExpand"
        :filterTreeNode="filterTreeNode"
      >
        <template slot="title" slot-scope="record">
          <!-- 设备状态 -->
          <a-icon
            type="null"
            class="cricle_icon"
            :class="'type' + record.deviceStatus"
            v-if="record.type == 'device'"
          />
          <!-- 搜索，关键词高亮 -->
          <span v-if="record.title.indexOf(searchValue) > -1">
                        {{
              record.title.substr(0, record.title.indexOf(searchValue))
            }}
            <span style="color: #f50">{{ searchValue }}</span>
                        {{
              record.title.substr(
                record.title.indexOf(searchValue) + searchValue.length
              )
            }}
          </span>
           <span v-else>{{ record.title }}</span>         
        </template>
      </a-tree>
    </div>
  </div>
</template>

<script>
import test from "./test.js";
// import request from '@/utils/request'

// 将树转成list
const generateList = (data) => {
  // console.log('data', data)
  const dataList = [];
  const generate = (data) => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const { key, title, type } = node;
      dataList.push({ key, title, type });
      if (node.children) {
        generate(node.children);
      }
    }
  };
  generate(data);
  return dataList;
};

// 获取父节点的key
const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};
export default {
  data() {
    return {
      gData: [],
      dataList: [],
      expandedKeys: [],
      searchValue: "",
      autoExpandParent: true,
      defaultExpandAll: true,
      searchType: "0",
      searchTypeMap: [
        { label: "所有", value: "0" },
        { label: "离线", value: "1" },
        { label: "在线", value: "2" },
        { label: "预警", value: "3" },
        { label: "报警", value: "4" },
      ],
    };
  },
  created() {
    // console.log('this.gData', this.gData)
    // console.log('test', test)
    this.getTreeData();
  },
  methods: {
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    filterTreeNode(node) {
      let { deviceStatus, type } = node.dataRef;
      if (type == "device") {
        if (this.searchType == 0) {
          //   所有设备
          return true;
        } else {
          return deviceStatus == this.searchType;
        }
      } else {
        return false;
      }
    },
    onSelect(selectedKeys, info) {
      // console.log('selected', selectedKeys, info)
      //   let key = selectedKeys[0].split('_')[1]
      let key = selectedKeys;
      this.$emit("selectedKey", key);
    },
    getTreeData() {
      let tree = test;
      // console.log('tree', res.tree)
      this.addScopedSlots(tree);
      // console.log('tree', tree)
      this.gData = tree;
      this.dataList = generateList(tree); // console.log('this.dataList', this.dataList) // 默认展开车间
      this.expandDevice();
      // request({
      //   method: "get",
      //   url: this.$root.api.EquipmentTree,
      //   params: {},
      // }).then((res) => {
      //   let tree = res.data; // console.log('tree', res.tree)
      //   this.addScopedSlots(tree); // console.log('tree', tree)
      //   this.gData = tree;
      //   this.dataList = generateList(tree); // console.log('this.dataList', this.dataList) // 默认展开车间
      //   this.expandDevice();
      // });
    },
    addScopedSlots(arr) {
      arr.forEach((item) => {
        item["scopedSlots"] = {
          title: "title",
        };
        if (item.children && item.children.length > 0) {
          this.addScopedSlots(item.children);
        }
      });
    },
    onSearchValueChange(e) {
      const value = e.target.value; // console.log('value', value) // console.log('this.dataList', this.dataList)
      const expandedKeys = this.dataList
        .map((item) => {
          if (item.title.indexOf(value) > -1) {
            return getParentKey(item.key, this.gData);
          }
          return null;
        })
        .filter((item, i, self) => item && self.indexOf(item) === i); // console.log('expandedKeys', expandedKeys)
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true,
      });
    },
    onSearchTypeChange(e) {
      const value = e.target.value;
      this.$emit("selectedType", value);

      this.expandDevice();
    },
    expandDevice() {
      const workshopKeys = [];
      this.dataList.forEach((item) => {
        if (item.type == "workshop") {
          workshopKeys.push(item.key);
        }
      });
      this.expandedKeys = workshopKeys;
      this.autoExpandParent = true; // console.log('expandedKeys', workshopKeys)
    },
  },
};
</script>

<style lang="less">
.equipmentTree {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .item1 {
  }
  .item2 {
    p {
      width: 70px;
      margin: 0;
    }
  }
  .item3 {
    margin-top: 20px;
    border: 1px solid #eee;
    overflow: auto;
  }
  .cricle_icon {
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }
  .ant-radio-wrapper {
    margin-right: 0;
  }
  .type1 {
    background: #4b4b4b;
  }
  .type2 {
    background: #00ff00;
  }
  .type3 {
    background: #ffc53d;
  }
  .type4 {
    background: #ff0000;
  }
}
</style>