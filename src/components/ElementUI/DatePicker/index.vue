<template>
  <div class="timebox">
    <span>开始</span>
    <el-date-picker
      v-model="startDate"
      type="date"
      value-format="yyyy-MM-dd"
      placeholder="选择日期"
      @change="changeDate1"
    />
    <span style="margin-left:10px;">结束</span>
    <el-date-picker
      v-model="endDate"
      type="date"
      value-format="yyyy-MM-dd"
      placeholder="选择日期"
      @change="changeDate2"
    />
  </div>
</template>

<script>

export default {
  props: {
    dateRange: {
      type: Array,
      default() {
        return ['', '']
      }
    }
  },
  data() {
    return {
      startDate: '',
      endDate: ''
    }
  },
  watch: {
    dateRange: {
      handler(n, o) {
        if (n.length > 0) {
          this.startDate = n[0]
          this.endDate = n[1]
        } else {
          this.startDate = ''
          this.endDate = ''
        }
      },
      deep: true
    }
  },
  created() {
    if (this.dateRange) {
      this.startDate = this.dateRange[0]
      this.endDate = this.dateRange[1]
    } else {
      this.startDate = ''
      this.endDate = ''
    }
  },
  methods: {
    changeDate1(val) {
      this.startDate = val
      this.change()
    },
    changeDate2(val) {
      this.endDate = val
      this.change()
    },
    change() {
      if (this.startDate && this.endDate) {
        if (this.startDate > this.endDate) {
          this.$message({
            type: 'error',
            message: '结束时间必须大于等于开始时间'
          })
          this.endDate = ''
          this.startDate = ''
          return
        }
      }
      this.$emit('timeChange', [this.startDate, this.endDate])
    }
  }
}
</script>

<style>
.timebox{
    display: flex;
    align-items: center;
}
.timebox span{
    font-size: 14px;
    margin-right: 5px;
}
</style>
