<template>
  <div class="table_pagination">
    <a-pagination
      v-model="pageNumber"
      show-size-changer
      show-quick-jumper
      :page-size.sync="pageSizeNumber"
      :page-size-options="pageSizeOptions"
      :total="totalNumber"
      :show-total="(total, range) => `${range[0]}-${range[1]} 总计 ${totalNumber} 条`"
      @showSizeChange="onShowSizeChange"
      @change="onShowPageChange"
    />
  </div>
</template>

<script>
export default {
    name: 'TablePagination',
    props: {
        total: {
            type: Number,
            default: 0
        },
        currPage: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 15
        }
    },
    data () {
        return {
            pageSizeOptions: ['10', '15', '20', '30', '50']
        }
    },
    computed: {
        totalNumber: {
            get () {
                return this.total
            },
            set () {

            }
        },
        pageNumber: {
            get () {
                return this.currPage
            },
            set () {

            }
        },
        pageSizeNumber: {
            get () {
                return this.pageSize
            },
            set () {

            }
        }
    },
    methods: {
        onShowSizeChange (currPage, pageSize) {
            this.$emit('showSizeChange', pageSize)
        },
        onShowPageChange (page, pageSize) {
            this.$emit('change', page)
        }
    }
}
</script>

<style scoped>

</style>
