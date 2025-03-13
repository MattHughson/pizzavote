import { storyblokEditable } from "@storyblok/react";

import PizzaVoteSection from "../pizza-vote-section";

const Feature = ({ blok }) => (
  <div className="rounded-lg p-6" {...storyblokEditable(blok)}>
<PizzaVoteSection pizza={blok}/>
  </div>
);

export default Feature;
