<template>
  <div class="flex flex-col">
    <p class="font-bold text-lg py-4 my-2">🖇 On this page</p>
    <div class="flex flex-col">
      <a 
      v-for="(heading, idx) in headings" 
      :key="idx"
      :class="[
        'py-2 pl-4 border-l-4 dark:border-slate-600',
        (current == heading.slug ? 'active' : '')
      ]"
        :href="`#${heading.slug}`" 
      >
        {{ heading.text }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue"
const props = defineProps(["headings"])
const current = ref("")

// observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      current.value = entry.target.getAttribute("id")
    }
  })
}, {
  rootMargin: "0px 0px -90% 0px"
})

// on mounted
onMounted(() => {
  // observer headings from the markdown content 
  props.headings.forEach(heading => {
    const ele = document.querySelector(`#${heading.slug}`)
    if (ele) {
      observer.observe(ele)
    }
  })
})

// before unmounted
onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<style scoped>
.active {
  @apply bg-gray-200 dark:bg-slate-600
}
</style>