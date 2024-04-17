import { Head } from "next/document";
import { NavBar,Hero,MakesUsSpecial, WhySocialBucks} from "@/components";
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
            <WhySocialBucks/>
            <div className="h-screen"></div>
        </>
    );
};

export default Home;
