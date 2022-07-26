<script setup lang="ts">
// 必须有 setup lang

// 这里必须使用 ref 否则会丢失双向绑定

// version 0
/* // 也是可以生效的: 解引用赋值的, 本质还是引用
let counter = $ref(0)
// let counter = ref(0).value // 不会双向绑定
function inc() {
  counter++
}
function des() {
  counter--
}
*/

// version 1
const counter = ref(0);
function inc() {
  counter.value++;
}
function des() {
  counter.value--;
}

const related = computed(() => counter.value * 2);
onMounted(() => console.log("execute onMounted..."));
</script>

<template>
  <div>
    累计: {{ counter }}
    <br />
    加倍: {{ related }}
    <br />

    <button class="inc" @click="inc()">+</button>

    <button class="des" @click="des()">-</button>
  </div>
</template>
