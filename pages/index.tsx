import Head from "next/head";
import Contents from "components/Contents";
import DarkModeButton from "components/DarkModeButton";

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
              <div className="px-2 py-1 rounded-xl bg-gray-600 text-sm border">
                Next v13
              </div>
              <div className="px-2 py-1 rounded-xl bg-gray-600 text-sm border">
                tailwind
              </div>
            </div>
          </div>
          <div className="col-span-1 mr-0 ml-auto">
            <DarkModeButton />
          </div>
        </div>

        <h2 className="text-2xl mt-4">TODO</h2>
        <div className="card">
          <li>trend</li>
        </div>
        <a
          href="#scroll-behavior"
          className="p-2 rounded border block my-2 md:dark:hover:bg-gray-900 md:hover:bg-gray-200"
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
            className=" text-[#939393] text-center font-bold text-xl px-4 py-16 bg-gray-300 dark:bg-gray-700 border rounded dark:border-gray-700 mt-2"
          >
            scroll-behavior Area <br />
            HTML に scroll-smoothを設定するとぬるりと動く
          </div>
        </Contents>

        <footer>
          <a
            className="rounded p-2 bg-gray-700 text-gray-300 block my-2"
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
