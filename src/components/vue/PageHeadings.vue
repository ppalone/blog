<template>
  <div class="flex flex-col w-full" v-if="headings.length > 0">
    <div class="px-4 py-2">
      <p>On this page</p>
    </div>
    <div class="flex flex-col w-full">
      <a v-for="heading in headings" :href="`#${heading.slug}`"
        :class="[
          'w-full py-2 px-4 border-l-2 border-gray-100 transition', 
          (current === heading.slug ? 'bg-gray-100' : '')
        ]">
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