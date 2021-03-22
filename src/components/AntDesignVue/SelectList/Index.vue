<template>
  <a-select
    v-model="id"
    class="full-width"
    :size="size"
    :label-in-value="labelInValue"
    :allow-clear="allowClear"
    :mode="mode"
    :showSearch="true"
    :filter-option="filterOption"
    :disabled="disabled"
    :placeholder="placeholder"
    @change="handleChange"
  >
    <a-select-option v-for="item in listData" :key="item[keyName]" :value="+item[keyName]">
      {{ item[valueName] }}
    </a-select-option>
  </a-select>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'SelectList',
  props: {
    value: [String, Number, Array],
    size: {
      type: String, // 'large' |  'small' | 'default'
      default: 'default',
    },
    labelInValue: {
      // OnChange 拿到的value 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes} 的格式
      type: Boolean,
      default: false, // true == {key: string, label: vNodes}  false == value
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String, // 'default' | 'multiple' | 'tags' | 'combobox'
      default: 'default',
    },
    // 不请求接口，直接传入对象
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
    keyName: {
      // data数据的key 名称 默认是id
      type: String,
      default: 'id',
    },
    valueName: {
      // data数据的value 名称 默认是text
      type: String,
      default: 'name',
    },
    api: {
      type: String,
      default: '',
    },
    // 请求接口，额外参数
    params: {
      type: Object,
      default() {
        return {}
      },
    },
    // 用于实现级联
    // 1. 如果设置了basicId，则 hasBasicId=true，basicId非空才请求接口获取数据
    // 2. 没有数据要 clear
    basicId: {
      type: Number,
      default: undefined,
    },
  },
  data() {
    return {
      id: undefined,
      hasBasicId: false, //是否有 basicId
      listData: [],
      paramsObj: {
        currPage: 0,
        pageSize: -1, // -1 表示不分页
      },
      count: 0,
    }
  },
  destroyed() {
    this.count = 0
  },
  created() {
    this.hasBasicId = this.$options.propsData.hasOwnProperty('basicId')

    // this.id = this.value

    if (this.api) {
      this.getData()
    } else {
      // if (this.data) {
      this.convertData()
    }
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal != oldVal) {
        // console.log('newVal', newVal)
        this.id = +newVal
        // console.log('this.listData', this.listData)
      }
    },
    basicId(newVal, oldVal) {
      if (newVal != oldVal) {
        this.getData()
      }
    },
  },
  methods: {
    getData() {
      // 设置了basicId，但还没有值的时候，不请求，等待basicId有值
      if (this.hasBasicId && !this.basicId) {
        return
      }
      request({
        method: 'post',
        url: this.api,
        data: Object.assign(this.paramsObj, this.params),
      })
        .then((res) => {
          console.log('select-list ', res)
          this.listData = res.data
          this.loading = false

          // 如果列表中，没有传进来的值，则清空选择器；
          if (this.value) {
            let tmp = this.listData.filter((item) => {
              return item[this.keyName] == this.value
            })
            if (tmp.length == 0) {
              this.id = undefined
            } else {
              this.id = this.value
            }
          }
        })
        .catch((err) => {
          console.log('err', err)
          this.loading = false
        })
    },
    convertData() {
      const list = []
      for (const i in this.data) {
        list.push({
          id: +i,
          name: this.data[i],
        })
      }
      console.log('list', list)
      this.listData = list
    },
    handleChange(value) {
      console.log('value', value)

      this.$emit('input', value)
    },
    filterOption(input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    },
  },
}
</script>

<style scoped>
</style>
