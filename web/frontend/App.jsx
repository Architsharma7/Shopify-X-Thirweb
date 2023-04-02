import { BrowserRouter } from "react-router-dom";

import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
  NavigationSidebar
} from "./components";

export default function App() {

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <NavigationSidebar/>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
