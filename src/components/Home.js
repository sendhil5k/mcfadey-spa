import React from "react";
import DetailedTabs from "./DetailedTabs";
import TopCarousel from "./TopCarousel";
import ItemList from "./ItemList";

export default function Home() {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <DetailedTabs />
                </div>
                <div>
                    <TopCarousel />

                </div>
                <div>
                    <ItemList />
                </div>
            </div>
        </div>
    )
};