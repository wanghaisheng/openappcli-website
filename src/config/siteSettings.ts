export const locales = ["en", "zh-CN"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeMap: Record<Locale, string> = { en: "en-US", "zh-CN": "zh-CN" };
export const languageSwitcherMap: Record<Locale, string> = { en: "EN", "zh-CN": "中文" };
