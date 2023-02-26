import Head from "next/head";
import Contents from "components/Contents";
import DarkModeButton from "components/DarkModeButton";
import Link from "next/link";
import Image from "next/image";
import {} from "util/logic";

export default function Home() {
  return (
    <>
      <Head>
        <title>shimaponのCSSの遊び場</title>
        <meta name="description" content="俺がcssで遊ぶ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8 text-left md:w-1/2 mx-auto border-gray-700 border shadow-inner bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
        <div className="grid grid-cols-4 items-center">
          <div className="col-span-3">
            <h1 className="text-5xl">CSSで遊ぶ</h1>
            <div className="flex gap-2 mt-3">
              <div className="px-2 py-1 rounded-xl dark:bg-gray-800 dark:text-gray-50 text-sm border">
                Next v13
              </div>
              <div className="px-2 py-1 rounded-xl dark:bg-gray-800 dark:text-gray-50 text-sm border">
                tailwind
              </div>
            </div>
          </div>
          <div className="col-span-1 mr-0 ml-auto">
            <DarkModeButton />
          </div>
        </div>

        <h2 className="text-2xl mt-4">TODO</h2>
        <ul className="dark:border-white border-gray-700 border rounded p-2">
          <li>state of CSS trend</li>
          <li>アップルやテスラのWebレイアウト再現テクニック集</li>
        </ul>

        <a
          href="#scroll-behavior"
          className="p-2 rounded border block my-4 md:dark:hover:bg-gray-900 md:hover:bg-gray-200"
        >
          scroll-behaviorへ遷移
        </a>
        <Contents title="Grid">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 card">1</div>
            <div className="col-span-2 card">2</div>
            <div className="col-span-2 card">3</div>
            <div className="col-span-1 card">4</div>
            <div className="card col-span-3">5</div>
            <div className="card col-span-2 row-span-4">6</div>
            <div className="card col-span-1 row-span-1">7</div>
            <div className="card col-span-1 row-span-1">8</div>
            <div className="card col-span-1 row-span-1">9</div>
            <div className="card col-span-1 row-span-1">10</div>
          </div>
        </Contents>

        <Contents title="writing mode">
          <div className="grid grid-cols-3 gap-2 text-sm h-44">
            <p style={{ writingMode: "vertical-rl" }} className="card">
              色は匂へど 散りぬるを 我が世誰そ 常ならむ 有為の奥山 今日越えて
              浅き夢見じ 酔ひもせず
            </p>
            <p style={{ writingMode: "horizontal-tb" }} className="card">
              色は匂へど 散りぬるを 我が世誰そ 常ならむ 有為の奥山 今日越えて
              浅き夢見じ 酔ひもせず
            </p>
            <p style={{ writingMode: "vertical-lr" }} className="card">
              色は匂へど 散りぬるを 我が世誰そ 常ならむ 有為の奥山 今日越えて
              浅き夢見じ 酔ひもせず
            </p>
          </div>
        </Contents>

        <Contents title="varuable fonts">
          <p className="textAnimation">hello world</p>
        </Contents>

        <Contents title="scroll-behavior">
          <div
            id="scroll-behavior"
            className=" text-[#939393] text-center font-bold text-xl px-4 py-16 bg-gray-300 dark:bg-gray-700 border rounded dark:border-gray-700"
          >
            scroll-behavior Area <br />
            HTML に scroll-smoothを設定するとぬるりと動く
          </div>
        </Contents>

        <Contents title="sticky(挙動不安定)">
          <Link href={"sticky"}>
            <div className="rounded p-2 bg-gray-700 text-gray-300 block my-2">
              ページへ
            </div>
          </Link>
        </Contents>

        <Contents title="scroll-snap-type">
          <div className="snap-x snap-mandatory flex overflow-x-auto md:w-2/3 w-full gap-2 mx-auto border-4 dark:border-gray-100 rounded">
            {[
              "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
              "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
              "https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
              "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
              "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
              "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
            ].map((url: string, index: number) => {
              return (
                <div
                  className="snap-center min-w-fit"
                  key={index + "scroll-snap-image"}
                >
                  <Image
                    src={url}
                    width={320}
                    height={160}
                    alt=""
                    className="snap-center min-w-fit"
                  />
                </div>
              );
            })}
          </div>
        </Contents>

        <Contents title="responsive design">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  className="h-36 w-full object-cover md:h-full md:w-48"
                  src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                  alt=""
                  width={320}
                  height={160}
                />
              </div>
              <div className="p-4">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case study
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p className="mt-2 text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </Contents>

        <Contents title="content-visibility">
          <p className="text-gray-300">
            autoに設定することによって指定した要素がビューポートに表示されるまで、レンダリングを実行しない。
          </p>
          <Image
            src={
              "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
            width={414}
            height={621}
            alt=""
            className="mt-2"
            style={{ contentVisibility: "auto" }}
          />
        </Contents>

        <Contents title="blend-mode">
          <div className="flex justify-center -space-x-14 bg-white p-2">
            <div className="mix-blend-multiply bg-blue-400 rounded-full w-32 h-32"></div>
            <div className="mix-blend-multiply bg-pink-400 rounded-full w-32 h-32"></div>
          </div>
        </Contents>

        <footer>
          <a
            className="rounded p-2 bg-gray-700 text-gray-300 block my-4"
            href="https://github.com/shimapon/nextv13-css"
            target="_blank"
            rel="noreferrer noopener"
          >
            {">"} githubソース
          </a>
        </footer>
      </main>
    </>
  );
}
