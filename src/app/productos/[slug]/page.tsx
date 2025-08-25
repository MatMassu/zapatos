export default async function ProductPage({
  params,
}: {
  params: Promise<{ Id: number }>;
}) {
  const productId = (await params).Id;
  /* TODO: con productId recuperar datos de DB para mostrar info de compra */
  return (
    <div className="flex flex-row w-screen min-h-screen bg-white text-black text-7xl mt-[50px]">
      <div>{productId}</div>
      <div></div>
    </div>
  );
}
