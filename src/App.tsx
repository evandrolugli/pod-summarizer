import { Github, FileVideo, Upload, Wand2 } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Slider } from './components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Podcast AI</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Developed with 💜</span>

          <Separator orientation='vertical' className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea 
              className="resize-none p-4 leading-relaxed"
              placeholder='Add the prompt to AI...'
            />
            <Textarea 
              className="resize-none"
              placeholder='Result created by AI...'
              readOnly 
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Reminder: You can use the variable <code className="text-violet-400">{'{transcription}'}</code>...
          </p>  
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label 
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h4"/>
              Select a video
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-readonly" />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor='transcription_prompt'>Transcription Prompt</Label>
              <Textarea 
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder='Add key words, separated by comma (,)'
              />
            </div>

            <Button type="submit" className="w-full">
              Load Video
              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
          <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="summary">Podcast Summary</SelectItem>
                  <SelectItem value="topics">Podcast Topics</SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className="space-y-2">
              <Label>Model</Label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                You can customized this option soon
              </span>
            </div>
            <Separator />

            <div className="space-y-4">
              <Label>Temperature</Label>
              <Slider 
                min={0}
                max={1}
                step={0.1}
              />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Setting a higher maximum value tends to produce more creative results
              </span>
            </div>
            <Separator />
            <Button type="submit" className="w-full">
              Carry out
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
