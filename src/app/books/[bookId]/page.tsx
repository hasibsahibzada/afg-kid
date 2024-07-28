'use client'
import { listOfBooks } from '@/data/book';
import {Book} from "@/components/list/book.interface";
import HTMLFlipBook from 'react-pageflip';
import './book.css';

const getBookById = (bookId: string): Book | undefined => {
    return listOfBooks.find((book) => book.id === parseInt(bookId))
}

const Page = ({params}: { params: { bookId: string} }) => {
    const {bookId} = params;
    const book = getBookById(bookId);
    return (
        <div>
            {
                book && (
                    <div>
                        <div>
                            <h1>Book ID: {book.id}</h1>
                            <p>Title: {book.title}</p>
                            <p>Author: {book.author}</p>
                            <p>Publication Date: {book.publicationDate}</p>
                            <p>Genre: {book.genre}</p>
                            <p>Description: {book.description}</p>
                        </div>
                        <div>Read book</div>
                        <HTMLFlipBook width={300} height={500} autoSize>
                            {book.pages.map((page, index) => (
                                <div key={index} className="page">
                                    {
                                        page.paragraphs.map((paragraph, paragraphIndex) => (
                                            <p key={paragraphIndex}>{paragraph}</p>
                                        ))
                                    }
                                    <span>{index + 1}</span>
                                </div>
                            ))}
                        </HTMLFlipBook>
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