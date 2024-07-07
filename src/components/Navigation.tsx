import Link from 'next/link';
import './navigation.css';

export default function Navigation() {
    return (
        <nav>
            <div className="right">
                <span><Link href="/">Home</Link></span>
                <span><Link href="/books">Books</Link></span>
            </div>
            <div className="left">
                <span>left here</span>
            </div>
        </nav>
    );
}
