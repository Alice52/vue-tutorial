<script>
export default defineComponent({
  setup() {
    const counter = ref(0);
    function inc() {
      counter.value++;
    }
    function des() {
      counter.value--;
    }

    return {
      counter,
      inc,
      des,
    };
  },
});
</script>

<template>
  <div>
    累计: {{ counter }}
    <br />

    <button class="inc" @click="inc()">+</button>

    <button class="des" @click="des()">-</button>
  </div>
</template>
