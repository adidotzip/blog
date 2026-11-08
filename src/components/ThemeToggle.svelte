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
    const root = document.documentElement;
    theme = theme === "dark" ? "light" : "dark";
    root.classList.add("theme-transitioning");
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    window.setTimeout(() => {
      root.classList.remove("theme-transitioning");
    }, 360);
  }
</script>
<button class="theme-toggle" type="button" onclick={toggleTheme} aria-label="Toggle color theme" title="Toggle theme">
  <span class="material-symbols-rounded" aria-hidden="true">{theme === "dark" ? "light_mode" : "dark_mode"}</span>
</button>
<style>
  .theme-toggle{display:inline-grid;width:44px;height:44px;place-items:center;border:0;border-radius:999px;color:var(--m3c-on-surface);background:var(--m3c-surface-container-high);cursor:pointer;transition:background-color 180ms ease,color 180ms ease,box-shadow 180ms ease,transform 180ms ease;}
  .theme-toggle:hover{color:var(--m3c-on-primary-container);background:var(--m3c-primary-container);box-shadow:0 0 0 3px color-mix(in srgb,var(--m3c-primary) 14%,transparent);transform:scale(1.04);}
  .theme-toggle:active{transform:scale(.96);}
  @media (prefers-reduced-motion: reduce){.theme-toggle{transition:none;}.theme-toggle:hover,.theme-toggle:active{transform:none;}}
  .material-symbols-rounded{font-size:21px;font-variation-settings:"FILL" 0,"wght" 500,"GRAD" 0,"opsz" 24}
</style>
