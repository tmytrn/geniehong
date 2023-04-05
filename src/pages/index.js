import Head from "next/head";
import Link from "next/link";
import { getHomeData, getMetaData } from "../../data";
import { PortableText } from "@portabletext/react";
import { useState, useEffect } from "react";

const components = {
  block: ({ children }) => <p className="last:pt-12">{children}</p>,
};

export default function Home({ data, metaData }) {
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * data.backgroundImages.length)
  );
  const [isEmailHovering, setIsEmailHovering] = useState(false);
  return (
    <>
      <Head>
        <title>{metaData?.title}</title>
        <meta name="description" content={metaData?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metaData?.title} key="title" />
        <meta property="og:description" content={metaData?.description} />
        <meta property="og:image" content={metaData?.previewImage.asset.url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="w-full h-screen px-4 py-16 md:p-48 flex flex-col text-white"
        style={{
          backgroundImage: `url(${data.backgroundImages[randomIndex]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <h1 className="lowercase text-4xl">{data.title}</h1>
        <div className="m-auto text-xl">
          <PortableText value={data.bio} components={components} />
        </div>
        <div className="flex flex-col mb-0 mt-auto">
          <p>
            <Link href="/portfolio" className="pb-4">
              portfolio
            </Link>
          </p>
          <p>
            <a className="hover:cursor-pointer pb-4" href={data.cv} download>
              cv
            </a>
          </p>
          <p>
            <a
              onMouseOver={() => {
                setIsEmailHovering(true);
              }}
              onMouseOut={() => {
                setIsEmailHovering(false);
              }}
              className="hover:cursor-text pb-4">
              {isEmailHovering ? "geniehong.la@gmail.com" : "email"}
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const result = await getHomeData();
  const metaData = await getMetaData();

  return {
    props: {
      data: result[0],
      metaData: metaData[0],
      page: "index",
      preview,
    },
    revalidate: 10,
  };
}
