import React from 'react'
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Hero = ({blok}) => {
   
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{blok?.title}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
         {blok?.sub}
        </p>
      </div>
    </div>
  )
}

export default Hero