import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from '@tanstack/react-query';
import Layout from "./pages/_layout";
import { queryClient } from './lib/query-client';
import { AppProviders } from "@/components/system/AppProviders";
import HomePage from "./pages/index";
import NotFoundPage from "./pages/not-found";
import { AppErrorBoundary } from "./components/system/AppErrorBoundary";

function getBase(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  return parts.length ? `/${parts[0]}/` : '/';
}
const APP_BASENAME = getBase(window.location.pathname);

function App() {
  return (
    <AppProviders>
      <QueryClientProvider client={queryClient}>
        <Router basename={APP_BASENAME}>
          <AppErrorBoundary>
            <Suspense fallback={<div className="p-4 text-sm text-muted-foreground">Loading…</div>}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </Suspense>
          </AppErrorBoundary>
        </Router>
      </QueryClientProvider>
    </AppProviders>
  );
}

export default App;
