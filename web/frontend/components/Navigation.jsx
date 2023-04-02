import { Frame, Navigation } from "@shopify/polaris";
import {
  HomeMinor,
  GiftCardMajor,
  DiscountCodeMajor,
  DiscountsMajor,
} from "@shopify/polaris-icons";
import React from "react";
import { useLocation } from "react-router-dom";
import Routes from "../Routes";

export function NavigationSidebar() {

    const pages = import.meta.globEager("../pages/**/!(*.test.[jt]sx)*.([jt]sx)");  
    const location = useLocation();

  return (
    <Frame>
      <Navigation location={location.pathname}>
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
      <Routes pages={pages} />
    </Frame>
  );
}
