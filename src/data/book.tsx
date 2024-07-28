import { Book } from "@/components/list/book.interface";

export const listOfBooks: Book[] = [{
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    publicationDate: '2022-01-01',
    genre: 'Fiction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    pages: [{
        paragraphs: ['Page 1 paragraph 1', 'Page 1 paragraph 2', "Page 1 paragraph 3"]
    }]
},
    {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        publicationDate: '2021-02-02',
        genre: 'Non-Fiction',
        description: 'Duis euismod nulla vel libero viverra, at placerat velit semper.',
        pages: [{
            paragraphs: ['Page 1 paragraph 1', 'Page 1 paragraph 2', "Page 1 paragraph 3"],
        },
            {
                paragraphs: ['Page 1 paragraph 1', 'Page 1 paragraph 2', "Page 1 paragraph 3"],
            },
            {
                paragraphs: ['Page 1 paragraph 1', 'Page 1 paragraph 2', "Page 1 paragraph 3"],
            },
            {
                paragraphs: ['Page 1 paragraph 1', 'Page 1 paragraph 2', "Page 1 paragraph 3"],
            }]
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3',
        publicationDate: '2020-03-03',
        genre: 'Biography',
        description: 'Nullam id velit vel ipsum placerat consequat.',
        pages: [{
            paragraphs: ['Page 1 paragraph 1', 'Page 1 paragraph 2', "Page 1 paragraph 3"]
        }]
    }];

