import '../../css/general.css'
import { ClientOnly } from '../../css/client'

export function generateStaticParams() {
    return [{ slug: [''] }]
}

export default function Page() {
    return <ClientOnly />
}