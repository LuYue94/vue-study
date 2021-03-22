// main.js
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'vYvK7kil22UtRIvOLPGpoSI0kgP39sqQ'
})

<Map
  :longitude="formData.longitude"
  :latitude="formData.latitude"
  :visible="visibleMap"
  @close="closeMap"
  @success="getPosition"
></Map>

getPosition (pos) {
    console.log('pos', pos)
    this.formData.longitude = pos.lng
    this.formData.latitude = pos.lat
    this.setPosition()
    this.closeMap()
},
closeMap () {
    this.visibleMap = false
},
setPosition () {
    this.positionText = this.formData.longitude && '经度：' + this.formData.longitude + '   纬度：' + this.formData.latitude
},