import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return(

     <div className="rounded-lg p-6">
              <h1 className="text-4xl font-bold text-center mb-8">{blok.headline}</h1>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                {blok.sub}
              </p>
             
            </div>
  )
  
}
export default Teaser;
