<script lang="ts">
  import { onMount } from "svelte";
  let theme = $state<"light" | "dark">("dark");
  onMount(() => {
    const saved = localStorage.getItem("theme");
    const preferred = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    theme = saved === "light" || saved === "dark" ? saved : preferred;
    document.documentElement.dataset.theme = theme;
  });
  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }
</script>
<button class="theme-toggle" type="button" onclick={toggleTheme} aria-label="Toggle color theme" title="Toggle theme">
  <span class="material-symbols-rounded" aria-hidden="true">{theme === "dark" ? "light_mode" : "dark_mode"}</span>
</button>
<style>
  .theme-toggle{display:inline-grid;width:44px;height:44px;place-items:center;border:0;border-radius:999px;color:var(--m3c-on-surface);background:var(--m3c-surface-container-high);cursor:pointer;}
  .theme-toggle:hover{background:var(--m3c-secondary-container)}
  .material-symbols-rounded{font-size:21px;font-variation-settings:"FILL" 0,"wght" 500,"GRAD" 0,"opsz" 24}
</style>
