<template>
  <div>
      <div>

        <div class="box">
            <p class="title"><span>async</span>async 函数是什么？一句话，它就是 Generator 函数的语法糖。</p>
            <p class="text">async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已</p>
            <p class="text">Generator 函数的执行必须靠执行器，而async函数自带执行器。</p>
            <p class="text">返回值是 Promise</p>

            <p class="text">指定多少毫秒后输出一个值：</p>
            <pre v-highlight>
                <code>
    timeout(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve,ms);
        })
    }

    asyncPrint:async function (value,ms){
        this.time = "开始-"
        await this.timeout(ms)
        this.time += "等待中-"
        await this.timeout(ms)
        this.time += "等待1000ms-"
        await this.timeout(ms)
        this.time += value
    }

    @click="asyncPrint('finish',500)"
                </code>
            </pre>
            <button @click="asyncPrint('finish',500)">开始</button>
            <p class="log">{{ time }}</p>
        </div>

        <div class="box">
            <p class="title">async 函数的多种使用形式：</p>
            <pre v-highlight>
                <code>
    // 函数声明
    async function foo() {}

    // 函数表达式
    const foo = async function () {};

    // 对象的方法
    let obj = { async foo() {} };
    obj.foo().then(...)

    // Class 的方法
    class Storage {
    constructor() {
        this.cachePromise = caches.open('avatars');
    }

    async getAvatar(name) {
        const cache = await this.cachePromise;
        return cache.match(`/avatars/${name}.jpg`);
    }
    }

    const storage = new Storage();
    storage.getAvatar('jake').then(…);

    // 箭头函数
    const foo = async () => {};

                </code>
            </pre>
        </div>

        <div class="box">
            <p class="title">错误处理，执行多任务</p>
            <pre v-highlight>
                <code>
    async function main() {
        // 错误处理
        try {
            // 继发，一个接一个
            const val1 = await ajax1();
            const val2 = await ajax2(val1);
            const val3 = await ajax3(val1, val2);

            // 并发执行
            let a = ajax1()
            let b = ajax2()
            let c = ajax3()
            let val1 = await ajax1();
            let val2 = await ajax2();
            let val3 = await ajax3();

            console.log('Final: ', val3);
        }
        catch (err) {
            console.error(err);
        }
    }

    // 并发请求，按次序输出
    async function logInOrder(urls) {
        // 并发读取远程URL
        const textPromises = urls.map(async url => {
            const response = await fetch(url);
            return response.text();
        });

        // 按次序输出
        for (const textPromise of textPromises) {
            console.log(await textPromise);
        }
    }
                </code>
            </pre>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "async",
    data() {
        return {
            time: 0
        }
    },
    methods: {
        timeout(ms) {
            return new Promise(resolve => {
                setTimeout(resolve, ms)
            })
        },
        async asyncPrint(value, ms) {
            this.time = "开始-"
            await this.timeout(ms)
            this.time += "等待中-"
            await this.timeout(ms)
            this.time += "等待1000ms-"
            await this.timeout(ms)
            this.time += value
        }


    }
}
</script>

<style lang="scss">
</style>
