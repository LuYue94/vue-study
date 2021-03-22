<template>
  <a-range-picker
    style="width:100%"
    v-model="range"
    :placeholder="placeholder"
    :separator="separator"
    @change="onChange"
  />
</template>

<script>
import moment from 'moment'
export default {
    name: 'DateRangePicker',
    props: {
        placeholder: {
            type: Array,
            default: () => {
                return [ '开始日期', '结束日期' ]
            }
        },
        separator: {
            type: String,
            default: '至'
        },
        value: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data () {
        return {
            range: null
        }
    },
    watch: {
        value (newValue, oldValue) {
            const value = newValue
            if (value.length > 0) {
                const [start, end] = value
                this.range = [ moment(start), moment(end) ]
            } else {
                this.range = []
            }
        }
    },
    methods: {
        onChange (range) {
            let rangeData = []
            if (range && range.length) {
                const [ start, end ] = range
                rangeData = [start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')]
            }
            this.$emit('setRangeDate', rangeData)
        }
    }
}
</script>

<style scoped>

</style>
