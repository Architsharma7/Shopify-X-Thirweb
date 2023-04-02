import { Frame, Navigation } from "@shopify/polaris";
import {
  HomeMinor,
  GiftCardMajor,
  DiscountCodeMajor,
  DiscountsMajor,
} from "@shopify/polaris-icons";
import React from "react";

function Navigation() {

  return (
    <Frame>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: "/",
              label: "Token Gating",
              icon: HomeMinor,
            },
            {
              url: "/nftdrops",
              label: "NFT Drop",
              icon: DiscountsMajor,
            },
          ]}
        />
        <Navigation.Section
          title="Loyalty Program"
          items={[
            {
              url: "/loyalty",
              excludePaths: ["#"],
              label: "TokenDrops",
              icon: GiftCardMajor,
            },
            {
              url: "/loyalpoints",
              excludePaths: ["#"],
              label: "Loyality Points",
              icon: DiscountCodeMajor,
            },
          ]}
        />
      </Navigation>
    </Frame>
  );
}
