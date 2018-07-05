<template>
    <div id="not_found">
        <p>404 NOT FOUND</p>
        <router-link to="/home/es6">返回首页</router-link>
    </div>
</template>

<script>
export default {
    name: "404"
}
</script>

<style>
#not_found {
    padding-left: 100px;
    padding-top: 100px;
    color: red;
}

p{
    padding-bottom: 20px;
}
</style>
