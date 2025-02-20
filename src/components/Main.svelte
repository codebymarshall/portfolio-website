<script>
    import Step from "./Step.svelte";

    let steps = [
        {
            name: "E-commerce Store Demo",
            icon: "fa-solid fa-cart-shopping",
            description:
                "A modern e-commerce store built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates a fully functional e-commerce platform with features like product browsing, cart management, user authentication, and secure payments.",
            href:"https://github.com/codebymarshall/eccomerce-store"
        },
        {
            name: "Vacation Tracker App",
            icon: "fa-solid fa-list-check",
            description:
                "Using Java, Room Framework (SQLite Database), Android SDK (Version 34), Gradle Build System. This application helps you organize your future vacations and excursions with a beautiful, user-friendly interface.",
            href: "https://github.com/codebymarshall/mobile-app"
        },
        {
            name: "Pipeline Pilot",
            icon: "fa-solid fa-diagram-project",
            description:
                "The Pipeline Pilot is a streamlined, end-to-end CI/CD pipeline that integrates AI-powered code analysis. I leveraged DevOps methodologies, containerization, orchestration, and AI integration to build a scalable, efficient system. Designed as a manageable, demo-ready MVP, it showcases automation and intelligent code evaluation to enhance development workflows (coming soon).",
            href:"https://github.com/codebymarshall/pipeline-pilot"
        },
    ];

    let benefits = [
        {
            metric: "10x",
            name: "a software engineer",
            description:
                "I developed my programming skills through formal education and hands-on experience, earning a bachelor's degree in software engineering. I fell in love with the creativity and problem-solving involved in developing and engineering innovative software solutions. Starting with Java, JavaScript, and Python, I expanded my expertise to include full-stack development, backend programming, cloud services, and software design. My passion for technology drives me to continuously learn and build scalable, high-performance applications.",
        },
        {
            name: "a problem solver",
            description:
                "Building and engineering software solutions allows me to channel my creativity while tackling complex challenges. I thrive on solving problems through innovative design and development, constantly learning new technologies and refining my skills. I enjoy creating seamless, high-performance applications that enhance user experiences and drive efficiency.",
        },
        {
            name: "an excellent communicator",
            description:
                "Effective communication is essential to successful software development, and I prioritize transparency and collaboration in every project. I believe in clear, constructive discussions that foster strong teamwork and drive productivity. By maintaining open communication, I build meaningful professional relationships and contribute to a more efficient and cohesive work environment.",
        },
    ];

    let showVideo = false;

    function toggleVideo(event) {
        event.preventDefault();
        showVideo = !showVideo;
    }
</script>

<main class="flex flex-col flex-1 p-4 text-slate-200">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-5xl">
                Hi! I'm <span class="poppins text-cyan-400">Jonathan</span> Marshall
                <br />Full Stack
                <span class="poppins text-cyan-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-cyan-400"> favorite tech</span> includes Java, JavaScript (Next.js, React, Angular), TailwindCSS, Node.js with Express.js, and PostgreSQL.
            </p>
            <a href="https://www.linkedin.com/messaging/compose/?recipient=codebymarshall" target="_blank" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 z-2">
                <div class="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="z-0">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"/images/profile.png"}
                alt="Jonathan Marshall"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>
    </section>
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-cyan-400">see</span> my work?
            </h3>
        </div>
        <button
            on:click={toggleVideo}
            class="z-[2] blueShadow mx-auto px-4 py-2 rounded-full border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-cyan-700 duration-200 relative overflow-hidden group bg-white text-slate-950 cursor-pointer"
        >
            <div class="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
            <i class="fa-regular fa-circle-play relative z-9"></i>
            <p class="relative z-9">{showVideo ? 'Close Video' : 'A few words...'}</p>
        </button>
    {#if showVideo}
        <div class="z-[3]">
            <smartvideo src="https://www.youtube.com/embed/VNOAUjHFTFw?si=pY3cqaX30kOL3RvA" 
                width="1280" height="720"
                class="swarm-fluid" controls>
            </smartvideo>
        </div>
    {/if}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    A modern e-commerce store built with <strong
                        class="text-cyan-400"
                        >Next.js, TypeScript, and Tailwind CSS.</strong
                    > This project demonstrates a fully functional e-commerce platform with features like product browsing, cart management, user authentication, and secure payments.
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    Using <strong
                        class="text-cyan-400">Java</strong
                    >,
                    <strong class="text-cyan-400">Room Framework (SQLite Database) + Android SDK (Version 34)</strong
                    >
                    & <strong class="text-cyan-400">Gradle Build System.</strong> This application helps you organize your future vacations and excursions with a beautiful, user-friendly interface.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    The Pipeline Pilot is a <strong class="text-cyan-400"
                        >Python, Groovy, Yaml, Bash, Dockerfile</strong
                    >
                    streamlined, end-to-end CI/CD pipeline that integrates AI-powered code analysis. I leveraged DevOps methodologies,
                    <strong class="text-cyan-400">containerization, orchestration, and AI integration</strong>,
                    to build a scalable, efficient system. Designed as a
                    <strong class="text-cyan-400">manageable, demo-ready MVP</strong>,
                    it showcases automation and intelligent code evaluation to enhance development workflows (coming soon)!
                </p>
            </Step>
        </div>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <!-- <div class="z-[-1] bg-cyan-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-cyan-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
            The <span class="text-cyan-400">Complete</span> Package
        </h5>
        <div
            class="z-[2] flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
        >
            <table class="bg-slate-200 text-slate-700 rounded text-center">
                <thead class={"border-b border-solid border-slate-200  "}>
                    <tr class="">
                        <th></th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                        <th
                            class="bg-cyan-900 text-white whitespace-nowrap p-4 px-8"
                            >Me</th
                        >
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-solid border-gray-950">
                        <td
                            class="border-r border-solid border-slate-200 pl-4 pr-8 py-4 font-semibold text-sm"
                            >Dedication</td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-solid border-gray-950">
                        <td
                            class="border-r border-solid border-slate-200 pl-4 pr-8 py-4 font-semibold text-sm"
                            >Critical Thought</td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr>
                        <td
                            class="border-r border-solid border-slate-200 pl-4 pr-8 py-4 font-semibold text-sm"
                            >Interpersonal Skills</td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-t border-solid border-gray-950">
                        <td
                            class="border-r border-solid border-slate-200 pl-4 pr-8 py-4 font-semibold text-sm"
                            >Programming Ability</td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-t border-solid border-gray-950">
                        <td
                            class="border-r border-solid border-slate-200 pl-4 pr-8 py-4 font-semibold text-sm"
                            >Willingness To Learn</td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
        </div>
        <p class="mx-auto">So why not invest?</p>
    </section>
    <section id="skills" class="z-[2] py-20 flex flex-col gap-10">
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My Skills & <span class="poppins text-cyan-400">Tech</span> Stack
            </h3>
        </div>
        <div class="flex flex-wrap justify-center gap-6 my-15 ">
            <div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-slate-700 text-center group hover:border-slate-400 hover:border-2 transition-all duration-200">
                <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
                    Main Coding Languages
                </p>
                <p class="mt-2">&nbsp;</p>
                <div class="flex flex-wrap justify-center gap-6">
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-js fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">JavaScript</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-python fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">Python</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex flex-col items-center">
                            <i class="fa-brands fa-java fa-2xl"></i>
                            <p class="mt-2">&nbsp;</p>
                            <p class="mt-2">Java</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-slate-700 text-center group hover:border-slate-400 hover:border-2 transition-all duration-200">
                <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
                    Frontend
                </p>
                <p class="mt-2">&nbsp;</p>
                <div class="flex flex-wrap justify-center gap-6">
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-react fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">React</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-html5 fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">HTML & CSS</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-css3-alt fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">TailwindCSS</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-android fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">Android </p> 
                    </div>
                </div>
            </div>
            <div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-slate-700 text-center group hover:border-slate-400 hover:border-2 transition-all duration-200">
                <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
                    Backend
                </p>
                <p class="mt-2">&nbsp;</p>
                <div class="flex flex-wrap justify-center gap-6">
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-java fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">Java</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-solid fa-bolt fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">Spring Boot</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-node-js fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">Node.js</p>
                    </div>
                </div>
            </div>
            <div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-slate-700 text-center group hover:border-slate-400 hover:border-2 transition-all duration-200">
                <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
                    Databases & Storage
                </p>
                <p class="mt-2">&nbsp;</p>
                <div class="flex flex-wrap justify-center gap-6">
                    <div class="flex flex-col items-center">
                        <i class="fa-solid fa-database fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">MySQL</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-solid fa-database fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">PostgreSQL</p>
                    </div><div class="flex flex-col items-center">
                        <i class="fa-solid fa-database fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">SQLite</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-solid fa-database fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">Room Database</p>
                    </div>
                </div>
            </div>
            <div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-slate-700 text-center group hover:border-slate-400 hover:border-2 transition-all duration-200">
                <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
                    Cloud & Dev Ops
                </p>
                <p class="mt-2">&nbsp;</p>
                <div class="flex flex-wrap justify-center gap-6">
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-aws fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">AWS</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-docker fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">Docker</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-git-alt fa-2xl" ></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">CI/CD Github Actions</p>
                    </div>
                </div>
            </div>
            <div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-slate-700 text-center group hover:border-slate-400 hover:border-2 transition-all duration-200">
                <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
                    Other tools
                </p>
                <p class="mt-2">&nbsp;</p>
                <div class="flex flex-wrap justify-center gap-6">
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-github fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">Git & GitHub</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-brands fa-linux fa-2xl"></i>
                        <p class="mt-2">&nbsp;</p>
                        <p class="mt-2">Linux & Bash Scripting</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="resume" class="py-20 flex flex-col gap-10">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-cyan-400">see</span> my resume?
            </h3>
        </div>
        <p class="text-center">
            Download my resume to see highlights of my experience and education.
        </p>
        <a href="https://github.com/codebymarshall/resume/releases/latest" 
           target="_blank" 
           class="z-[2] blueShadow mx-auto px-6 py-3 rounded-full relative overflow-hidden group bg-white text-slate-950 text-base sm:text-lg md:text-xl poppins">
           <div class="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
           <span class="z-[0]">Download Resume</span>
        </a>
    </section>
</main>
