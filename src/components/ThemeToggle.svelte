<script lang="ts">
  import { onMount } from "svelte";
  let theme = $state<"light" | "dark">("dark");
  let iconVisible = $state(true);
  onMount(() => {
    const saved = localStorage.getItem("theme");
    const preferred = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    theme = saved === "light" || saved === "dark" ? saved : preferred;
    document.documentElement.dataset.theme = theme;
  });
  function toggleTheme() {
    if (!iconVisible) return;

    const root = document.documentElement;
    iconVisible = false;

    window.setTimeout(() => {
      theme = theme === "dark" ? "light" : "dark";
      root.classList.add("theme-transitioning");
      root.dataset.theme = theme;
      localStorage.setItem("theme", theme);
      iconVisible = true;

      window.setTimeout(() => {
        root.classList.remove("theme-transitioning");
      }, 360);
    }, 140);
  }
</script>
<button class="theme-toggle" type="button" onclick={toggleTheme} aria-label="Toggle color theme" title="Toggle theme">
  <span class="material-symbols-rounded theme-icon" class:icon-hidden={!iconVisible} aria-hidden="true">{theme === "dark" ? "light_mode" : "dark_mode"}</span>
</button>
<style>
  .theme-toggle{display:inline-grid;width:44px;height:44px;place-items:center;border:0;border-radius:999px;color:var(--m3c-on-surface);background:var(--m3c-surface-container-high);cursor:pointer;transition:background-color 260ms cubic-bezier(.2,0,0,1),color 260ms cubic-bezier(.2,0,0,1),box-shadow 260ms cubic-bezier(.2,0,0,1);}
  .theme-toggle:hover{color:var(--m3c-on-primary-container);background:var(--m3c-primary-container);box-shadow:0 0 0 3px color-mix(in srgb,var(--m3c-primary) 12%,transparent);}
  .theme-icon{display:block;opacity:1;transition:opacity 140ms ease;}
  .theme-icon.icon-hidden{opacity:0;}
  .theme-toggle:active .theme-icon{opacity:.72;}
  @media (prefers-reduced-motion: reduce){.theme-toggle,.theme-icon{transition:none;}}
  .material-symbols-rounded{font-size:21px;font-variation-settings:"FILL" 0,"wght" 500,"GRAD" 0,"opsz" 24}
</style>
