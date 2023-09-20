import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <h1>Hello</h1>
    <Button variant={"destructive"} size={"icon"} >
      Click me
    </Button>
    </div>
  )
}