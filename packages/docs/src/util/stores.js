import { writable } from 'svelte/store';

const theme = writable('light');

export { theme };

const markdown = writable(false);

export { markdown };

const hashURL = writable(process.browser ? window.location.href : '');

export { hashURL };
