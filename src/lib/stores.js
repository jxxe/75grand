import { writable } from 'svelte/store';
import { writable as localStorageWritable } from 'svelte-local-storage-store';

export const favorites = localStorageWritable('favorites', []);
export const calendar = writable([]);