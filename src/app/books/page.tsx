import ListItem from '@/components/list/ListItem';
import { listOfBooks } from '@/data/book';

const Page = () => {
    return (
        <div>
            {
                listOfBooks.map((book) => (
                    <ListItem key={book.id} book={book} />
                ))
            }
        </div>
    );
}

export default Page;
