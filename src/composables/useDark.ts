import { onMounted, ref, watch } from "vue";

const KEY = "blog.ppalone.theme";

export const useDark = () => {
  const isDark = ref(false);

  watch(isDark, (val) => {
    if (val) {
      localStorage.setItem(KEY, "dark")
      document.documentElement.classList.add("dark")
    } else {
      localStorage.setItem(KEY, "light")
      document.documentElement.classList.remove("dark")
    }
  })

  onMounted(() => {
    const theme = localStorage.getItem(KEY)
    if (!theme) {
      localStorage.setItem(KEY, "light")
      return
    }
    switch (theme) {
      case "dark":
        isDark.value = true;
        return
      default:
        return   
    }
  })

  return {
    isDark
  }
}