<template>
    <div class="out-wrap">
        <div class="inner-wrap">哈哈哈</div>
        <cube-button>{{seller}}</cube-button>
        <cube-input></cube-input>
    </div>
</template>

<script>
import {getSeller} from 'api';

export default {
  name: "HelloWorld",
  data() {
    return {
        seller: {}
    }
  },
  props: {
    msg: String
  },
  created() {
    getSeller().then((seller) => {
      this.seller = seller;
    })
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
