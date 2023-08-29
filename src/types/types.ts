

export type TBaseFrontMatter = {
  title: string;
  description: string;
  caption?: string;
};

export type TPostFrontMatter = TBaseFrontMatter & {
  date: string;
  lang: 'pt-br' | 'en';
  tags: Array<string>;
  category: string;
};

export type TProjectFrontMatter = {
  date: string;
  title: string;
  description: string;
  image: string;
  github: string;
  external: string;
  tech: Array<string>;
};
