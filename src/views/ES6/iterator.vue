<template>
  <div>
      <div>

        <div class="box">
            <p class="title"><span>Iterator：遍历器</span></p>
            <p class="text">一是为各种数据结构，提供一个统一的、简便的访问接口；</p>
            <p class="text">二是使得数据结构的成员能够按某种次序排列；</p>
            <p class="text">三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费</p>
            <br>
            <p class="text"><span>原生具备 Iterator 接口的数据结构如下</span></p>
            <p class="text">Array</p>
            <p class="text">Map</p>
            <p class="text">Set</p>
            <p class="text">String</p>
            <p class="text">TypedArray</p>
            <p class="text">函数的 arguments 对象</p>
            <p class="text">NodeList 对象</p>
            <br>
            <p class="text"><span>调用 Iterator 接口的场合</span></p>
            <p class="text">解构赋值</p>
            <p class="text">for...of</p>
            <p class="text">扩展运算符 ...</p>
            <p class="text">yield*</p>
            <p class="text">Array.from()</p>
            <p class="text">Map(),Set(),WeakMap(),WeakSet()</p>
            <p class="text">Promise.all()</p>
            <p class="text">Promise.race()</p>
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
    name: "iterator"
}
</script>

<style lang="scss">

</style>
