import { Pizza } from "lucide-react"

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary p-2 rounded-lg">
        <Pizza className="h-8 w-8 text-primary-foreground" />
      </div>
      <div className="font-bold text-xl">PizzaVote</div>
    </div>
  )
}

