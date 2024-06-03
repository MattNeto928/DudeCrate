import Link from "next/link";
import { NavBar } from "@/components/NavBar";

const AboutPage = () => {
  return (
    <div>
      <main className="flex-1 w-full">
        < NavBar />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6 mx-auto max-w-5xl">
            <div className="flex flex-col items-start space-y-4 text-left">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                About Dude Crate
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover the Dude Crate Difference</h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Dude Crate, we believe in celebrating the unique interests and passions of every individual. Our
                mission is to curate high-quality, personalized products that allow our customers to express their
                individuality and connect with the things they love.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">From Humble Beginnings to Dude Crate</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dude Crate was founded in 2015 by a group of friends who shared a passion for discovering unique and
                high-quality products. Frustrated by the lack of personalized subscription services that catered to
                their diverse interests, they decided to create their own.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Starting with just a few products and a handful of subscribers, Dude Crate quickly gained a loyal
                following among men who were looking for a way to discover new and exciting items. As the company grew,
                so did our commitment to curating the best possible experience for our customers.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Putting People First</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At the heart of Dude Crate is a deep commitment to our customers. We believe in building lasting
                relationships based on trust, transparency, and a shared passion for the things that make life more
                interesting.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team works tirelessly to curate a selection of products that not only meet the highest standards of
                quality but also reflect the diverse interests and personalities of our subscribers. We take pride in
                our ability to surprise and delight our customers with each new discovery.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Commitment
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevating the Everyday</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Dude Crate, we believe that the little things in life can make the biggest difference. That&apos;s why
                we&apos;re dedicated to finding unique and high-quality products that can help our customers elevate their
                everyday experiences.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Whether it&apos;s a beautifully crafted bottle opener, a state-of-the-art multi-tool, or a delicious craft
                beer, we strive to curate a selection of items that not only serve a practical purpose but also bring a
                sense of joy and fulfillment to our customers&apos; lives.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Explore Our Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;