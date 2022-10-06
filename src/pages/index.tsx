import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>oh884U8.dev</h1>
        <h2>君のキャリアは生存戦略</h2>
        <h2>僕は高い給料を愛している</h2>

        {/* <Features /> */}

        {/* <div className="explanation">
          <p>aaa</p>

          <p>aaa</p>
        </div> */}
      </div>
    </>
  )
}
