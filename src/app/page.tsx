import {NextPageContext} from "next";

const Home = ()  =>{
    return (
        <main >
            <h1>This is Afghan kid test</h1>
        </main>
    );
}

Home.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    debugger
    return { stars: json.stargazers_count }
}

export default Home;