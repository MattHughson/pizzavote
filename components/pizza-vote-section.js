"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState,  } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";

export default function PizzaVoteSection({ pizza,  }) {
  // Initialize pizza options with parsed votes, defaulting to 0 if not available
  const [pizzaOptions, setPizzaOptions] = useState(
    pizza?.Restaurants?.map((p) => ({ ...p, votes: parseInt(p.votes, 10) || 0 })) || []
  );

  const handleVote = async (id) => {
    // Update local state with the new vote count for the clicked pizza  const updatedStory = {
  
    const updatedPizzaOptions = pizzaOptions.map((pizza) =>
      pizza.realid === id ? { ...pizza, votes: pizza.votes + 1 } : pizza
    );
    setPizzaOptions(updatedPizzaOptions);

    let updatedStory = {
      "story": {
          "name": "Home",
          "id": 498132187,
          "uuid": "89ce106e-5d87-4c0a-b20f-84447fe57858",
          "content": {
              "_uid": "705f8269-d3bb-4f83-b609-269122a7a522",
              "body": [
                  {
                      "syb": "tst",
                      "_uid": "452d3937-0727-47eb-99b3-bfa1551cdf29",
                      "Image": {
                          "id": 21137324,
                          "alt": "",
                          "name": "",
                          "focus": "",
                          "title": "",
                          "source": "",
                          "filename": "https://a.storyblok.com/f/289289/746x671/d8f3b966b2/screenshot-2025-01-21-at-3-58-14-pm.png",
                          "copyright": "",
                          "fieldtype": "asset",
                          "meta_data": {},
                          "is_external_url": false
                      },
                      "title": "hi",
                      "component": "hero"
                  },
                  {
                      "sub": "Vote for the best slice",
                      "_uid": "42d1df66-66cd-48f9-89c8-fc90aa4a1dea",
                      "headline": "React MTL Pizza Vote",
                      "component": "teaser"
                  },
                  {
                      "_uid": "61a46462-a036-4d59-9425-1cd046666353",
                      "name": "",
                      "component": "feature",
                      "restarants": "",
                      "Restaurants": [
                          {
                              "Name": "Pizza Toni",
                              "_uid": "04b932ff-cba8-4322-8e4b-0d85ee675406",
                              "image": {
                                  "id": 21348766,
                                  "alt": "",
                                  "name": "",
                                  "focus": "",
                                  "title": "",
                                  "source": "",
                                  "filename": "https://a.storyblok.com/f/289289/1032x598/4c94549ccc/screenshot-2025-03-12-at-1-59-55-pm.png",
                                  "copyright": "",
                                  "fieldtype": "asset",
                                  "meta_data": {},
                                  "is_external_url": false
                              },
                              "votes": `${pizzaOptions[0].votes + 1}`,  
                              "realid": "1",
                              "component": "Restaurant",
                              "description": "best place"
                          },
                          {
                              "Name": "Slice + Soda",
                              "_uid": "b4b1960e-2368-4f32-9127-5a16cf908ec1",
                              "image": {
                                  "id": 21349342,
                                  "alt": "",
                                  "name": "",
                                  "focus": "",
                                  "title": "",
                                  "source": "",
                                  "filename": "https://a.storyblok.com/f/289289/400x499/d1b2722185/435331864_945691597558724_7649144473006069158_n-1.jpg",
                                  "copyright": "",
                                  "fieldtype": "asset",
                                  "meta_data": {},
                                  "is_external_url": false
                              },
                              "votes": `${pizzaOptions[1].votes + 1}`,  
                              "realid": "2",
                              "component": "Restaurant",
                              "description": ""
                          }
                      ]
                  }
              ],
              "logo": {
                  "id": 21342974,
                  "alt": "",
                  "name": "",
                  "focus": "",
                  "title": "",
                  "source": "",
                  "filename": "https://a.storyblok.com/f/289289/103x22/434656c895/logotype-black-0lhnmj6k.svg",
                  "copyright": "",
                  "fieldtype": "asset",
                  "meta_data": {},
                  "is_external_url": false
              },
              "component": "page"
          },
          "slug": "home",
          "full_slug": "home",
          "sort_by_date": null,
          "position": 0,
          "tag_list": [],
          "is_startpage": false,
          "parent_id": 0,
          "meta_data": null,
          "group_id": "1cab2645-952b-4651-b5b8-1c7fd8258bd2",
          "first_published_at": "2025-03-12T15:43:13.301Z",
          "release_id": null,
          "lang": "default",
          "path": "/",
          "alternates": [],
          "default_full_slug": null,
          "translated_slugs": null,
          "publish": true
      }
  }
 
     

    try {
      const response = await fetch(
        "https://mapi.storyblok.com/v1/spaces/289289/stories/498132187", 
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "qjVcttbyrWq3mldaoYgHfQtt-217911-nT-aDiM8w81PjG32Re9g", 
          },
          body: JSON.stringify(updatedStory), 
        }
      );

      if (!response.ok) {
        console.error("Failed to update Storyblok:", await response.text());
      }
    } catch (error) {
      console.error("Error updating votes:", error);
    }
  };


  // const mostVoted = useMemo(() => {
  //   return [...pizzaOptions].sort((a, b) => b.votes - a.votes)[0];
  // }, [pizzaOptions]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pizzaOptions.map((pizza) => (
        <Card key={pizza.realid} className="overflow-hidden rounded-lg shadow-md">
          <div className="relative">
            <img
              src={pizza.image?.filename || "/placeholder.svg"}
              alt={pizza.Name}
              className="w-full h-48 object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {pizza.Name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{pizza.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4 text-primary" />
              <span className="font-medium">{pizza.votes} votes</span>
            </div>
            <Button
              onClick={() => handleVote(pizza.realid)} // Call handleVote with the restaurant ID
              className="transition-all hover:scale-105"
            >
              Vote
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
