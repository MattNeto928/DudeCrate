"use client"

import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import { useState, FormEvent, ChangeEvent } from "react";
import { createClient } from '@supabase/supabase-js';
import ReCAPTCHA from 'react-google-recaptcha';

import { Libre_Franklin } from 'next/font/google';
import { Chivo } from 'next/font/google';
import './style.css';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "0";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON || "0";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Contact() {
  const [formData, setFormData] = useState<{ name: string, email: string, message: string }>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!captchaToken) {
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: captchaToken })
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error('Captcha verification failed');
      }

      const { data: supabaseData, error } = await supabase
        .from('contacts')
        .insert([
          { name: formData.name, email: formData.email, message: formData.message }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
      setCaptchaToken(null);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="w-full max-w-4xl mx-auto py-12 md:py-20">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Have a question or want to work together? Fill out the form below and we&apos;ll get back to you as soon as
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" className="min-h-[120px]" />
                </div>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_URL || ""}
                  onChange={handleCaptchaChange}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {isSuccess && <p className="text-green-500">Message sent successfully!</p>}
                {isError && <p className="text-red-500">Failed to send message. Please try again.</p>}
              </form>
            </div>
            <div className="hidden md:block">
              <img src="/DudeCrateLogo.png" width={640} height={480} alt="Contact Us" className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
