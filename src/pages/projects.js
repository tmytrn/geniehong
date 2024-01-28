import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getProjectsData, getMetaData } from "../../data";
import { useState, useRef } from "react";

export default function Projects({ data, metaData }) {
  // console.log(data);
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
      <main className="w-full overflow-auto ">
        <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-plum"></div>
        <h1 className="lowercase text-4xl text-white static md:absolute mx-4 my-16 md:mt-24 md:ml-24 md:mr-2 top-0">
          <Link href={"/"} className={"hover:cursor-pointer"}>
            genie hong
          </Link>
        </h1>
        <div className="absolute bottom-0 flex-col mt-auto mb-0 justify-end text-white hidden md:flex md:mb-24 md:ml-24 md:mr-2">
          <p>
            <Link href="/projects" className="pb-2">
              projects
            </Link>
          </p>
          <p>
            <Link href="/portfolio" className="pb-2">
              portfolio
            </Link>
          </p>
          <p>
            <a className="hover:cursor-pointer pb-2" href={data.cv} download>
              cv
            </a>
          </p>
          <p>
            <a
              href="mailto:geniehong.la@gmail.com"
              className="hover:cursor-pointer">
              email
            </a>
          </p>
        </div>
        <div className="static grid grid-cols-2 gap-4 md:gap-8 overflow-y-auto w-full md:w-3/4 ml-auto mr-0 py-4 md:py-24 px-4 md:pl-0 md:pr-12 bg-transparent">
          {data.images.map((image, key) => (
            <Image
              src={image}
              key={key}
              width={600}
              height={1200}
              alt={"portfolio image" + key}
              className="pb-0 md:pb-4 object-cover w-full h-full bg-transparent"
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
