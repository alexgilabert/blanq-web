import es from './es.json';
import en from './en.json';

type TranslationValue = string | Record<string, unknown>;
const translations: Record<string, Record<string, TranslationValue>> = { es, en };

export function t(key: string, lang: string = 'es'): string {
  const lookup = (obj: Record<string, unknown>, parts: string[]): string | undefined => {
    const [head, ...rest] = parts;
    if (!head || obj[head] === undefined) return undefined;
    if (rest.length === 0) return typeof obj[head] === 'string' ? (obj[head] as string) : undefined;
    if (typeof obj[head] === 'object' && obj[head] !== null) {
      return lookup(obj[head] as Record<string, unknown>, rest);
    }
    return undefined;
  };

  const parts = key.split('.');
  const langData = translations[lang] ?? {};
  const result =
    lookup(langData as Record<string, unknown>, parts) ??
    lookup(translations['es'] as Record<string, unknown>, parts);

  return result ?? key;
}
