/* eslint-disable react/no-unescaped-entities */

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({story}) {
  story = useStoryblokState(story);
  return (
    <div className="min-h-screen bg-[#D9EEFF]">
      <div className="container mx-auto py-4 px-4">
       <StoryblokComponent blok={story.content} />
      
        <div className="rounded-lg p-6">
          {/* <h1 className="text-4xl font-bold text-center mb-8">Pizza Popularity Contest</h1>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Vote for your favorite pizza! Click on the "Vote" button under your preferred pizza to show your support.
            The most popular pizza will be crowned the champion!
          </p> */}
          {/* <PizzaVoteSection /> */}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
