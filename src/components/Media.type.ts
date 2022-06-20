/** I tried to have a main types file, but it could be written within the components */

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
