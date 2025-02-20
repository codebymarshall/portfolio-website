<script>
  export let href = ""; // If href exists, use <a>, otherwise use <button>
  export let text = "";
  export let target = "_self";
  export let className = "";
  export let onClick = () => {}; // Click event handler for <button>
  export let icon = ""; // FontAwesome or other icon class
  export let dynamicText = null; // Function to determine text dynamically
</script>

{#if href}
  <!-- Link Button -->
  <a 
    href={href} 
    target={target} 
    class={`z-[2] blueShadow px-4 py-2 rounded-full border border-solid border-white flex items-center gap-2 sm:-mb-0 -mt-10 hover:border-cyan-700 duration-200 relative overflow-hidden group bg-white text-slate-950 cursor-pointer ${className}`}
  >
    <div class="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
    {#if icon}
      <i class="{icon} relative z-3"></i>
    {/if}
    <p class="relative z-3">{#if dynamicText}{@html dynamicText()} {:else}{text}{/if}
  </a>
{:else}
  <!-- Regular Button -->
  <button 
    on:click={onClick} 
    class={`z-[2] blueShadow px-4 py-2 rounded-full border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-cyan-700 duration-200 relative overflow-hidden group bg-white text-slate-950 cursor-pointer ${className}`}
  >
    <div class="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
    {#if icon}
      <i class="{icon} relative z-3"></i>
    {/if}
    <p class="relative z-3">{dynamicText ? dynamicText() : text}</p>
  </button>
{/if}
