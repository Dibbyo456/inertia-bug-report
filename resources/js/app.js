import { createInertiaApp } from "@inertiajs/svelte";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.svelte", { eager: true });
        return pages[`./Pages/${name}.svelte`];
    },

    // This is official guide.
    setup({ el, App, props }) {
        new App({ target: el, props });
    },

    // Removing also does not help, shows warning.
    // setup({ el, App }) {
    //     new App({ target: el });
    // },
});
