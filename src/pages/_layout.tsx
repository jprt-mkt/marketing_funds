import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-svh">
      <header className="border-b sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80 bg-background/95">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 h-14 flex items-center gap-4">
          <div className="ml-auto flex items-center gap-2" />
        </div>
      </header>
      <main className="flex-1 w-full mx-auto max-w-7xl px-4 md:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
}
