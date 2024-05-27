/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/mniRDaK373V
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/


import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon  />
          <span className="sr-only">Dude Crate</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="font-taviraj text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            href="#"
          >
            Groomsman Kits
          </Link>
          <Link
            className="font-taviraj text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            href="#"
          >
            Individual Products
          </Link>
          <Link
            className="font-taviraj text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            href="#"
          >
            About
          </Link>
          <Link
            className="font-taviraj text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 sm:grid-cols-2 md:gap-16 justify-center">
              <div className="flex flex-col items-start space-y-4">
                <h1 className="font-taviraj lg:leading-tighter text-3xl  tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Elevate Your Groomsman Experience with Dude Crate
                </h1>
                <p className="font-rubik text-gray-500 md:text-xl dark:text-gray-400">
                  Discover the ultimate curation of premium groomsman tools and accessories tailored for the modern man.
                  Elevate your groomsman duties with Dude Crate.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    href="#"
                  >
                    Shop Groomsman Kits
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 transform hover:-translate-y-1 transition-all duration-300 ease-in-out dark:border-gray-800"
                    href="#"
                  >
                    Shop Individual Products
                  </Link>
                </div>
              </div>
              <div className="hidden sm:block">
                <img
                  alt="Hero"
                  className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover"
                  height="300"
                  src="/shaving.jpg"
                  width="1270"
                />
              </div>
            </div>
            <div className="sm:hidden">
              <img
                alt="Hero"
                className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                height="300"
                src="/placeholder.svg"
                width="1270"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6 mx-auto max-w-5xl">
            <div className="flex flex-col items-start space-y-4 text-left">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Dude Crate Groomsman Kits
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Groomsman Duties</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dude Crate Groomsman Kits are the ultimate solution for the modern groomsman, curating a selection of
                premium tools and accessories to enhance your groomsman experience.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center">
              <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-bold">Groomsman Essentials</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Discover the must-have tools and accessories for the modern groomsman, including a bottle opener,
                  cigar cutter, and more.
                </p>
              </div>
              <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-bold">Premium Grooming</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Elevate your grooming routine with high-quality products tailored for the groomsman.
                </p>
              </div>
              <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-bold">Personalized Touches</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Add a personal touch to your groomsman duties with customizable items in your Dude Crate.
                </p>
              </div>
              <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-bold">Exclusive Gear</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Discover unique and exclusive groomsman gear that you won't find anywhere else.
                </p>
              </div>
              <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-bold">Surprise & Delight</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experience the thrill of discovering new groomsman products tailored to your interests.
                </p>
              </div>
              <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-bold">Curated for Groomsmen</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dude Crate Groomsman Kits are designed specifically for the modern groomsman, catering to your unique
                  needs and preferences.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 justify-center">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                href="#"
              >
                Shop Groomsman Kits
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 transform hover:-translate-y-1 transition-all duration-300 ease-in-out dark:border-gray-800"
                href="#"
              >
                Shop Individual Products
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 mx-auto max-w-5xl">
            <div className="flex flex-col items-start space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the Dude Crate Difference
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the ultimate curation of premium groomsman tools and accessories tailored for the modern man.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button
                  className="transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                  type="submit"
                >
                  Get Notified
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link
                  className="underline underline-offset-2 transition-all duration-300 ease-in-out hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Dude Crate. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 transition-all duration-300 ease-in-out hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 transition-all duration-300 ease-in-out hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon() {
  return (
    <img
      alt="Hero"
      height="50"
      src="/DudeCrateLogo.png"
      width="50"
    />)
}
