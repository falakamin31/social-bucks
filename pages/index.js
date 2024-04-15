import NavBar from "@/components/layouts/nav-bar";
import { Head } from "next/document";

const Home = props => {
    return (
        <>
            {/* <Head>
                <title>Social Bucks</title>
                <meta name='description' content='Social Bucks is the best way for creators and artists to accept support and membership from their fans.'/>
                <link rel='icon' href='/logo.svg' />
            </Head> */}

            <NavBar/>
        </>
    );
};

export default Home;
