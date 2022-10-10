import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const key = 'color-mode';
const browser = typeof window !== 'undefined';
const localValue = browser ? localStorage.getItem(key) : 'light';
const systemTheme = browser && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const themeAtom = atom(localValue || systemTheme);

export const setThemeWithStorageAtom = atom(null, (_, set, value: string) => {
  if (!browser) return;
  set(themeAtom, value);
  localStorage.setItem(key, value);
});

export default function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const root = window.document.documentElement;
    const value = root.getAttribute('data-initial-theme') || undefined;
    root.setAttribute('data-theme', value || '');
  }, []);

  useEffect(() => {
    if (!browser) return;

    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  console.log(theme);
  return [theme, setTheme] as const;
}
