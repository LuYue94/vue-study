<template>
  <div class="clearfix">
    <a-upload
      :action="$root.api.imageUpload"
      list-type="picture-card"
      :multiple="true"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 3">
        <a-icon type="plus" />
        <div class="ant-upload-text">上传图片</div>
      </div>
    </a-upload>
    <a-modal v-modal-drag :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  watch: {
    value(newV, oldV) {
      this.setDefaultFileList()
    },
  },
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [],
      defaultFileList: [], // 已上传
    }
  },
  created() {
    this.setDefaultFileList()
  },
  methods: {
    setDefaultFileList() {
      if (this.value) {
        this.fileList = []
        const urls = this.value.split(',')
        urls.forEach((item, index) => {
          this.fileList.push({
            uid: index,
            status: 'done',
            name: index + '.png',
            url: item.includes('http://') ? item : 'http://' + item,
          })
        })
        console.log('this.fileList', this.fileList)
      }
    },
    handleCancel() {
      this.previewVisible = false
    },
    handlePreview(file) {
      this.previewImage = file.url
      this.previewVisible = true
    },
    handleChange({ fileList }) {
      this.fileList = fileList

      // 组件会多次调用此方法
      // 上传完成，再进行下一步
      const isSuccess = fileList.every((item) => {
        return item.status == 'done'
      })

      if (isSuccess) {
        const url = fileList.map((item) => {
          if (item.response && item.response.data) {
            return item.response.data
          } else {
            return item.url
          }
        })
        console.log('url', url)
        this.$emit('input', url.join(','))
      }
    },
  },
}
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
