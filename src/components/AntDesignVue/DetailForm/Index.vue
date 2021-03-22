<template>
  <a-modal
    v-modal-drag
    :title="modalTitle"
    dialog-class="modal-top-pos"
    :mask-closable="false"
    :keyboard="false"
    :destroy-on-close="true"
    width="60%"
    :visible="modalVisible"
    @cancel="cancelModal"
  >

    <a-spin size="large" :spinning="spinning">
      <a-form-model
        ref="detailModel"
        :model="formData"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <template v-for="item in detailProps">
          <a-form-model-item :label="item.label" :prop="item.prop" :key="item.prop">
            <a-textarea v-if="item.textarea" v-model="formData[item.prop]" read-only />
            <a-input v-else :value="item.prop?formData[item.prop]:item.text" read-only />
          </a-form-model-item>
        </template>
      </a-form-model>
    </a-spin>

    <div slot="footer">
      <a-button @click="cancelModal">关闭</a-button>
    </div>
  </a-modal>
</template>

<script>

export default {
    name: 'DetailForm',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        data: {
            type: Object,
            default: () => {
                return {}
            }
        },
        detailProps: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    watch: {
        data (val) {
            this.spinning = false
        }
    },
    data () {
        return {
            confirmLoading: false,
            wrapperCol: { span: 12 },
            labelCol: { span: 6 },
            spinning: true
        }
    },
     computed: {
        modalTitle () {
            return this.title + '详情'
        },
        formData () {
            return this.data
        },
        modalVisible () {
            return this.visible
        }
    },
    methods: {
        cancelModal () {
            this.$refs.detailModel.resetFields()
            this.spinning = true
            this.$emit('cancelModal', false)
        }
    }
}
</script>

<style scoped>

</style>
