<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },

  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { },
  beforeCreate() { }, // 生命周期 - 创建之前
  beforeMount() { }, // 生命周期 - 挂载之前
  beforeUpdate() { }, // 生命周期 - 更新之前
  updated() { }, // 生命周期 - 更新之后
  beforeUnmount() { }, // 生命周期 - 销毁之前
  unmounted() { }, // 生命周期 - 销毁完成
  activated() { },

  methods: {
    inc() {
      this.counter++
    },

    des() {
      this.counter--
    },
  }, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<template>
  <div>
    累计: {{ counter }}
    <br>

    <button
      class="inc"
      @click="inc()"
    >
      +
    </button>

    <button
      class="des"
      @click="des()"
    >
      -
    </button>
  </div>
</template>
