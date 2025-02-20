<script>
    import Buttons from "./buttons.svelte";
    export let step;
</script>

<a
    href={step.href}
    target="_blank"
    class="relative z-[5] p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-slate-700 text-center cursor-pointer group hover:border-slate-400 duration-200"
>
    <div
        class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <i class={step.icon} ></i>
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
        {step.name}
    </h3>
    <slot />
    <div class="flex-1 flex justify-betweeen gap-4 items-end py-6">
        <Buttons text="Go to →" href="{step.href}" target="_blank" className="ml-auto" />
    </div>
</a>
