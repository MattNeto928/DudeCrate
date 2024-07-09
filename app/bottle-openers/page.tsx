import React from "react";
import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";

interface CollectionCarouselProps {
  title: string;
  items: string[];
  collectionType: string;
}

const CollectionCarousel: React.FC<CollectionCarouselProps> = ({ title, items, collectionType }) => (
  <div>
    <div className="flex flex-col items-start space-y-4 text-left">
      <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">{title}</div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Represent Your Favorite {title}</h2>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Customize your bottle opener with the logo of your favorite {title.toLowerCase()}.
      </p>
    </div>
    <Carousel className="w-full max-w-6xl">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <Card className="h-full">
                <img
                  src={`/placeholder.svg`} // Replace with actual logo URL
                  alt={`${item} Bottle Opener`}
                  width={150}
                  className="object-cover m-4 ml-10 rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">{item} Bottle Opener</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Represent your love for {item} with this custom bottle opener.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$13.99</span>
                    <Button variant="outline">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <div className="mt-4 text-center">
      <Link href={`/collection/${collectionType}`}>
        <Button variant="outline">View All {title}</Button>
      </Link>
    </div>
  </div>
);

interface Collection {
  title: string;
  items: string[];
  type: string;
}

const CollectionsCarousel: React.FC = () => {
  const collections: Collection[] = [
    {
      title: "NBA Teams",
      items: ["Chicago Bulls", "Los Angeles Lakers", "Golden State Warriors", "Boston Celtics"],
      type: "nba"
    },
    {
      title: "NFL Teams",
      items: ["Green Bay Packers", "New England Patriots", "Dallas Cowboys", "San Francisco 49ers"],
      type: "nfl"
    },
    {
      title: "MLB Teams",
      items: ["New York Yankees", "Boston Red Sox", "Los Angeles Dodgers", "Chicago Cubs"],
      type: "mlb"
    },
    {
      title: "NHL Teams",
      items: ["Toronto Maple Leafs", "Montreal Canadiens", "New York Rangers", "Chicago Blackhawks"],
      type: "nhl"
    },
    {
      title: "Universities",
      items: ["Harvard University", "Stanford University", "MIT", "University of California, Berkeley"],
      type: "universities"
    },
    {
      title: "Fraternities",
      items: ["Sigma Chi", "Kappa Alpha Psi", "Phi Delta Theta", "Sigma Alpha Epsilon"],
      type: "fraternities"
    }
  ];

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[100dvh]">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6 mx-auto max-w-5xl">
            {collections.map((collection, index) => (
              <CollectionCarousel
                key={index}
                title={collection.title}
                items={collection.items}
                collectionType={collection.type}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollectionsCarousel;