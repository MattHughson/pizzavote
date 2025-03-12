import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Logo from "../logo"
import Image from 'next/image'

const Page = ({ blok }) => (
  console.log("blok", blok.logo),
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Image className="h-8 w-auto" src={blok?.logo?.filename} alt="logo" width={200} height={200} />
            </div>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
