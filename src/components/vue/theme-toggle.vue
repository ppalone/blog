<template>
  <div class="relative w-10 h-10 overflow-hidden rounded border bg-gray-100 dark:bg-slate-600">
    <input type="checkbox" name="theme-toggle" id="theme-toggle" class="hidden" v-model="isDark">
    <label for="theme-toggle" class="flex flex-col absolute cursor-pointer transition select-none">
      <div class="w-10 h-10 flex justify-center items-center">🌞</div>
      <div class="w-10 h-10 flex justify-center items-center">🌙</div>
    </label>
  </div>
</template>

<script setup>
import { useDark } from "@composables/useDark";
const { isDark } = useDark()
</script>

<style>
#theme-toggle:checked+label {
  transform: translateY(-50%);
}
</style>