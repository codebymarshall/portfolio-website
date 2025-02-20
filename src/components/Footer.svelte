<script>
    export let y;
</script>

<footer
    id="contact"
    class={"relative z-[5] py-20 sm:py-32 border-r border-t border-l border-solid border-slate-400 flex flex-col gap-4 sm:gap-8 justify-center items-center " +
        (y > 0
            ? "bg-gray-950/85"
            : "bg-gray-950")}
>
    <p class="px-4 py-2 bg-white text-slate-950 font-medium">
        Connect with me &darr;
    </p>
    <div class="flex flex-col gap-4 items-center justify-center">
        <p>
            <b class="pr-2">Email:</b>
            <a href="mailto:jonathanmarshall.it@protonmail.com" target="_blank" class="text-slate-400"
                >jonathanmarshall.it@protonmail.com<sup class=""
                    ><span class="text-xs scale-75 pl-0.5"
                        ><i
                            class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span
                    ></sup
                ></a
            >
        </p>
        <p>
            <b class="pr-2">GitHub:</b>
            <a href="https://github.com/codebymarshall" target="_blank" class="text-slate-400"
                >codebymarshall<sup class=""
                    ><span class="text-xs scale-75 pl-0.5"
                        ><i
                            class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span
                    ></sup
                ></a
            >
        </p>
        <p>
            <b class="pr-2">LinkedIn:</b>
            <a href="https://www.linkedin.com/in/codebymarshall/" target="_blank" class="text-slate-400"
                >codebymarshall<sup class=""
                    ><span class="text-xs scale-75 pl-0.5"
                        ><i
                            class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span
                    ></sup
                ></a
            >
        </p>
    </div>
</footer>
