import Head from 'next/head'
import Invite from '../components/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Convite Casamento | Takao & Tai</title>
        <meta name="description" content="Acesse o seu convite!"></meta>
        <meta property="og:title" content="Acesse o seu convite!" />
        <meta property="og:url" content="https://wedding-invite-ruby.vercel.app/" />
        <meta property="og:description" content="Convite Casamento | Takao & Tai"></meta>
        <meta property="og:image" itemProp="image" content="https://raw.githubusercontent.com/RenatoTMLima/wedding-invite/main/public/link-img.png"></meta>
        <meta property="og:type" content="website" />
      </Head>
      <Invite />
    </>
  )
}
