import Head from 'next/head'
import { useRouter } from 'next/router'
import Invite from '../components/Invite'

export default function Home() {
  const router = useRouter()

  const { inviteId } = router.query
  
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
      <Invite inviteId={inviteId} />
    </>
  )
}
