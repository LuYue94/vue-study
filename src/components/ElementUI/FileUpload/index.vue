<template>
  <div class="upload-container">
    <div
      class="upload-btn"
      style="display:block;"
    >
      <el-upload
        ref="upload"
        :action="actionUrl"
        :multiple="multiple"
        :show-file-list="true"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-success="handleSuccess"
        :on-error="handleError"
        :before-upload="beforeUpload"
        :on-progress="handleLoading"
        :headers="headers"
        :data="uploadData"
        :auto-upload="false"
        class="image-uploader"
      >
        <el-button size="small">
          <i class="el-icon-upload" /> 点击上传
        </el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
import URLS from '@/api/getUrl'

export default {
  name: 'FileUpload',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    },
    urls: {
      type: Array,
      default: function() {
        return []
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // { attaType } : 操作类型,可用值:technical,rules,import
    uploadData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      upload_url: URLS.upload,
      loading: false,
      fileUrls: [],
      fileUrl: '',
      prefixNginxUrl: process.env.NODE_ENV === 'development' ? '' : '/apis'

    }
  },
  computed: {
    actionUrl() {
      const u = this.url ? this.url + '/import' : this.upload_url
      return this.prefixNginxUrl + u
    }
  },
  methods: {
    handleSuccess(res) {
      this.loading = false
      if (this.multiple) {
        this.fileUrls.push(res.data)
        this.emitInput([...this.fileUrls])
      } else {
        this.fileUrl = res.data
        this.emitInput(this.fileUrl)
      }
    },
    handleError(file) {
      this.loading = false
      this.$message({
        message: '上传失败',
        duration: 2000,
        type: 'warning'
      })
    },
    beforeUpload(file) {

    },
    handleLoading() {
      this.loading = true
    },
    emitInput(files) {
      this.$emit('changeupload', files)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList)
    },
    submit() {
      this.$refs['upload'].submit()
    },
    clearFiles() {
      this.$refs['upload'].clearFiles()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
