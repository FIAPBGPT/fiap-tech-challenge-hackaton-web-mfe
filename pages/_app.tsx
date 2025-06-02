import StyledComponentsRegistry from "@/@core/lib/registry";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { Container } from "react-bootstrap";
import Loading from "./loading";
import { StyledRoot } from "@/@theme/styledRoot";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container fluid style={{ overflow: "hidden" }}>
      {/* <AppRouterCacheProvider> */}
      <StyledComponentsRegistry>
        <StyledRoot>
          <Suspense fallback={<Loading />}>
            {/* <SessionProvider session={pageProps.session}> */}
            {/* <QueryClientProvider client={queryClient}> */}
            {/* <HydrationBoundary state={pageProps.dehydratedState}> */}
            <Component {...pageProps} />
            {/* </HydrationBoundary> */}
            {/* </QueryClientProvider> */}
            {/* </SessionProvider> */}
          </Suspense>
        </StyledRoot>
      </StyledComponentsRegistry>
      {/* </AppRouterCacheProvider> */}
    </Container>
  );
}
