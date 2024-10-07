import './page.css';
import {PageProps} from "./page-props.interface";

const Page = (props: PageProps) => {
    const { image, paragraphs, pageNumber} = props;
    return (
        <div className="book">
            <div className="body">
                <div className="paragraph">
                    {
                        paragraphs.map((paragraph, paragraphIndex) => (
                            <p dir="rtl" key={paragraphIndex}>{paragraph}</p>
                        ))
                    }
                </div>
                {
                    image && <img src={image} alt="Page" className="image"/>
                }
            </div>
            <div className="footer">
                <span>{pageNumber}</span>
            </div>
        </div>
    );
}

export default Page;
