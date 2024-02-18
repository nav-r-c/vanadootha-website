import React from "react";
import StatCard from "./StatCard";

export default function Stats() {
    return (
        <>
        <div className="my-10 text-center bg-primary-3 p-20">
            <div className="w-[80%] mx-auto">
                <h1 className="font-bold text-2xl text-accent-4 my-5">Statistics of Human - Animal conflicts</h1>
                <div className="flex justify-between gap-5 my-5">
                    <StatCard />
                    <StatCard />
                    <StatCard />
                    <StatCard />
                </div>
            </div>
        </div>
        </>
    )
}