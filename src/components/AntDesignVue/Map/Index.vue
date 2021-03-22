<template>
  <a-modal
    v-modal-drag
    title="选择位置"
    dialog-class="modal-top-pos"
    :mask-closable="false"
    :keyboard="false"
    :destroy-on-close="true"
    width="80%"
    :visible="modalVisible"
    @cancel="cancelModal"
  >
    <!-- ak -->
    <!-- ak="vYvK7kil22UtRIvOLPGpoSI0kgP39sqQ" -->
    <baidu-map
      class="map"
      :style="mapStyle"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @click="getClickInfo"
      @moving="syncCenterAndZoom"
      @moveend="syncCenterAndZoom"
      @zoomend="syncCenterAndZoom"
    >
      <bm-marker
        :position="{ lng: center.lng, lat: center.lat }"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
      </bm-marker>
      <bm-control :offset="{ width: '10px', height: '10px' }">
        <bm-auto-complete v-model="keyword" :sugStyle="{ zIndex: 999999 }">
          <input
            type="text"
            placeholder="请输入搜索关键字"
            class="serachinput"
          />
        </bm-auto-complete>
      </bm-control>
      <bm-local-search
        :keyword="keyword"
        :auto-viewport="true"
        style="width: 0px; height: 0px; overflow: hidden"
      ></bm-local-search>

      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
    </baidu-map>
    <div slot="footer">
      <a-button @click="cancelModal">关闭</a-button>
      <a-button @click="confirm">确定</a-button>
    </div>
  </a-modal>
</template>

<script>
// https://www.cnblogs.com/moqq/p/8489299.html

export default {
  name: "Map",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    longitude: {
      type: Number,
      default: undefined,
    },
    latitude: {
      type: Number,
      default: undefined,
    },
  },
  watch: {
    longitude(val) {
      this.center.lng = this.longitude;
    },
    latitude(val) {
      this.center.lat = this.latitude;
    },
  },
  data() {
    return {
      mapStyle: {
        width: "100%",
        height: 500 + "px",
        // height: this.mapHeight + 'px',
      },
      center: { lng: 116.404, lat: 39.915 },
      zoom: 15,
      keyword: "",
    };
  },
  computed: {
    modalVisible() {
      return this.visible;
    },
  },
  methods: {
    getClickInfo(e) {
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    },
    syncCenterAndZoom(e) {
      const { lng, lat } = e.target.getCenter();
      this.center.lng = lng;
      this.center.lat = lat;
      this.zoom = e.target.getZoom();
    },
    cancelModal() {
      this.$emit("close", false);
    },
    confirm() {
      this.$emit("success", this.center);
    },
  },
};
</script>

<style scoped>
</style>
