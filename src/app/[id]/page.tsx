export default function ProductPage({ params }: { params: { slug: string } }) {
  return <div>Product details for {params.slug}</div>;
}
