import { writable } from 'svelte/store';

const theme = writable('light');

export { theme };

const markdown = writable(false);

export { markdown };
