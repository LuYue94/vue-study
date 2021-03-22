## 基于elementUI


```html
<el-row>
  <el-col :span="16">
    <el-form-item
      label="选择文件："
    >
      <FileUpload
        ref="fileUpload"
        :url="AjaxUrl"
        @changeupload="changeUpload"
      />
    </el-form-item>
  </el-col>
</el-row>
```
```js
import FileUpload from '@/components/FileUpload'

this.$refs['fileUpload'].submit()
```