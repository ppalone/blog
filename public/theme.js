const theme = localStorage.getItem("blog.ppalone.theme")
if (theme && theme === "dark") {
  document.documentElement.classList.add("dark")
}