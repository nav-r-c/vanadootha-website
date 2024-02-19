import React from "react";
import StatCard from "./StatCard";

export default function Stats() {
    return (
        <>
        <div className="my-10 text-center bg-primary-3 p-5 md:p-20 ">
            <div className="w-[80%] mx-auto">
                <h1 className="font-bold text-lg md:text-2xl text-accent-4 my-5">Statistics of Human - Animal conflicts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                    <StatCard stat={5543} desc=" Acres of land area damaged by wild animals in Andhra Pradesh" />
                    <StatCard stat = {30000} desc = "Cases of human wildlife conflict in the years, 2021 - 22" />
                    <StatCard stat = {4000} suffixStat="Cr" desc = "Total loss for farmers across India "/>
                    <StatCard stat = {40} suffixStat="%" desc = "Crop loss by wild animals across India" />
                </div>
            </div>
        </div>
        </>
    )
}