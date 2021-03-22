<template>
  <div class="upload-container">
    <div
      class="upload-btn"
      style="display:block;"
    >
      <el-upload
        :action="upload_url"
        :multiple="multiple"
        :show-file-list="false"
        :on-success="handleSuccess"
        :on-error="handleError"
        :before-upload="beforeUpload"
        :on-progress="handleLoading"
        :headers="headers"
        class="image-uploader"
      >
        <el-button size="small">
          <i class="el-icon-upload" /> 点击上传
        </el-button>
      </el-upload>
    </div>
    <div style="clear:both;" />
    <template v-if="!loading">
      <div class="image-preview image-app-preview">
        <div v-if="multiple">
          <div
            v-for="(item,index) in imgUrls"
            :key="index"
            class="image-preview-wrapper multiple__wrap"
          >
            <img
              :src="item"
              class="multiple__img"
            >
            <div class="image-preview-action">
              <i
                class="el-icon-delete"
                @click="rmImageItem(item)"
              />
            </div>
          </div>
        </div>
        <div v-else>
          <div
            v-show="p_imgUrl && p_imgUrl.length > 1"
            class="image-preview-wrapper"
          >
            <video
              v-if="isVideo"
              :src="p_imgUrl"
              controls="controls"
              width="100%"
            />
            <img
              v-else
              :src="p_imgUrl"
            >
            <div
              :class="{ 'isvideo': isVideo }"
              class="image-preview-action"
            >
              <i
                class="el-icon-delete"
                @click="rmImage"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="loading">
        <i class="el-icon-loading" />
      </div>
    </template>
  </div>
</template>

<script>
import URLS from '@/api/getUrl'
export default {
  name: 'ImgUpload',
  props: {
    isVideo: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    imgUrl: {
      type: String,
      default: ''
    },
    imgUrls: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      loading: false,
      videoType: {
        'video/mp4': true,
        'video/ogg': true,
        'video/avi': true
      },
      upload_url: URLS.imgUpload,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      p_imgUrl: this.imgUrl
    }
  },
  watch: {
    imgUrl(newVal, oldVal) {
      if (newVal != oldVal) {
        this.p_imgUrl = newVal
      }
    },
    imgUrls(newVal, oldVal) {
      if (newVal != oldVal) {
        this.imgUrls = newVal
      }
    }
  },
  created() {
    // getToken().then(res => {
    //   this.qiniuData.token = res.result
    // })

  },
  methods: {
    // 移除图片
    rmImage(url) {
      this.p_imgUrl = ''
      this.emitInput('')
    },
    // 多图，移除某一张图片
    rmImageItem(url) {
      console.log(url)
      this.emitInput(this.imgUrls.filter(item => item !== url))
    },
    // 传播
    emitInput(imgs) {
      this.$emit('changeupload', imgs)
    },
    // 上传成功
    handleSuccess(res) {
      this.loading = false
      console.log(res)
      console.log(this.imgUrls)
      if (this.multiple) {
        this.imgUrls.push(res.data)
        this.emitInput([...this.imgUrls])
      } else {
        this.p_imgUrl = res.data
        this.emitInput(this.p_imgUrl)
      }
    },
    // 上传失败
    handleError(file) {
      this.loading = false

      this.$message({
        message: '上传失败',
        duration: 2000,
        type: 'warning'
      })
    },
    beforeUpload(file) {
      // console.log(file.size)
      const isLt10M = file.size / 1024 / 1024 < 10
      if (this.isVideo) {
        if (this.videoType[file.type] && isLt10M) {
          return true
        } else {
          this.$message({
            message: '只允许上传小于10M以下的视频',
            duration: 2000,
            type: 'warning'
          })
          return false
        }
      }
      // const isJPG = file.type === 'image/jpeg'
      // const isPNG = file.type === 'image/png'
      // const isLt2M = file.size / 1024 / 1024 < 2
      // if (!isJPG&&!isPNG) {
      //   this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isPNG && isLt2m
    },
    handleLoading() {
      this.loading = true
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.upload-container {
	width: 100%;
	position: relative;
	@include clearfix;
	.image-uploader {
		float: left;
	}
	.image-preview {
		min-height: 50px;
		position: relative;
		border: 1px dashed #d9d9d9;
		height: auto;
		overflow: hidden;
		// float: left;
		// margin-left: 50px;
		.image-preview-wrapper {
			position: relative;
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}

		.multiple__wrap {
			width: 49%;
			height: auto;
			float: left;
			margin-right: 1%;
			margin-bottom: 1%;
		}
		.image-preview-action {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 60px;
			height: 60px;
			border-radius: 30px;
			margin-left: -30px;
			margin-top: -30px;
			line-height: 60px;
			text-align: center;
			display: flex;
			align-items: cneter;
			justify-content: center;
			cursor: default;
			color: #fff;
			opacity: 1;
			background-color: rgba(0, 0, 0, 0.5);
			transition: opacity 0.3s;
			cursor: pointer;
			.el-icon-delete {
				font-size: 36px;
				line-height: 60px;
			}
		}
		.isvideo {
			position: absolute;
			top: 10%;
			left: 50%;
		}
		// &:hover {
		//   .image-preview-action {
		//     opacity: 1;
		//   }
		// }
	}
	.image-app-preview {
		display: block;
		position: relative;
		border: 1px dashed #d9d9d9;
		line-height: 0;
		.img {
			display: block;
		}
		.app-fake-conver {
			height: 44px;
			position: absolute;
			width: 100%; // background: rgba(0, 0, 0, .1);
			text-align: center;
			line-height: 64px;
			color: #fff;
		}
	}
}

.loading {
	width: 100%;
	min-height: 50px;
	position: relative;
	border: 1px dashed #d9d9d9;
	height: auto;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	.icon-loading {
		animation: loading-rotate 1s linear infinite;
		color: #409eff;
	}
}
</style>
