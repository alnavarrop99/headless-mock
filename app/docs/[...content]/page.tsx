export default async function Content({ params }: { params: Promise<{ content: string }> }) {
  const { content } = await params
  return <>{content}</>
}
