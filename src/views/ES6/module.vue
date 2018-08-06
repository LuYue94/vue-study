<template>
  <div>
      <div>

        <div class="box">
            <p class="title">export</p>
            <p class="text">export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系</p>
            <p class="text">export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值</p>
            <pre v-highlight>
                <code>
    // 变量
    // 写法一
    export var m = 1;

    // 写法二
    var m = 1;
    export {m};

    // 写法三
    var n = 1;
    export {n as m};

    // 方法
    // 1
    export function f() {};

    // 2
    function f() {}
    export {f};

    function v1() { ... }
    function v2() { ... }

    export {
        v1 as streamV1,
        v2 as streamV2,
        v2 as streamLatestVersion
    };

                </code>
            </pre>
        </div>

        <div class="box">
            <p class="title">import</p>
            <p class="text">建议凡是输入的变量，都当作完全只读，轻易不要改变它的属性</p>
            <pre v-highlight>
                <code>
    import { area, circumference } from './circle';

    console.log('圆面积：' + area(4));
    console.log('圆周长：' + circumference(14));

    // 也可以用 *
    import * as circle from './circle';

    console.log('圆面积：' + circle.area(4));
    console.log('圆周长：' + circle.circumference(14));
                </code>
            </pre>
        </div>

        <div class="box">
            <p class="title">export default</p>
            <p class="text">本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字</p>
        </div>

        <div class="box">
            <p class="title">export 和 import 的复合写法</p>
            <p class="text">本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字</p>
            <pre v-highlight>
                <code>
    export { foo, bar } from 'my_module';

    // 可以简单理解为
    import { foo, bar } from 'my_module';
    export { foo, bar };

    export { es6 as default } from './someModule';

    // 等同于
    import { es6 } from './someModule';
    export default es6;
                </code>
            </pre>
        </div>


        <div class="box">
            <p class="title">export default</p>
            <p class="text"></p>
            <pre v-highlight>
                <code>

                </code>
            </pre>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "module"
}
</script>

<style lang="scss">

</style>
