import { useNavigate } from "react-router-dom";
import { Page, Layout } from "@shopify/polaris";

import { NavigationSidebar } from "../components/Navigation";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Page
      title="Tokengates"
      primaryAction={{
        content: "Create tokengate",
        onAction: () => {
          navigate("/createtokengate");
        },
      }}
    >
      <Layout>
        <Layout.Section>
          <NavigationSidebar/>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
