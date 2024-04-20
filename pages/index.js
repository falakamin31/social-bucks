import { Head } from "next/document";
import { NavBar,Hero,MakesUsSpecial, WhySocialBucks, Support, Footer} from "@/components";
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
            <Support/>
            <MakesUsSpecial/>
            <WhySocialBucks/>
            <Footer/>            
        </>
    );
};

export default Home;
