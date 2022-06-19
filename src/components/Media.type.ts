export type MediumProps = {
  id: number;
  name: string;
  cover: string;
  languages: string[];
  status: string;
  updated: string;
};

export type MediaProps = {
  media: MediumProps[];
};