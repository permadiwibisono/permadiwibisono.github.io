import React from 'react';
import { useAtom } from 'jotai';
import { setThemeWithStorageAtom } from '../hooks/use-theme';

export default function ButtonSystemTheme() {
  const [_, setTheme] = useAtom(setThemeWithStorageAtom);
  return (
    <button
      className="px-3 py-2 mr-4 text-xs outline-none border-[#111111] border dark:border-white"
      onClick={() => setTheme(null)}
    >
      System Theme
    </button>
  );
}
