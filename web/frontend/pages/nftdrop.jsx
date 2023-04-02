import { useNavigate } from "react-router-dom";
import { Page, Layout } from "@shopify/polaris";

// import { NavigationSidebar } from "../components/NavigationSidebar";

export default function NFTDrop() {
  const navigate = useNavigate();

  return (
    <Page
      title="NFTDrop"
      primaryAction={{
        content: "Drop an NFT",
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
