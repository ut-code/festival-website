type TargetAge = "どなたでも" | "小中学生以上におすすめ" | "大人向け";
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
};

export const exhibitions: Exhibition[] = [
  {
    title: "AIとオセロ",
    image: {
      src: "img/hoge.png",
      alt: "オセロのイメージ",
    },
    description: `
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
				corporis enim accusamus. Et voluptates, atque consequuntur, dolores
				dicta quibusdam reprehenderit aliquam veritatis unde sit ad. Consequatur
				quis ea autem velit.
				`,
    url: "/ai-othello",
    isNew: true,
    target: "どなたでも",
    takes: timeEst.short,
  },
  {
    title: "ブロックプログラミングで迷路",
    image: {
      src: "https://source.unsplash.com/hLvQ4-QEBAE/800x300",
      alt: "迷路のイメージ",
    },
    description: `
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sint est
				omnis incidunt harum, maiores accusantium reiciendis id error nobis!
				Molestiae odit dignissimos illo nisi aperiam quod repellat placeat
				voluptas.
			`,
    url: "/mage",
    isNew: false,
    target: "小中学生以上におすすめ",
    takes: timeEst.med,
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
  {
    title: "麻雀",
    image: {
      src: "img/hitori-mahjong.png",
      alt: "麻雀のイメージ",
    },
    description: `
        麻雀はハマると抜け出せなくなるくらい面白いにもかかわらず、鳴きや点数計算、
        押し引きといったように様々な要素があるため、始めるハードルが上がってしまっています。
        そこで、「ひとり麻雀」では平面の牌効率だけのパズルとしてもっと簡単に遊べるようにしました。
			`,
    url: "/mahjong",
    isNew: true,
    target: "小中学生以上におすすめ",
    takes: timeEst.short,
  },
  {
    title: "Blosite",
    image: {
      src: "img/piyo.png",
      alt: "blosite のイメージ",
    },
    description: `
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
				consequuntur pariatur quam nihil quasi a tempora cum magnam natus labore
				velit ipsum provident, voluptas, expedita hic neque repellendus ipsam
				sapiente?
			`,
    url: "/blosite",
    isNew: true,
    target: "小中学生以上におすすめ",
    takes: timeEst.med,
  },
  {
    title: "ハッカーになろう",
    image: {
      src: "img/piyo.png",
      alt: "セキュリティのイメージ",
    },
    description: `
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
				nisi similique recusandae maxime suscipit explicabo ex inventore.
				Laborum voluptates assumenda accusantium consequatur veniam ab amet,
				temporibus repudiandae distinctio, dignissimos rerum?
				`,
    url: "/security",
    isNew: false,
    target: "大人向け",
    takes: timeEst.short, // 本当に？
  },
  {
    title: "競馬AI",
    image: {
      src: "img/piyo.png",
      alt: "競馬のイメージ",
    },
    description: `
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				voluptatem quo minima ratione, aperiam iste aliquid! Dolor fugiat rerum,
				ut est itaque ipsa similique. Animi unde praesentium quis error eum.
			`,
    url: "/horse-racing",
    isNew: true,
    target: "大人向け",
    takes: timeEst.short,
  },
];
