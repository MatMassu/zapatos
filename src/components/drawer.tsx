"use client";

export default function Drawer() {
  return (
    <div className="fixed flex size-full mt-[100px]">
      <div className="min-h-screen bg-white basis-1/4 p-4 text-black"></div>
      <div className="w-full h-screen bg-[#00000086] backdrop-blur-md z-10"></div>
    </div>
  );
}
