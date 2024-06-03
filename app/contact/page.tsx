import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { NavBar } from "@/components/NavBar"

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'
import './style.css'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"



export default function contact() {
    return (
        <div className="w-full max-w-4xl mx-auto py-12 md:py-20">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Have a question or want to work together? Fill out the form below and we\'ll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Message Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Get in touch with our team for any inquiries or collaboration opportunities.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="hidden md:block">
                <img src="/placeholder.svg" width={640} height={480} alt="Contact Us" className="rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      )
}