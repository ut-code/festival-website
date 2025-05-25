import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
// @ts-ignore
import howToVoteVideo from "./how-to-vote.mp4";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main className="container padding-vert--lg">
        <p>
          本日は企画にお越しいただきありがとうございます。次のQRコードまたは
          <a href="https://gogatsusai.jp/98/visitor/project/261">
            こちらのリンク
          </a>
          から五月祭グランプリへの投票をお願いしております。1分ほどで完了しますので、次の動画を参考に投票をお願いします！
        </p>
        <div className={styles.container}>
          <img src="/img/mf98-vote.png" width={"500px"} height={"500px"}></img>
          <video
            src={howToVoteVideo}
            controls
            className={styles.howToVoteVideo}
          />
        </div>
      </main>
    </Layout>
  );
}
