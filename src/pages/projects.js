import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getProjectsData, getMetaData } from "../../data";
import { useState, useRef } from "react";

export default function Projects({ data, metaData }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>{metaData?.title}</title>
        <meta name="description" content={metaData?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metaData?.title} key="title" />
        <meta property="og:description" content={metaData?.description} />
        <meta property="og:image" content={metaData?.previewImage.asset.url} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="w-full bg-projects px-4 py-16 md:p-24 ">
        {" "}
        <h1 className="lowercase text-4xl text-white ">
          <Link href={"/"} className={"hover:cursor-pointer"}>
            genie hong
          </Link>
        </h1>
        <div className="w-full bg-projects grid grid-cols-2 gap-6 md:gap-8 pt-8">
          {data.images.map((image, key) => (
            <Image
              src={image}
              key={key}
              width={600}
              height={1200}
              alt={"portfolio image" + key}
              className="pb-4 md:pb-4 bg-projects object-cover w-full h-full"
            />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const result = await getProjectsData();
  const metaData = await getMetaData();

  return {
    props: {
      data: result[0],
      metaData: metaData[0],
      page: "projects",
      preview,
    },
    revalidate: 10,
  };
}
