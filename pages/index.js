import { Head } from "next/document";
import NavBar from "@/components/layouts/nav-bar";
import Hero from "@/components/home/hero";
import MakesUsSpecial from "@/components/home/makes-us-special";

const Home = props => {
    return (
        <>
            {/* <Head>
                <title>Social Bucks</title>
                <meta name='description' content='Social Bucks is the best way for creators and artists to accept support and membership from their fans.'/>
                <link rel='icon' href='/logo.svg' />
            </Head> */}

            <NavBar/>
            <Hero/>
            <MakesUsSpecial/>
        </>
    );
};

export default Home;
