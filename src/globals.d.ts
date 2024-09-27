// src/globals.d.ts

declare global {
  interface ScreenOrientation {
    lock(orientation: string): Promise<void>;
  }
}

export {};
