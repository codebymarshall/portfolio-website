<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    let y = $state(0);
    let innerWidth = $state(0);
    let innerHeight = $state(0);
		let { children } = $props();  

    function goTop() {
        document.body.scrollIntoView();
    }
</script>

<div
    class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen text-slate-200"
>
    <div
        class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
            (y > 0
                ? " opacity-full pointer-events-auto"
                : " pointer-events-none opacity-0")}
    >
        <button
            onclick={goTop}
            aria-label="Scroll to top"
            class="ml-auto rounded-full bg-slate-900 text-slate-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
        >
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </div>
    <Header {y} {innerHeight}/>
    {@render children()}
    <Footer {y} />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
