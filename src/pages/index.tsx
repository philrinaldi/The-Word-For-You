import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container grid grid-cols-3 mx-auto">
          <div className="col-span-3 text-center mt-10">
            <h1 className="text-5xl p-3 font-bold ">Welcome To...The Word For You.</h1>
            <p className="text-md p-3 w-3/4 mx-auto">A Word For You is an interactive experience that uses Artificial Intelligence to help connect your real-life experiences with scripture and the word from God. I will able to help you find bible verses that are related to your questions, and I can even help create a prayer for you!</p>
            <Chatbot />
          </div>
        </div>
      </main>
    </>
  )
}
