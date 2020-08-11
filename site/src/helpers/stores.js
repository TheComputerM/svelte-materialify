import { writable } from 'svelte/store';

const theme = writable('light');

export { theme };

const markdownLoaded = writable(false);

export { markdownLoaded };
