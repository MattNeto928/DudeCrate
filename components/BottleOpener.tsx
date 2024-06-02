import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PinContainer } from "./ui/3d-pin"
import { NavBar } from "./NavBar"
import { AuthProvider } from "./AuthProvider"

export function BottleOpener() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-[100dvh]">
        <NavBar />
        <main className="flex-1">
          <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 sm:grid-cols-2 md:gap-16 justify-center">
                <div className="flex flex-col items-start space-y-4">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Elevate Your Drinking Experience with a Custom Bottle Opener
                  </h1>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    Discover the ultimate in personalized bottle openers, crafted with premium materials and designed to
                    elevate your drinking experience.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                      href="/customize"
                    >
                      Customize Your Bottle Opener
                    </Link>
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 transform hover:-translate-y-1 transition-all duration-300 ease-in-out dark:border-gray-800"
                      href="/bottle-openers"
                    >
                      Shop Bottle Openers
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <img
                    alt="Hero"
                    className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover"
                    src="/TKE.jpg"
                  />
                </div>
              </div>
              <div className="sm:hidden">
                <img
                  alt="Hero"
                  className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover"
                  src="/GT.jpeg"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6 mx-auto max-w-5xl">
              <div className="flex flex-col items-start space-y-4 text-left">
                <div className=" grid gap-[25vw] sm:grid-cols-1 sm md:grid-cols-2 lg:grid-cols-4 pb-24 w-full items-center justify-center ">
                  <PinContainer className='gap-1'
                    title="Custom Fraternity Bottle Openers"
                    href="www.dudecrate.shop"
                  >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        TKE
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                          Tau Kapp Epsilon
                        </span>
                      </div>
                      <img
                        alt="TKE"
                        className="w-auto mt-10 rounded-xl"
                        src="/GT.jpeg"
                        width='45'
                      />
                    </div>
                  </PinContainer>
                  <PinContainer className='gap-1'
                    title="Custom Fraternity Bottle Openers"
                    href="www.dudecrate.shop"
                  >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        TKE
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                          Tau Kapp Epsilon
                        </span>
                      </div>
                      <img
                        alt="TKE"
                        className="w-auto mt-10 rounded-xl"
                        src="/GT.jpeg"
                        width='45'
                      />
                    </div>
                  </PinContainer>
                  <PinContainer className='gap-1'
                    title="Custom Fraternity Bottle Openers"
                    href="www.dudecrate.shop"
                  >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        TKE
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                          Tau Kapp Epsilon
                        </span>
                      </div>
                      <img
                        alt="TKE"
                        className="w-auto mt-10 rounded-xl"
                        src="/GT.jpeg"
                        width='45'
                      />
                    </div>
                  </PinContainer>
                  <PinContainer className='gap-1'
                    title="Custom Fraternity Bottle Openers"
                    href="www.dudecrate.shop"
                  >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        TKE
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                          Tau Kapp Epsilon
                        </span>
                      </div>
                      <img
                        alt="TKE"
                        className="w-auto mt-10 rounded-xl"
                        src="/GT.jpeg"
                        width='45'
                      />
                    </div>
                  </PinContainer>
                </div>
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Custom Bottle Openers
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Drinking Experience</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the ultimate in personalized bottle openers, crafted with premium materials and designed to
                  elevate your drinking experience.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center">
                <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                  <h3 className="text-lg font-bold">Customizable Designs</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Choose from a variety of designs and customize them with your own text, logo, or artwork to make it
                    truly your own.
                  </p>
                </div>
                <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                  <h3 className="text-lg font-bold">Premium Materials</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our bottle openers are crafted from high-quality materials like stainless steel, brass, and wood to
                    ensure durability and elegance.
                  </p>
                </div>
                <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                  <h3 className="text-lg font-bold">Unique Finishes</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Choose from a variety of finishes, including polished, matte, and antique, to match your personal
                    style.
                  </p>
                </div>
                <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                  <h3 className="text-lg font-bold">Engraving Options</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add a personal touch by engraving your bottle opener with a name, date, or special message.
                  </p>
                </div>
                <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                  <h3 className="text-lg font-bold">Durable Construction</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our bottle openers are built to last, with a sturdy design that can withstand frequent use.
                  </p>
                </div>
                <div className="grid gap-1 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                  <h3 className="text-lg font-bold">Versatile Uses</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Use your custom bottle opener for parties, events, or as a unique gift for friends and family.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4 justify-center">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                  href="/customize"
                >
                  Customize Your Bottle Opener
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 transform hover:-translate-y-1 transition-all duration-300 ease-in-out dark:border-gray-800"
                  href="/bottle-openers"
                >
                  Shop Bottle Openers
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center justify-center gap-4 px-4 md:px-6 mx-auto max-w-5xl">
              <div className="flex flex-col items-start space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Experience the Custom Bottle Opener Difference
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the ultimate in personalized bottle openers, crafted with premium materials and designed to
                  elevate your drinking experience.
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
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Custom Bottle Opener. All rights reserved.</p>
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
    </AuthProvider>
  )
}

