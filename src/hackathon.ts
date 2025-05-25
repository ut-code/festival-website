type TargetAge =
  | "どなたでも"
  | "小学生以上におすすめ"
  | "中高生以上におすすめ"
  | "大人向け";
const timeEst = {
  short: "5分程度",
  med: "15分ほど",
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
  url: string;
  isNew: boolean;
  target: TargetAge;
  takes: TimeEst;
  disabled?: boolean;
};

export const exhibitions: Exhibition[] = [
  {
    title: "Fieldchat",
    image: {
      src: "../img/field-chat.webp",
      alt: "Fieldchatのイメージ",
    },
    description: `
    登録すると謎の空間に送り込まれます。この空間にいる自分以外の●とチャットすることができます。WASDで移動、Enterで話しかけます。●の位置とメッセージは実はリアルタイムで更新されます。　※ページの表示に時間がかかる場合があります
			`,
    url: "https://fieldchat2.onrender.com/",
    isNew: true,
    target: "中高生以上におすすめ",
    takes: timeEst.med,
  },
  {
    title: "玉避けゲーム",
    image: {
      src: "../img/tamayoke.webp",
      alt: "玉避けゲームのイメージ",
    },
    description: `
    球を避け続ける、ただそれだけのゲームです。 少しやってみたところ思っていたよりも難しく、40秒以内に終了してしまいます。 １分以上避け続けることができたら反射神経がきっとかなり良いです。

    ＊ちなみにマウスカーソルをキャンバス上から外すと無敵になるという基本的な欠陥に完成してから気づきました。　※ページの表示に時間がかかる場合があります
				`,
    url: "https://hack-s3es.onrender.com/",
    isNew: true,
    target: "どなたでも",
    takes: timeEst.short,
  },
  {
    title: "Scoundrel",
    image: {
      src: "../img/scoundrel.webp",
      alt: "scoundrelのイメージ",
    },
    description: `
    1人用トランプゲームのScoundrel(悪党)を再現しました．本来のルールですと非常に高難易度でしたのでオリジナルでスキル機能をつくりました．ルール説明も設けましたがルールは調べた方がわかりやすいと思います．　※ページの表示に時間がかかる場合があります
				`,
    url: "https://scoundel.onrender.com/",
    isNew: true,
    target: "中高生以上におすすめ",
    takes: timeEst.med,
  },
  {
    title: "タイピングゲームと単語クイズを組み合わせたゲーム",
    image: {
      src: "../img/typing-and-word-quiz.webp",
      alt: "タイピングゲームと単語クイズのイメージ",
    },
    description: `
        タイピングゲームと英単語クイズを組み合わせたゲーム。

        英検準一級の単語が表示されて、それをタイピングした後にその意味が選択肢で問われます。制限時間内にできるだけ多く解いきましょう。　※ページの表示に時間がかかる場合があります
			`,
    url: "https://hackerson1.onrender.com/",
    isNew: true,
    target: "中高生以上におすすめ",
    takes: timeEst.short,
  },
  {
    title: "タイピングゲームとブロック崩しを組み合わせたゲーム",
    image: {
      src: "../img/typing-breakout.webp",
      alt: "タイピングゲームとブロック崩しを組み合わせたゲームのイメージ",
    },
    description: `
      ブロック崩しとタイピングを織り交ぜました。

      ぜひ僕の記録を超えてください　※ページの表示に時間がかかる場合があります
  		`,
    url: "https://typing-3anr.onrender.com/",
    isNew: true,
    target: "小学生以上におすすめ",
    takes: timeEst.short,
  },
  {
    title: "ごきげんくん",
    image: {
      src: "../img/gokigenkunn.webp",
      alt: "ごきげんくんのイメージ",
    },
    description: `
      品目と賞味期限を入力し、賞味期限を管理するアプリです。データベースにつながっています。　※ページの表示に時間がかかる場合があります
		  `,
    url: "https://stockmanagement-ad9g.onrender.com/",
    isNew: true,
    target: "大人向け",
    takes: timeEst.med,
  },
  {
    title: "ピクセルアート",
    image: {
      src: "../img/pixel-art.webp",
      alt: "ピクセルアートのイメージ",
    },
    description: `
      ピクセルアートが書けちゃうものです。自由に好きな絵を書いてみてください！　※ページの表示に時間がかかる場合があります
			`,
    url: "https://pixelart-t3mu.onrender.com",
    isNew: true,
    target: "小学生以上におすすめ",
    takes: timeEst.short,
  },
  {
    title: "WebIMEBuilder",
    image: {
      src: "../img/webimebuilder.webp",
      alt: "WebIMEBuilderのイメージ",
    },
    description: `
      IMEを簡単に自作できるツールです。　※ページの表示に時間がかかる場合があります
			`,
    url: "https://web-ime-builder.pages.dev/",
    isNew: true,
    target: "小学生以上におすすめ",
    takes: timeEst.short,
  },
];
