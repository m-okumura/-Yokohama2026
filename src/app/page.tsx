import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f7e7e1,transparent_55%)]">
      <header className="border-b border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#e7bdb0,#f0d8cf)]" />
            <div>
              <p className="text-lg font-semibold tracking-wide">KIKUHA</p>
              <p className="text-xs text-[#6B6460]">
                上質でやさしい料理検索
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#6B6460] md:flex">
            <span>コンセプト</span>
            <span>特徴</span>
            <span>使い方</span>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/search"
              className="rounded-full border border-[#E7BDB0] px-4 py-2 text-sm text-[#8E6C63]"
            >
              会員登録
            </Link>
            <Link
              href="/search"
              className="rounded-full bg-[#E7BDB0] px-4 py-2 text-sm text-[#3D3A37]"
            >
              ログイン
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-14">
        <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#B78F84]">
              Gentle Premium Kitchen
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              いつもの食卓に、<br />
              心ほどける上質さを。
            </h1>
            <p className="text-base leading-7 text-[#6B6460] md:text-lg">
              都市部の忙しさにも、郊外のゆとりにも寄り添う料理検索。
              家族の好みと健康を両立しながら、季節感のある献立提案を
              やさしい色彩とともにお届けします。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/search"
                className="rounded-full bg-[#E7BDB0] px-6 py-3 text-sm font-semibold text-[#3D3A37]"
              >
                無料で始める
              </Link>
              <Link
                href="/search"
                className="rounded-full border border-[#E2D2CC] px-6 py-3 text-sm font-semibold text-[#6B6460]"
              >
                使い方を見る
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-[#8C817C]">
              <span>都市部ユーザー中心</span>
              <span>地方・郊外にも対応（約30%）</span>
              <span>生成AI画像は使用しません</span>
            </div>
          </div>
          <div className="rounded-3xl bg-white/90 p-6 shadow-[0_20px_60px_rgba(157,119,108,0.15)]">
            <div className="rounded-2xl border border-[#F1E6E1] bg-[#FBF7F4] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#B78F84]">
                今日のおすすめ
              </p>
              <h2 className="mt-3 text-xl font-semibold">
                旬野菜のやさしい和定食
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#6B6460]">
                家族4人でも作りやすい工程。塩分控えめでも満足感のある
                だしの旨みを活かした構成です。
              </p>
              <div className="mt-6 grid gap-4 text-sm">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs text-[#B78F84]">所要時間</p>
                  <p className="mt-1 font-semibold">35分</p>
                </div>
                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs text-[#B78F84]">今夜の満足度</p>
                  <p className="mt-1 font-semibold">98%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "季節感と栄養のバランス",
              body: "旬食材を中心に、家族の年齢や健康状態に合わせた献立を提案。",
            },
            {
              title: "上質で落ち着いた体験設計",
              body: "パステル基調のやさしい配色で、日々の調理時間に余白を。",
            },
            {
              title: "都市部・郊外どちらも使いやすい",
              body: "買い物環境に応じた食材代替や保存術まで一緒に案内。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/80 p-6 shadow-[0_15px_35px_rgba(157,119,108,0.12)]"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6B6460]">
                {item.body}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-[#F0E1DC] bg-white/70 p-8">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B78F84]">
                Premium Community
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                忙しい毎日でも、心地よい食卓へ
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#6B6460]">
                会員限定で、食材の購入先や地域別の旬情報、保存のコツを
                まとめたガイドを提供しています。
              </p>
            </div>
            <div className="rounded-2xl bg-[#FBF7F4] p-6 text-sm text-[#6B6460]">
              <div className="flex items-center justify-between">
                <span>都市部利用率</span>
                <span className="font-semibold text-[#3D3A37]">70%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white">
                <div className="h-2 w-[70%] rounded-full bg-[#E7BDB0]" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span>地方・郊外利用率</span>
                <span className="font-semibold text-[#3D3A37]">30%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white">
                <div className="h-2 w-[30%] rounded-full bg-[#E7BDB0]" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-white/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-xs text-[#8C817C] md:flex-row md:items-center">
          <p>© 2026 KIKUHA. All rights reserved.</p>
          <div className="flex gap-4">
            <span>利用規約</span>
            <span>プライバシー</span>
            <span>お問い合わせ</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
