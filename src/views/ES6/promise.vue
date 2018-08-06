<template>
  <div>
      <div>
        <div class="box">
            <p class="title"><span>Promise：承诺</span>有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）</p>
            <p class="text">一旦状态改变，就不会再变，Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）</p>
            <p class="text">一下用 Promise 对象实现 Ajax 操作</p>
            <pre v-highlight>
                <code>
    const getJSON = function(url) {
        const promise = new Promise(function(resolve, reject){
            const handler = function() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            const client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();

        });

        return promise;
    };

    getJSON("/posts.json").then(function(json) {
        console.log('Contents: ' + json);
    }, function(error) {
        console.error('出错了', error);
    });
                </code>
            </pre>
        </div>

        <div class="box">
            <p class="title"><span>Promise.prototype.then()</span>为 Promise 实例添加状态改变时的回调函数</p>
            <p class="title"><span>Promise.prototype.catch()</span>发生错误时的回调函数</p>
            <p class="title"><span>Promise.prototype.finally()</span>用于指定不管 Promise 对象最后状态如何，都会执行的操作</p>
            <p class="text"></p>
            <pre v-highlight>
                <code>
    promise
        .then(function(data) { //cb
            // success
        })
        .catch(function(err) {
            // error
        });

    promise
        .then(result => {···})
        .catch(error => {···})
        .finally(() => {···});
                </code>
            </pre>
        </div>

        <div class="box">
            <p class="title"><span>Promise.all([p1, p2, p3])</span></p>
            <p class="text">（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。</p>
            <p class="text">（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。</p>
            <p class="title"><span>Promise.race([p1, p2, p3])</span></p>
            <p class="text">只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。</p>
            <p class="title"><span>Promise.resolve()</span></p>
            <p class="title"><span>Promise.reject()</span></p>
            <pre v-highlight>
                <code>
                
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
    name: "promise"
}
</script>

<style lang="scss">

</style>
