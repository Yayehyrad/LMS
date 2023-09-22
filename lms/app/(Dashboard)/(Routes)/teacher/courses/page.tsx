import { Button } from '@/components/ui/button'
import React from 'react'
import {Plus} from 'lucide-react'
import Link from 'next/link'
function Courses() {
  return (
    <div className='p-6'>
      <Link href='/teacher/create'>
        <Button >
          <Plus />
          Course
        </Button>
      </Link>
    </div>
  )
}

export default Courses