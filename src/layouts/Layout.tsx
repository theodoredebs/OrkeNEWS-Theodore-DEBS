"use client";
import Header from "./Header";
import Footer from "./Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = (props: LayoutProps) => {
  const { children } = props;
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main className=" z-[0] min-h-screen flex-1 flex flex-col  overflow-hidden max-sm:p-5 !pt-[50px] px-[10%]  m-auto container gap-5 mb-4 w-[calc(100vw-2rem)]">
          {children}
        </main>
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default Layout;
