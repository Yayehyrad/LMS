"use client"
import * as z from "zod"
import axios from "axios"
import { zodResolver } from '@hookform/resolvers-zod';
import { useForm } from "react-hook-form"
import {useRouter} from "next/router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"


const formSchema = z.object({
    title: z.string().min(1, {
      message: "Title is Required",
    }),
  })
function Create() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues : {
            title : ""
        }
    })
    const {isSubmitting , isValid} = form.formState
    const onSubmit = (values : z.infer<typeof formSchema>)=>{
        console.log(values)
    }
  return (
    <div className=" max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
        <div>
            <h1 className=" text-2xl">
                Name your course
            </h1>
            <p className=" text-sm text-slate-700">
              What would you like to name your course?  
            </p>
            <Form { ...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-x-8 mt-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Course Title</FormLabel>
                            <FormControl>
                                <Input disabled = {isSubmitting} placeholder="web dev" {...field} />
                            </FormControl>
                            <FormDescription>
                                what will you teach in this course
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className="flex items-center gapx--2">
                            <Link href={'/'}>
                                <Button type="button" variant={"ghost"} >
                                    cancle
                                </Button>
                            </Link>
                            <Button type="button" >
                                    continue
                            </Button>
                        </div>
                </form>
            </Form>
        </div>
    </div>
  )
}

export default Create