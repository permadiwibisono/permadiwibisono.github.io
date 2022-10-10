import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const key = 'color-mode';
const browser = typeof window !== 'undefined';
const localValue = browser ? localStorage.getItem(key) : 'light';
const systemTheme = browser && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const themeAtom = atom(localValue || systemTheme);

export const setThemeWithStorageAtom = atom(null, (_, set, value: string | null) => {
  if (!browser) return;
  if (value === null) {
    const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.removeItem(key);
    set(themeAtom, system);
    return;
  }
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

  useEffect(() => {
    if (!browser) return;

    function handleChange() {
      const root = window.document.documentElement;
      const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      if (!localStorage.getItem(key)) {
        root.setAttribute('data-theme', system);
        setTheme(() => system);
      }
    }
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleChange);
    return () => {
      matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleChange);
    };
  }, []);

  return [theme, setTheme] as const;
}
