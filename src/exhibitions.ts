type TargetAge =
  | "どなたでも"
  | "小学生以上におすすめ"
  | "中高生以上におすすめ"
  | "大人向け";
const timeEst = {
  short: "5分程度",
  short_med: "5～15分ほど",
  med: "15分ほど",
  med_long: "5～15分ほど",
  long: "30分〜",
} as const;
type TimeEst = (typeof timeEst)[keyof typeof timeEst];

type Exhibition = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  url?: string;
  dialog?: string;
  isNew: boolean;
  target: TargetAge;
  takes: TimeEst;
  disabled?: boolean;
  offline_only?: boolean;
};

export const exhibitions: Exhibition[] = [
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
    takes: timeEst.med,
  },
  {
    // disabled: true,
    title: "8番ページ",
    image: {
      src: "img/page8.jpeg",
      alt: `「8番ページ」と"Page 8"が合わさったスタイリッシュなロゴ`,
    },
    description: `
      『8番ページ』は、あなたを奇妙なループに閉じ込める、
      “Web上の 8 番出口”をモチーフにしたゲームです。
      何度も繰り返されるページの中で、
      ほんのわずかな異変を見つけてください。
      あなたは、このループから抜け出せますか？
		`,
    url: "https://page8.utcode.net",
    isNew: true,
    target: "どなたでも",
    takes: timeEst.long,
  },
  {
    offline_only: true,
    title: "ブラウザハック入門",
    image: {
      src: "img/browser-hack.png",
      alt: `プラウザを用いてWebサイトをハッキングしている様子`,
    },
    description: `
      普段見ているWebサイトには、実は「裏側」がある。Chromeに標準搭載された開発者ツールを使えば、誰でもその秘密を覗ける。コードを読み解き、仕組みを暴く——初心者でも楽しめる4つのハックミッションで、Webの世界の扉を開けよう。
		`,
    url: "https://browser-hack.utcode.net/",
    isNew: true,
    target: "中高生以上におすすめ",
    takes: timeEst.long,
  },
  {
    // disabled: true,
    title: "Life Code",
    image: {
      src: "img/Life-Code_thumb-nail.gif",
      alt: `Life Codeのロゴがライフゲームの規則に従って変化して消える様子`,
    },
    description: `
      "Life Codeは、自分でルールを変えながら遊べるライフゲームです。
      コードを書きかえるとマスの中の「いのち」の動きが変わります。
      プログラミングで実験しながら、ふしぎな世界を作り出せるゲームです。"
		`,
    url: "https://life-code.utcode.net/",
    isNew: true,
    target: "中高生以上におすすめ",
    takes: timeEst.short_med,
  },
  {
    // disabled: true,
    offline_only: true,
    title: "Hack-shooter",
    image: {
      src: "img/Hackshooter_theme.png",
      alt: `Life Codeのロゴがライフゲームの規則に従って変化して消える様子`,
    },
    description: `
      シューティングゲームの裏側をプログラミングすることによって、より簡単に、よりスマートにゲームを攻略しよう！
		`,
    dialog: "タスクバーにあるペンギンのアイコンをクリックしてください。",
    isNew: true,
    target: "小学生以上におすすめ",
    takes: timeEst.med_long,
  },
  {
    // disabled: true,
    title: "プラス演算子ゲーム",
    image: {
      src: "img/plus_operator_game.png",
      alt: `Life Codeのロゴがライフゲームの規則に従って変化して消える様子`,
    },
    description: `
      「プラス演算子ゲーム」へようこそ！このゲームは、数字が書かれたカードと様々な効果を持つ「演算子」カードを駆使して、場に並べられたすべての数字を「1」にすることを目指す、戦略的パズルゲームです。ひらめきと論理的思考を武器に、最短手数でのクリアを目指しましょう！
		`,
    url: "https://plusoperatorgame.onrender.com",
    isNew: true,
    target: "小学生以上におすすめ",
    takes: timeEst.short,
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
    takes: timeEst.short,
  },
  // {
  //   title: "Falling Nikochan",
  //   image: {
  //     src: "img/nikochan_tetoris.webp",
  //     alt: "Nikochanのイメージ",
  //   },
  //   description: `
  //   シンプルでかわいいリズムゲーム (音ゲー) です。 PC だけでなくタブレットやスマートフォンなどでも手軽に遊べます。さらに、アカウント登録やログイン不要で誰でも譜面を作成することができます。
  // 			`,
  //   url: "https://nikochan.utcode.net/?fes=mf98", // クエリパラメータで戻るボタンの表示が変わるようになっています
  //   isNew: true,
  //   target: "どなたでも",
  //   takes: timeEst.short,
  // },
];
