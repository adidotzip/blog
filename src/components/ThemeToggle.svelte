<script lang="ts">
  import { onMount } from "svelte";
  let theme = $state<"light" | "dark">(
    typeof document !== "undefined" && document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );
  onMount(() => {
    const saved = localStorage.getItem("theme");
    theme = saved === "light" || saved === "dark" ? saved : "dark";
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
  <span class="material-symbols-rounded theme-icon sun-icon" class:icon-visible={theme === "dark"} aria-hidden="true">light_mode</span>
  <span class="material-symbols-rounded theme-icon moon-icon" class:icon-visible={theme === "light"} aria-hidden="true">dark_mode</span>
</button>
<style>
  .theme-toggle{position:relative;display:inline-grid;width:44px;height:44px;place-items:center;border:0;border-radius:999px;color:var(--m3c-on-surface);background:var(--m3c-surface-container-high);cursor:pointer;transition:background-color 260ms cubic-bezier(.2,0,0,1),color 260ms cubic-bezier(.2,0,0,1),box-shadow 260ms cubic-bezier(.2,0,0,1);}
  .theme-toggle:hover{color:var(--m3c-on-primary-container);background:var(--m3c-primary-container);box-shadow:0 0 0 3px color-mix(in srgb,var(--m3c-primary) 12%,transparent);}
  .theme-icon{position:absolute;display:block;opacity:0;transform:rotate(-35deg) scale(.65);transition:opacity 300ms cubic-bezier(.2,0,0,1),transform 420ms cubic-bezier(.2,0,0,1);}
  .sun-icon.icon-visible{opacity:1;transform:rotate(0) scale(1);}
  .moon-icon.icon-visible{opacity:1;transform:rotate(0) scale(1);}
  :global(html[data-theme="light"]) .sun-icon.icon-visible{opacity:0;transform:rotate(-35deg) scale(.65);}
  :global(html[data-theme="light"]) .moon-icon{opacity:1;transform:rotate(0) scale(1);}
  .theme-toggle:active .theme-icon.icon-visible{opacity:.78;}
  @media (prefers-reduced-motion: reduce){.theme-toggle,.theme-icon{transition:none;}}
  .material-symbols-rounded{font-size:21px;font-variation-settings:"FILL" 0,"wght" 500,"GRAD" 0,"opsz" 24}
</style>
