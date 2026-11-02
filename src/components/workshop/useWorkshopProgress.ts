import { useSyncExternalStore } from "react";

const STORAGE_KEY = "smc-workshop-progress";
const CHANGE_EVENT = "smc-workshop-progress";
const EMPTY: string[] = [];

// Cache the parsed value so useSyncExternalStore sees a stable snapshot.
let cache: { raw: string | null; ids: string[] } = { raw: null, ids: EMPTY };

const read = (): string[] => {
  let raw: string | null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    return EMPTY;
  }
  if (raw === cache.raw) return cache.ids;
  let ids = EMPTY;
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) ids = parsed.filter((id): id is string => typeof id === "string");
  } catch {
    // Corrupt value: treat as no progress.
  }
  cache = { raw, ids };
  return ids;
};

const subscribe = (onChange: () => void) => {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
};

/** Completed workshop modules, kept in this browser only. */
export const useWorkshopProgress = () => {
  const done = useSyncExternalStore(subscribe, read, () => EMPTY);
  const toggle = (id: string) => {
    const next = done.includes(id) ? done.filter((d) => d !== id) : [...done, id];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      return;
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };
  return { done, toggle };
};
