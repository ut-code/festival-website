type TargetAge =
  | "どなたでも"
  | "小学生以上におすすめ"
  | "中高生以上におすすめ"
  | "大人向け";
const timeEst = {
  s: "5分ほど",
  m: "15分ほど",
  l: "20〜30分",
  xl: "30分〜",
} as const;
type TimeEst = (typeof timeEst)[keyof typeof timeEst];

type Exhibition = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  url: string;
  isNew: boolean;
  target: TargetAge;
  takes: TimeEst;
  disabled?: boolean;
};

export const exhibitions: Exhibition[] = [
  {
    title: "Space Simulator",
    image: {
      src: "img/space.png",
      alt: "宇宙シミュレータのイメージ",
    },
    description: `
    "Space Simulator"は、惑星を自由に配置し、宇宙の動きをシミュレーションできるゲームです。テンプレートから始めたり、惑星の半径や位置を調整したりしながら、自分だけのオリジナル宇宙を作り上げましょう！
			`,
    url: "https://space-simulator.utcode.net/",
    isNew: true,
    target: "小学生以上におすすめ",
    takes: timeEst.m,
  },

  {
    title: "ビリヤードゲーム",
    image: {
      src: "img/billiards.png",
      alt: "ビリヤードのイメージ",
    },
    description: `
    ビリヤードの3D版ソロチャレンジ。限られた打数で全てのボールをポケットに落とせばクリア。様々なギミックを攻略して、戦略とテクニックを磨こう。
			`,
    url: "https://billiards-game.utcode.net/",
    isNew: true,
    target: "小学生以上におすすめ",
    takes: timeEst.l,
  },

  {
    title: "アイスクリームを作ろう！",
    image: {
      src: "img/icecream.png",
      alt: "アイスクリームのイメージ",
    },
    description: `
    アイスクリームを作りながら君のプログラミング力を試してみよう！注文通りのアイスを作れるように従業員を配置しましょう。どの人をどう組み合わせるかによって、完成するアイスは大きく変わります。全部のステージをクリアできるでしょうか!?
			`,
    url: "https://icecream.utcode.net/",
    isNew: true,
    target: "どなたでも",
    takes: timeEst.m,
  },

  {
    title: "音ゲー回避アクション",
    image: {
      src: "img/escape-action.png",
      alt: "回避アクションのイメージ",
    },
    description: `
    ダッシュで回避！爽快音ゲーです
			`,
    url: "https://sounddodge.onrender.com/",
    isNew: true,
    target: "どなたでも",
    takes: timeEst.s,
  },

  {
    title: "Magic Network",
    image: {
      src: "img/magic-network.png",
      alt: "Magic Networkのイメージ",
    },
    description: `
    コードを書いてタスクを自動化し、ネットワークを構築する体験型プログラミングゲームです。現在制作中で始めのチュートリアルのみ遊べます。プログラミングで世界を動かす感覚を味わってみましょう！
				`,
    url: "https://magic-network.utcode.net/",
    isNew: true,
    target: "大人向け",
    takes: timeEst.l,
  },

  {
    title: "はじめてのプログラミング 迷路",
    image: {
      src: "img/maze.png",
      alt: "迷路のイメージ",
    },
    description: `
    ut.code(); がこれまでの学園祭でも提供してきた、一番人気のコンテンツ！ブロックプログラミングを通して迷路のゴールまで到達し、プログラミングの基礎を体験してみましょう。最終的にはどのような迷路でもゴールできるアルゴリズムを作れるようになります！大人でも苦戦するかも！？
			`,
    url: "https://maze.utcode.net/",
    isNew: false,
    target: "小学生以上におすすめ",
    takes: timeEst.m,
  },
  {
    // disabled: true,
    title: "AIとオセロ",
    image: {
      src: "img/othello.png",
      alt: "オセロのイメージ",
    },
    description: `
    6 × 6マスのちょっと小さいオセロで、AIと対戦してみましょう！勝つのはちょっと難しいかも！？オセロを通じて「AIと対戦する楽しさ」や「AIがどのようなものかを理解するきっかけ」にもなります。さあ、あなたの戦略でAIを打ち負かしてみませんか？
				`,
    url: "https://boardgame.utcode.net/",
    isNew: false,
    target: "どなたでも",
    takes: timeEst.s,
  },

  {
    title: "CreateCPU",
    image: {
      src: "img/createCPU.png",
      alt: "CreateCPUのイメージ",
    },
    description: `
    皆さんの持つパソコンやスマートフォンは、私たちが手で計算するよりもずっと高速に計算を行うことができます。 これは、私たちの脳に相当する CPU と呼ばれる部品が、計算を高速に行っているからです。 高速な CPU を製造するには高度な技術が必要ですが、CPU の理論的背景自体は、実はとてもシンプルです。 足し算を行う論理回路を作りながら、CPU の仕組みを学んでいきましょう。
			`,
    url: "/create-cpu/",
    isNew: false,
    target: "中高生以上におすすめ",
    takes: timeEst.s,
  },
  {
    title: "Falling Nikochan",
    image: {
      src: "img/nikochan_tetoris.webp",
      alt: "Nikochanのイメージ",
    },
    description: `
    PC、タブレットやスマートフォンなどのブラウザーから手軽に遊べる、シンプルでかわいいリズムゲーム (音ゲー) です。YouTube埋め込みを利用し、さまざまな人気曲で遊べます。
        `,
    url: "https://nikochan.utcode.net/?fes=mf99", // クエリパラメータで戻るボタンの表示が変わるようになっています
    isNew: false,
    target: "どなたでも",
    takes: timeEst.s,
  },
];
