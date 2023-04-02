import { useNavigate } from "react-router-dom";
import { Page, Layout } from "@shopify/polaris";

export default function TokenDrop() {
  const navigate = useNavigate();

  return (
    <Page
      title="Token Drops"
      primaryAction={{
        content: "Create Token Drop",
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
