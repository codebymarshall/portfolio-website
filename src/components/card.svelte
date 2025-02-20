<script>
  export let title;
  export let skills = [];
</script>

<div class="z-[2] p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-slate-700 text-center group hover:border-slate-400 hover:border-2 transition-all duration-200">
  <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">{title}</p>
  <p class="mt-2">&nbsp;</p>
  <div class="flex flex-wrap justify-center gap-6">
    {#each skills as skill}
      <div class="flex flex-col items-center">
        <i class="{skill.icon} fa-2xl"></i>
        <p class="mt-2">&nbsp;</p>
        <p class="mt-2">{skill.name}</p>
      </div>
    {/each}
  </div>
</div>
