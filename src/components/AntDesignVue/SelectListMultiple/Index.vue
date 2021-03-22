<template>
  <a-select
    v-model="ids"
    class="full-width"
    :size="size"
    :label-in-value="labelInValue"
    :allow-clear="allowClear"
    mode="multiple"
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
  name: 'SelectListMultiple',
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
    // TODO
    // 1. 如果有basicId，则直到basicId有值才获取数据
    // 2. 没有数据要 clear
    basicId: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ids: {
      get() {
        let arr = []
        arr = this.value ? this.value.split(',') : []
        arr = arr.map((item) => {
          return Number(item)
        })
        console.log('arr', arr)
        return arr
      },
      set() {},
    },
  },
  data() {
    return {
      listData: [],
      paramsObj: {
        currPage: 0,
        pageSize: -1, // -1 表示不分页
      },
    }
  },
  created() {
    if (this.data) {
      this.convertData()
    }
    if (this.api) {
      this.getData()
    }
  },
  watch: {
    basicId(newVal, oldVal) {
      if (newVal != oldVal) {
        this.getData()
      }
    },
  },
  methods: {
    getData() {
      request({
        method: 'post',
        url: this.api,
        data: Object.assign(this.paramsObj, this.params),
      })
        .then((res) => {
          console.log('select-list ', res)
          this.listData = res.data
          this.loading = false
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

      this.$emit('input', value.join(','))
    },
  },
}
</script>

<style scoped>
</style>
