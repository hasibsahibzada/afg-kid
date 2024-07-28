
export interface Page {
    paragraphs: string[];
}

export interface Book {
    id: number;
    title: string;
    author: string;
    publicationDate: string;
    genre: string;
    description: string;
    pages: Page[];
}