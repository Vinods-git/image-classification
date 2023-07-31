import Image from 'next/image'
import ImageClassifier from "../components/ImageClassifier"
export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
        <ImageClassifier />
    </main>
  )
}
