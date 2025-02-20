<script>
    export let y;
    let isMenuOpen = false;

    export let tabs = [
        { name: "Projects ", link: "#projects" },
        { name: "About me", link: "#about" },
        { name: "Skills & Tech Stack", link: "#skills" },
        { name: "Resume", link: "#resume" },
        // {name: '', link: ''},
    ];

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-gray-950 border-slate-400 border-r border-l opacity-85"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium">
        <b class="font-bold poppins">Jonathan</b> <span class="">Marshall</span>
    </h1>

    <!-- Mobile Menu Button -->
    <button 
        class="sm:hidden z-50 p-2"
        on:click={toggleMenu}
        aria-label="Toggle menu"
    >
        <div class="w-6 h-5 relative flex flex-col justify-between">
            <span class={"w-full h-0.5 bg-white transform transition-all duration-300 " + (isMenuOpen ? "rotate-45 translate-y-2" : "")}></span>
            <span class={"w-full h-0.5 bg-white transition-all duration-300 " + (isMenuOpen ? "opacity-0" : "opacity-100")}></span>
            <span class={"w-full h-0.5 bg-white transform transition-all duration-300 " + (isMenuOpen ? "-rotate-45 -translate-y-2" : "")}></span>
        </div>
    </button>

    <!-- Mobile Menu Overlay -->
    {#if isMenuOpen}
        <div class="fixed inset-0 bg-gray-950 bg-opacity-95 z-40 sm:hidden">
            <nav class="h-full flex flex-col items-center justify-center gap-8">
                {#each tabs as tab}
                    <a
                        href={tab.link}
                        class="text-xl duration-200 hover:text-slate-400"
                        on:click={toggleMenu}
                    >
                        <p>{tab.name}</p>
                    </a>
                {/each}
                <button
                    class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
                >
                    <a href="https://www.linkedin.com/messaging/compose/?recipient=codebymarshall" target="_blank">
                        <div
                            class="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                        ></div>
                        <h4 class="relative z-9">Get in touch</h4>
                    </a>
                </button>
            </nav>
        </div>
    {/if}

    <!-- Desktop Menu -->
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab}
            <a
                href={tab.link}
                class="duration-200 hover:text-slate-400"
            >
                <p>{tab.name}</p>
            </a>
        {/each}
        <button
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
            <a href="https://www.linkedin.com/messaging/compose/?recipient=codebymarshall" target="_blank">
                <div
                    class="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                ></div>
                <h4 class="relative z-9">Get in touch</h4>
            </a>
        </button>
    </div>
</header>
