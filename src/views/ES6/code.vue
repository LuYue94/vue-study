<template>
  <div>
    show me the code
        <div>
            <pre v-highlight>
                <code>
    function init(){
        $scope.req.getArticle();
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }
                </code>
            </pre>
        </div>
  </div>
</template>

<script>
export default {
    name: "ES6_code"
}
</script>

<style lang="scss">
</style>
