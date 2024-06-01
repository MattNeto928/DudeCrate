import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { NavBar } from "./NavBar"


export function FeaturedBottleOpeners() {
    return (
        <div>
            <NavBar />
            <div className="flex flex-col items-center justify-center min-h-[100dvh]">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container space-y-12 px-4 md:px-6 mx-auto max-w-5xl">
                        <div className="flex flex-col items-start space-y-4 text-left">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Sports Teams</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Represent Your Favorite Team</h2>
                            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Customize your bottle opener with the logo of your favorite sports team.
                            </p>
                        </div>
                        <Carousel className="w-full max-w-6xl">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="Sports Team Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">Chicago Bulls Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Represent your love for the Chicago Bulls with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="Sports Team Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">Los Angeles Lakers Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Show your Lakers pride with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="Sports Team Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">New York Yankees Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Represent the Yankees with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="Sports Team Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">Green Bay Packers Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Show your Packers pride with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className="flex flex-col items-start space-y-4 text-left">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Fraternities</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Represent Your Greek Life</h2>
                            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Customize your bottle opener with the crest or logo of your fraternity.
                            </p>
                        </div>
                        <Carousel className="w-full max-w-6xl">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="Fraternity Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">Sigma Chi Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Represent your Sigma Chi brotherhood with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="Fraternity Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">Kappa Alpha Psi Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Show your Kappa Alpha Psi pride with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="Fraternity Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">Phi Delta Theta Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Represent your Phi Delta Theta brotherhood with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="Fraternity Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">Sigma Alpha Epsilon Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Show your Sigma Alpha Epsilon pride with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className="flex flex-col items-start space-y-4 text-left">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Universities
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Represent Your Alma Mater</h2>
                            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Customize your bottle opener with the logo or mascot of your favorite university.
                            </p>
                        </div>
                        <Carousel className="w-full max-w-6xl">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="University Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">University of Michigan Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Represent your Michigan Wolverines pride with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="University Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">University of California, Los Angeles Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Represent your UCLA Bruins pride with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="p-2">
                                        <Card className="h-full">
                                            <img
                                                src="/placeholder.svg"
                                                alt="University Bottle Opener"
                                                width={300}
                                                height={200}
                                                className="aspect-[3/2] object-cover rounded-t-lg"
                                            />
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold">University of Texas at Austin Bottle Opener</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Represent your UT Austin Longhorns pride with this custom bottle opener.
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-bold">$13.99</span>
                                                    <Button variant="outline">Add to Cart</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </section>
            </div>
        </div>
    )
}

