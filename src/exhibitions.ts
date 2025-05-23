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
    disabled: true,
    title: "AIとオセロ",
    image: {
      src: "img/othello.png",
      alt: "オセロのイメージ",
    },
    description: `
    6 × 6マスのちょっと小さいオセロで、AIと対戦してみましょう！勝つのはちょっと難しいかも！？オセロを通じて「AIと対戦する楽しさ」や「AIがどのようなものかを理解するきっかけ」にもなります。さあ、あなたの戦略でAIを打ち負かしてみませんか？
				`,
    url: "https://othello.utcode.net/",
    isNew: false,
    target: "どなたでも",
    takes: timeEst.short,
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
    takes: timeEst.med,
  },
  {
    title: "Shortcut Puzzle",
    image: {
      src: "img/shortcut.png",
      alt: "Shortcutゲームのイメージ",
    },
    description: `
    あなたは普段ショートカットキーを使ってますか？いつも多用している方も初めて聞いた方も、ショートカットを魔法のように操りましょう！2Dアクションパズルゲームの「Shortcut Puzzle」をぜひ遊んでみてください！ 

				`,
    url: "https://shortcut-game.utcode.net/",
    isNew: true,
    target: "どなたでも",
    takes: timeEst.med,
  },
  {
    title: "Falling Nikochan",
    image: {
      src: "img/nikochan_tetoris.webp",
      alt: "Nikochanのイメージ",
    },
    description: `
    シンプルでかわいいリズムゲーム (音ゲー) です。 PC だけでなくタブレットやスマートフォンなどでも手軽に遊べます。さらに、アカウント登録やログイン不要で誰でも譜面を作成することができます。
				`,
    url: "https://nikochan.utcode.net/?fes=mf98", // クエリパラメータで戻るボタンの表示が変わるようになっています
    isNew: true,
    target: "どなたでも",
    takes: timeEst.short,
  },
  /*
  {
    title: "ブロックプログラミングで並び替え",
    coverImage: {
      src: "https://source.unsplash.com/hLvQ4-QEBAE/800x300",
      alt: "身長順で並び替えのイメージ",
    },
    description:
      // prettier-ignore
      <p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sint est omnis incidunt harum, maiores accusantium reiciendis id error nobis! Molestiae odit dignissimos illo nisi aperiam quod repellat placeat voluptas.
      </p>,
    linkTo: "/sort",
    targetAge: "小学生以上におすすめ",
    isNew: false,
    requiredTime: "10分～",
  },
  */

  // {
  //   title: "Blosite",
  //   image: {
  //     src: "img/blosite.png",
  //     alt: "blosite のイメージ",
  //   },
  //   description: `
  //   ブロックプログラミングで自分だけのウェブサイトを作りましょう！豊富なチュートリアルがあるので、プログラミングが初めての方でも楽しめます。作ったサイトはBlosite内で共有することもできます！他の人に作ったウェブサイトを自慢しちゃいましょう〜
  // 		`,
  //   url: "https://blosite.utcode.net",
  //   isNew: true,
  //   target: "小学生以上におすすめ",
  //   takes: timeEst.med,
  // },
  {
    title: "ひとり麻雀",
    image: {
      src: "img/hitori-mahjong.png",
      alt: "麻雀のイメージ",
    },
    description: `
        麻雀はハマると抜け出せなくなるくらい面白いにもかかわらず、鳴きや点数計算、
        押し引きといったように様々な要素があるため、始めるハードルが上がってしまっています。
        そこで、「ひとり麻雀」では平面の牌効率だけのパズルとしてもっと簡単に遊べるようにしました。
			`,
    url: "https://mahjong.utcode.net/",
    isNew: false,
    target: "中高生以上におすすめ",
    takes: timeEst.short,
  },
  // {
  //   title: "競馬AI",
  //   image: {
  //     src: "img/horse.png",
  //     alt: "競馬のイメージ",
  //   },
  //   description: `
  //     競馬をAIで予測しようというのがこのプロジェクトが発足した理由です。
  //     そしてこのサイトではそのAIと対戦をしたり、AIの学習に使われたデータについて閲覧することが出来ます。
  //     AIとの対戦ではランダムで出てくる過去データをもとに順位の予想勝負をしてもらいます。
  //     ハイスコアを出すとランキングボードに乗ることが出来るのでぜひ頑張ってください。
  // 		`,
  //   url: "https://keiba.utcode.net/",
  //   isNew: true,
  //   target: "中高生以上におすすめ",
  //   takes: timeEst.med,
  // },
  {
    title: "ハッカーになろう",
    image: {
      src: "img/security.png",
      alt: "セキュリティのイメージ",
    },
    description: `
    悪用厳禁！Web サービスを攻撃して、隠された秘密のデータを盗み出そう！ 実際に使われたことのあるサイバー攻撃手法を習得して、あなたもついにハッカーデビュー！？ インターネット上の詐欺から身を守る方法も学べます。
				`,
    url: "https://security.utcode.net/",
    isNew: false,
    target: "大人向け",
    takes: timeEst.long,
  },
  {
    title: "新歓ハッカソン作品",
    image: {
      src: "img/newcomers-hackathon.png",
      alt: "ハッカソンのイメージ",
    },
    description: `
    2024年5月に開催された新歓ハッカソンで、新入生たちがわずか2日間で作り上げた個人開発作品の展示です。ゲームやツール、学習コンテンツなど多彩なジャンルの中に、発想と技術の光る作品が勢ぞろい！初めての開発とは思えない完成度をぜひご覧ください。
			`,
    url: "/hackathon",
    isNew: true,
    target: "どなたでも",
    takes: timeEst.med,
  },
];
