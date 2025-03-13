"use client"
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pizza, ThumbsUp } from "lucide-react"

interface PizzaOption {
  id: number
  name: string
  description: string
  image: string
  votes: number
}

export default function PizzaVotingApp() {
  const [pizzaOptions, setPizzaOptions] = useState<PizzaOption[]>([
    {
      id: 1,
      name: "Margherita",
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
      image: "/placeholder.svg?height=200&width=300",
      votes: 12,
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "America's favorite with pepperoni slices and extra cheese",
      image: "/placeholder.svg?height=200&width=300",
      votes: 18,
    },
    {
      id: 3,
      name: "Vegetarian",
      description: "Loaded with bell peppers, mushrooms, onions, and olives",
      image: "/placeholder.svg?height=200&width=300",
      votes: 8,
    },
    {
      id: 4,
      name: "Hawaiian",
      description: "Sweet and savory with ham and pineapple toppings",
      image: "/placeholder.svg?height=200&width=300",
      votes: 10,
    },
  ])

  const handleVote = (id: number) => {
    setPizzaOptions(pizzaOptions.map((pizza) => (pizza.id === id ? { ...pizza, votes: pizza.votes + 1 } : pizza)))
  }

  // Find the pizza with the most votes
  const mostVoted = [...pizzaOptions].sort((a, b) => b.votes - a.votes)[0]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pizzaOptions.map((pizza) => (
        <Card key={pizza.id} className="overflow-hidden rounded-lg shadow-md">
          <div className="relative">
            <img src={pizza.image || "/placeholder.svg"} alt={pizza.name} className="w-full h-48 object-cover" />
            {pizza.id === mostVoted.id && (
              <Badge className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600">Most Popular</Badge>
            )}
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pizza className="h-5 w-5" />
              {pizza.name}
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
            <Button onClick={() => handleVote(pizza.id)} className="transition-all hover:scale-105">
              Vote
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

