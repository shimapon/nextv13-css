import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>shimaponのCSSの遊び場</title>
        <meta name="description" content="俺がcssで遊ぶ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8 text-left w-1/2 mx-auto bg-gray-800 border-gray-700 border shadow-inner">
        <h1 className="text-5xl">CSSで遊ぶ</h1>
        <div className="flex gap-2 mt-2">
          <div className="px-2 py-1 rounded-xl bg-gray-600 text-sm border">
            Next v13
          </div>
          <div className="px-2 py-1 rounded-xl bg-gray-600 text-sm border">
            tailwind
          </div>
        </div>

        <h2 className="text-2xl mt-4">TODO</h2>
        <div className="card">
          <li>ダークモード</li>
          <li>クラス名共通化</li>
          <li>github</li>
        </div>
        <h2 className="text-2xl mt-4">トレンド</h2>
        <div className="card">
          <li>subgrid</li>
          <li>writing modes</li>
          <li>css logical propeties</li>
          <li>aspect-ratio</li>
          <li>content-visibility</li>
          <li>flexbox gap</li>
          <li>@container</li>
        </div>
        <a
          href="#about"
          className="p-2 rounded border block my-2 hover:bg-gray-900"
        >
          scroll-behaviorへ遷移
        </a>
        <h3 className="mt-4 text-xl">Grid</h3>
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
        <h3 className="mt-4 text-xl">writing mode</h3>
        <div className="grid grid-cols-3 gap-2">
          <p style={{ writingMode: "vertical-rl" }} className="card h-40">
            色は匂へど 散りぬるを 我が世誰そ 常ならむ 有為の奥山 今日越えて
            浅き夢見じ 酔ひもせず
          </p>
          <p style={{ writingMode: "horizontal-tb" }} className="card h-40">
            色は匂へど 散りぬるを 我が世誰そ 常ならむ 有為の奥山 今日越えて
            浅き夢見じ 酔ひもせず
          </p>
          <p style={{ writingMode: "vertical-lr" }} className="card h-40">
            色は匂へど 散りぬるを 我が世誰そ 常ならむ 有為の奥山 今日越えて
            浅き夢見じ 酔ひもせず
          </p>
        </div>

        <h3 className="mt-4 text-xl">varuable fonts</h3>
        <p className="textAnimation">hello world</p>

        <h3 id="about" className="mt-4 text-xl">
          scroll-behavior
        </h3>

        <div className=" text-[#939393] text-center font-bold text-xl p-32 bg-gray-700 border rounded border-gray-700 mt-2">
          scroll-behavior Area <br />
          HTML に scroll-smoothを設定するとぬるりと動く
        </div>
        <footer>
          <a
            className="rounded p-2 bg-gray-900 text-gray-300 block my-2"
            href="https://github.com/shimapon/nextv13-css"
            target="_blank"
            rel="noreferrer noopener"
          >
            githubソース
          </a>
        </footer>
      </main>
    </>
  );
}
