import { Frame, Navigation } from "@shopify/polaris";
import React from "react";
import {
  HomeMinor,
  GiftCardMajor,
  DiscountCodeMajor,
  DiscountsMajor,
} from "@shopify/polaris-icons";
import Routes from "../Routes";
import { useLocation } from "react-router-dom";

export function NavigationSidebar() {

    const pages = import.meta.globEager("../pages/**/!(*.test.[jt]sx)*.([jt]sx)");  
    const location = useLocation();

  return (
    <Frame
    navigation={
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
              url: "/tokendrop",
              excludePaths: ["#"],
              label: "Token Drops",
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
    }>
      <Routes pages={pages} />
    </Frame>
  );
}
