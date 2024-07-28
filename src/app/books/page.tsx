'use client';
import ListItem from '@/components/list/ListItem';
import { listOfBooks } from '@/data/book';
import { useState } from'react';

const Page = () => {
    const [keyword, setKeyword] = useState('');
    const filteredBooks = listOfBooks.filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase()));

    const onKeywordChange = (e: any) => {
        setKeyword(e.target.value);
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Search for books" onChange={onKeywordChange}/>
            </div>
            <div>
                {
                    filteredBooks.map((book) => (
                        <ListItem key={book.id} book={book} />
                    ))
                }
            </div>
        </div>
    );
}

export default Page;
