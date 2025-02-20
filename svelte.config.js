import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base:''
		},
		adapter: adapter({
			fallback: '200.html',
			strict: false
		})
	}
};

export default config;
