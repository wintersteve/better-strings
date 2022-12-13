export type Return<T> = T extends TemplateStringsArray
  ? string
  : (segments: unknown, ...args: string[]) => string;
