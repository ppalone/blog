<template>
  <div class="page-headings">
    <div>
      <p>On this page</p>
    </div>
    <div class="headings">
      <a v-for="heading in headings" :href="`#${heading.slug}`"
        :class="['heading', (current === heading.slug ? 'active' : '')]">
        {{ heading.text }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
const props = defineProps(["headings"])
const current = ref("")
let observer = null;
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        current.value = entry.target.id
      }
    })
  }, {
    rootMargin: "0px 0px -80% 0px"
  })

  props.headings.forEach(heading => {
    const ele = document.querySelector(`#${heading.slug}`)
    observer.observe(ele)
  })
})
</script>

<style>
a.active {
  background-color: rgb(200, 200, 200);
  border-left: 2px solid rgb(200, 200, 200);
}
</style>