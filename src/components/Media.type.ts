export type MediumProps = {
  id: number;
  name: string;
  cover: string;
  languages: string[];
  status: string;
  updatedAt: string;
};

export type MediaProps = {
  media: MediumProps[];
};
