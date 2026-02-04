import Link from "next/link";

const recipes = [
  {
    title: "豆乳仕立ての鶏つくね鍋",
    time: "30分",
    tags: ["やさしい味", "冬の温活", "家族向け"],
  },
  {
    title: "彩り野菜の蒸し献立セット",
    time: "25分",
    tags: ["低塩", "時短", "都市部向け"],
  },
  {
    title: "郊外向け保存食材で作る和風パスタ",
    time: "20分",
    tags: ["買い置き", "郊外", "平日夜"],
  },
];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4]">
      <header className="border-b border-white/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#e7bdb0,#f0d8cf)]" />
            <div>
              <p className="text-lg font-semibold tracking-wide">KIKUHA</p>
              <p className="text-xs text-[#6B6460]">会員専用 料理検索</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#6B6460]">
            <span className="hidden md:inline">ようこそ、Yumi さん</span>
            <Link
              href="/"
              className="rounded-full border border-[#E7BDB0] px-4 py-2 text-xs text-[#8E6C63]"
            >
              トップへ戻る
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white/90 p-6 shadow-[0_15px_35px_rgba(157,119,108,0.12)]">
            <h1 className="text-2xl font-semibold">
              今日の気分に寄り添うレシピ検索
            </h1>
            <p className="mt-2 text-sm text-[#6B6460]">
              家族構成・体調・買い物環境に合わせた候補をやさしく絞り込み。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <label className="text-xs text-[#8C817C]">キーワード</label>
                <div className="mt-2 rounded-2xl border border-[#E9DAD4] bg-white px-4 py-3 text-sm text-[#6B6460]">
                  例）和食 / 低塩 / 旬野菜
                </div>
              </div>
              <div>
                <label className="text-xs text-[#8C817C]">調理時間</label>
                <div className="mt-2 rounded-2xl border border-[#E9DAD4] bg-white px-4 py-3 text-sm text-[#6B6460]">
                  30分以内
                </div>
              </div>
              <div>
                <label className="text-xs text-[#8C817C]">家族構成</label>
                <div className="mt-2 rounded-2xl border border-[#E9DAD4] bg-white px-4 py-3 text-sm text-[#6B6460]">
                  大人2人 / 子ども2人
                </div>
              </div>
              <div>
                <label className="text-xs text-[#8C817C]">居住エリア</label>
                <div className="mt-2 rounded-2xl border border-[#E9DAD4] bg-white px-4 py-3 text-sm text-[#6B6460]">
                  郊外
                </div>
              </div>
            </div>
            <button className="mt-6 w-full rounded-full bg-[#E7BDB0] py-3 text-sm font-semibold text-[#3D3A37]">
              条件で検索する
            </button>
          </div>
          <div className="rounded-3xl border border-[#F0E1DC] bg-white/70 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B78F84]">
              今日のヒント
            </p>
            <h2 className="mt-3 text-lg font-semibold">
              旬の根菜で作る、体が温まる献立
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#6B6460]">
              郊外の買い置きにも向く食材を中心に、週末のまとめ作りを
              想定した構成です。
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#6B6460]">
              <div className="rounded-2xl bg-[#FBF7F4] px-4 py-3">
                食材ストック率：84%
              </div>
              <div className="rounded-2xl bg-[#FBF7F4] px-4 py-3">
                体調サポート：温活・整腸
              </div>
              <div className="rounded-2xl bg-[#FBF7F4] px-4 py-3">
                仕上げの一工夫：柚子胡椒
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B78F84]">
                Search Results
              </p>
              <h2 className="mt-2 text-2xl font-semibold">おすすめレシピ</h2>
            </div>
            <span className="text-xs text-[#8C817C]">全 12 件</span>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {recipes.map((recipe) => (
              <div
                key={recipe.title}
                className="rounded-2xl bg-white/90 p-5 shadow-[0_15px_35px_rgba(157,119,108,0.12)]"
              >
                <div className="rounded-2xl bg-[#FBF7F4] px-4 py-3 text-xs text-[#8C817C]">
                  調理時間 {recipe.time}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{recipe.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F2E4DE] px-3 py-1 text-xs text-[#7A6A64]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-5 w-full rounded-full border border-[#E2D2CC] py-2 text-xs text-[#6B6460]">
                  詳細を見る
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
