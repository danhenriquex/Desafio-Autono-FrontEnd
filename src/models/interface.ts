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

export interface SpecificBookApiInterface {
  volumeInfo: {
    authors: [];
    averageRating: number;
    categories: [];
    description: string;
    imageLinks: { thumbnail: string };
    pageCount: number;
    publishedDate: string;
    publisher: string;
    subtitle: string;
    title: string;
  };
}
