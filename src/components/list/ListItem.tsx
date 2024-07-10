import PropTypes from "prop-types";
import Link from 'next/link';

const ListItem = (props: any) => {
    const { book } = props;
    return (
        <Link href={`/books/book/${book.id}`}>
            <div key={book.id} id="book">
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Publication Date: {book.publicationDate}</p>
                <p>Genre: {book.genre}</p>
                <p>Description: {book.description}</p>
            </div>
        </Link>

    );
}

ListItem.propTypes = ({
    book: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        publicationDate: PropTypes.string,
        genre: PropTypes.string,
        description: PropTypes.string
    })
});

export default ListItem;