export default function Footer() {
  return (
    <footer className="bg-black text-white font-serif p-6 flex flex-col items-center space-y-4 mt-auto">
      <h1 className="font-bold">Zapatos</h1>

      <div className="h-20 w-18 border border-white"></div>

      <p>Copyright 2025 - Todos los derechos reservados.</p>

      <p>
        Para reclamos ingresá{" "}
        <a className="underline" href="#">
          aquí
        </a>{" "}
        /{" "}
        <a className="underline" href="#">
          Botón de arrepentimiento
        </a>
        .
      </p>
    </footer>
  );
}
