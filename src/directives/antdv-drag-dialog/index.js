import Vue from 'vue';

/**
 * @type v-modal-drag
 * @description: antd的modal组件可以拖拽
*/
Vue.directive('modalDrag', function (el) {
    // 在指令update的时候，会找不到DOM元素；需要等DOM生成后在绑定事件。
    Vue.nextTick(() => {
        const dialogHeaderEl = el.querySelector('.ant-modal-header');
        const dragDom = el.querySelector('.ant-modal-content');
        if (!dialogHeaderEl || !dragDom) {
            return
        }
        dialogHeaderEl.style.cursor = 'move';

        // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
        const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);

        dialogHeaderEl.onmousedown = (e) => {
            // 鼠标按下，计算当前元素距离可视区的距离
            const disX = e.clientX - dialogHeaderEl.offsetLeft;
            const disY = e.clientY - dialogHeaderEl.offsetTop;

            // 获取到的值带px 正则匹配替换
            let styL, styT

            // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
            if (sty.left.includes('%')) {
                styL = +document.body.clientWidth * (+sty.left.replace(/%/g, '') / 100)
                styT = +document.body.clientHeight * (+sty.top.replace(/%/g, '') / 100)
            } else {
                styL = +sty.left.replace(/px/g, '')
                styT = +sty.top.replace(/px/g, '')
            }

            document.onmousemove = function (e) {
                // 通过事件委托，计算移动的距离
                let l = e.clientX - disX
                let t = e.clientY - disY

                // 移动当前元素
                dragDom.style.left = `${l + styL}px`
                dragDom.style.top = `${t + styT}px`
            }

            document.onmouseup = function () {
                document.onmousemove = null
                document.onmouseup = null
            }
            // }
        }

    })

})
