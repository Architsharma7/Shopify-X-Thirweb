import { useNavigate } from "react-router-dom";
import { Page, Layout } from "@shopify/polaris";

// import { NavigationSidebar } from "../components/NavigationSidebar";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Page
      title="TokenGate"
      primaryAction={{
        content: "Create Token gating",
        onAction: () => {
          navigate("/createtokengate");
        },
      }}
    >
      <Layout>
        <Layout.Section>{/* <NavigationSidebar /> */}</Layout.Section>
      </Layout>
    </Page>
  );
}
