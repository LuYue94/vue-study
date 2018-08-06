<template>
  <div>
    <!-- show me the code -->
    <div>
        <div class="box">
            <p class="title"><span>Const</span>块级作用域，不存在变量提升，暂时性死区，不能重复声明，值不可变</p>
            <p class="text">实际上const保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动，例如可以给const定义的对象添加属性，</p>
        </div>

        <div class="box">

            <p class="title"><span>Let</span>块级作用域，不存在变量提升，暂时性死区，不能重复声明</p>
            <p class="text">暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。</p>
            <pre v-highlight>
                <code>
    var a = [];
    for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
    }
    a[6](); // 6
                </code>
            </pre>
        </div>

        <div class="box">
            <p class="title"><span>解构赋值</span>模式匹配，“:”前面是模式，“:”后面是变量</p>
            <p class="text">默认值，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效</p>
            <pre v-highlight>
                <code>
    let [foo = true] = [];
    foo // true

    let [x, y = 'b'] = ['a']; // x='a', y='b'
    let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
    let [x = 1] = [null]; // x = null
                </code>
            </pre>
            <p class="text">对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者</p>
            <pre v-highlight>
                <code>
    let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };

    let { foo: baz } = { foo: "aaa", bar: "bbb" };
    baz // "aaa"
    foo // error: foo is not defined
                </code>
            </pre>
        </div>



        <div class="box">
            <p class="title"><span>字符串扩展</span></p>
            <p class="text"><span>includes()</span></p>
            <p class="text"><span>startsWith()</span></p>
            <p class="text"><span>endsWith()</span></p>
            <p class="text"><span>repeat()</span></p>
            <p class="text"><span>模板字符串</span></p>
            <!-- <pre v-highlight>
                <code>
                
                </code>
            </pre> -->
        </div>

        <div class="box">
            <p class="title"><span>数组的扩展</span></p>
            <p class="text"><span>扩展运算符 ...</span></p>
            <p class="text"><span>Array.from()</span>将类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）装变成真正的数组</p>
            <p class="text"><span>Array.from()第二个参数</span>类似数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组</p>
            <p class="text"><span>Array.of()</span>方法用于将一组值，转换为数组</p>
            <p class="text"><span>fill()</span></p>
            <p class="text"><span>includes()</span></p>
            <p class="text"><span>entries(),keys(),values()</span>用于遍历数组</p>
            <pre v-highlight>
                <code>
    for (let index of ['a', 'b'].keys()) {
    console.log(index);
    }
    // 0
    // 1

    for (let elem of ['a', 'b'].values()) {
    console.log(elem);
    }
    // 'a'
    // 'b'

    for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"
                </code>
            </pre>
        </div>




        <div class="box">
            <p class="title"><span></span></p>
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
    name: "code"
}
</script>

<style lang="scss">

</style>
