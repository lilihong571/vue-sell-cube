<template>
    <div class="out-wrap">
        <div class="inner-wrap">哈哈哈</div>
        <cube-button>111</cube-button>
        <cube-input></cube-input>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.out-wrap {
  background-color: aqua;
  .inner-wrap {
    color: #ff5a33;
  }
}
</style>
