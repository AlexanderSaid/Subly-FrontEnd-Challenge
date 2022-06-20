/**
 * This function extracts languages from all uploaded media, and create a list of unique languages
 */
import { MediaProps } from '../components/Media.type';

const uniqueLanguages = (data: MediaProps | undefined) => {
  const allLanguages: string[] = [];
  data?.media.map((medium) => allLanguages.push(...medium.languages));
  const uniqueLanguages: string[] = Array.from(new Set(allLanguages));
  return uniqueLanguages;
};

export default uniqueLanguages;
