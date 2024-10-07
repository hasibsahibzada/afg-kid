'use client'
import { listOfBooks } from '@/data/book';
import {Book} from "@/components/list/book.interface";
import './book.css';
import BookPage from '@/components/book/page';

const getBookById = (bookId: string): Book | undefined => {
    return listOfBooks.find((book) => book.id === parseInt(bookId))
}

const getPageNumber = (pageLength: number, index: number): number => {
    return pageLength - index;
}

const  Page = async ({params}: { params: { bookId: string} }) => {
    const {bookId} = params;
    const book = getBookById(bookId);

    const pageLength = book?.pages.length || 0;

    return (
        <div className="wrapper">
            {
                book && (
                    <div>
                        {book.pages.map((page, index) => (
                            <div key={index}>
                                <BookPage paragraphs={page.paragraphs} pageNumber={getPageNumber(pageLength, index)} image={page.image} />
                            </div>
                        ))}
                    </div>
                )
            }
            {
                book === undefined && (
                    <p>No book found with the ID: {bookId}</p>
                )
            }
        </div>
    )
}

export default Page;