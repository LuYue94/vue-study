<template>
  <div>
      <div>

        <div class="box">
            <p class="title"><span>Generator：生成器</span>执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数</p>
            <p class="title"><span>yield：产出</span>yield表达式如果用在另一个表达式之中，必须放在圆括号里面</p>
            <p class="title"><span>yield*</span>用来在一个 Generator 函数里面执行另一个 Generator 函数</p>
            <p class="text">yield命令后面如果不加星号，返回的是整个数组，加了星号就表示返回的是数组的遍历器对象：</p>
            <p class="text">返回一个遍历器对象</p>

            <pre v-highlight>
                <code>
    function* gen(){
    yield* ["a", "b", "c"];
    }

    gen().next() // { value:"a", done:false }
                </code>
            </pre>
        </div>

        <!-- <div class="box">
            <p class="title"></p>
            <pre v-highlight>
                <code>

                </code>
            </pre>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
    name: "generator"
}
</script>

<style lang="scss">

</style>
