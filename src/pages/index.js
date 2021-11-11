import Head from "next/head";
import { useState } from "react";
import PayoutForm from "../components/payout-form.component";


export default function Home() {

  return (
    <div className="bg-body h-full pb-14 sm:bg-white ">
      <Head>
        <title>Fliqpay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <PayoutForm/>

     
    </div>
  );
}