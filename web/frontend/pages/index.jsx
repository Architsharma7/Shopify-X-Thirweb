import { Page, Layout } from "@shopify/polaris";

import { NavigationSidebar } from "../components/Navigation";

export default function HomePage() {

  return (
    <Page
      title="ShopifyxThirdweb"
    >
      <Layout>
        <Layout.Section>
          <NavigationSidebar/>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
