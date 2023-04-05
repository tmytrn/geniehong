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
      <main
        className="w-full h-full px-4 py-16 md:p-24 flex flex-col text-white"
        style={{
          backgroundImage: `url(${data.backgroundImages[randomIndex]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <h1 className="lowercase text-4xl">{data.title}</h1>
        <div className="m-auto text-xl py-24">
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
