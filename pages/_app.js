import "../styles/globals.css"
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Storyblok/Page"
import Teaser from "../components/Storyblok/Teaser"
import Feature from "../components/Storyblok/Feature"

///stoyblok

const components = {
page: Page,
teaser: Teaser,
feature: Feature,
};

storyblokInit({
  accessToken: "epvc3Ows31DI8Zq47OvEQAtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
})


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

