export interface BookApiInterface {
  id?: string;
  selfLink: string;
  volumeInfo?: {
    title: string;
    subtitle: string;
    publishedDate: string;
    authors: [];
    imageLinks: { thumbnail: string; smallThumbnail: string };
    description: string;
    infoLink: string;
  };
}
