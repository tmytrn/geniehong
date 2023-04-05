import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getPortfolioData, getPortfolioPass } from "../../data";
import { useState, useRef } from "react";

export default function Portfolio({ data, pwd }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorText, setErrorText] = useState("");
  const pwdRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (pwdRef.current?.value == pwd.portfolioPassword) {
      setIsUnlocked(true);
      return;
    } else {
      setErrorText("Incorrect Password");
    }
  }

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
      <main className="w-full h-full bg-gray-200">
        {isUnlocked ? (
          <>
            <Link
              className="w-full text-3xl text-left mx-4 md:mx-24 py-4 mb-4 border-b-white border-solid border-b-[1px]"
              href="/">
              genie hong
            </Link>
            <div className="flex flex-col justify-center items-center px-4 md:px-24">
              {data.images.map((image, key) => (
                <Image
                  src={image}
                  key={key}
                  width={2400}
                  height={600}
                  alt={"portfolio image" + key}
                  className="pb-2 md:pb-4"
                />
              ))}
            </div>
          </>
        ) : (
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                className="flex justify-center items-center">
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="m-auto bg-white rounded p-2 text-black focus:outline-gray-500"
                    placeholder="Password"
                    ref={pwdRef}
                  />
                  <span className="text-sm text-red-400">{errorText}</span>
                </div>
                <button
                  className="pl-4 mb-auto mt-[8px]"
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const result = await getPortfolioData();
  const pwd = await getPortfolioPass();

  return {
    props: {
      data: result[0],
      pwd: pwd[0],
      page: "portfolio",
      preview,
    },
    revalidate: 10,
  };
}
