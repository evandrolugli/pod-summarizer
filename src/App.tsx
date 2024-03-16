import { Button } from "./components/ui/button";

export function App() {
  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Podcast AI</h1>
        <div className="flex items-center gap-3">
          <span>Develop with 💜</span>
          <Button>Github</Button>
        </div>
      </div>
    </div>
  )
}
