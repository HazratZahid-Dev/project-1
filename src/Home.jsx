import React from "react";
import Footer from "./Footer";
import './index.css';
import Slider from "./Slider";
import Card from "./Card";
import Ourcompany from "./Ourcompany";
import Sdata from './Sdata';
const heading = {
    textAlign: 'center',
    color: 'green',
    textTransform: 'uppercase',
    textDecoration: 'none',
    listStyleType: 'none'

}

function Home() {
    return (
        <>
            <div>
                <Slider />
            </div>
            <div>
                <Ourcompany />
            </div>
            <div className="container-fluid">
                <div className="mt-5">

                    {Sdata.map((val, index) => {
                        return (
                            <Card
                                imgsrc={Sdata[0].imgsrc}
                                title={Sdata[0].title}
                                btnlinks={Sdata[0].btnlinks}
                            />

                        );
                    })}
                </div>
            </div>


            <div>
                <Footer />
            </div>


        </>
    );

}
export default Home;