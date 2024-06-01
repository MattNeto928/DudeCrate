import Link from "next/link"

export function NavBar() {
    return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <DudeCrateIcon />
          <span className="sr-only">Custom Bottle Opener</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
        <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            href="/bottle-openers"
          >
            Bottle Openers
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            href="#"
          >
            Customization
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
    );
}

function DudeCrateIcon() {
    return (
      <img
        alt="Hero"
        className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover"
        src="/DudeCrateLogo.png"
        width='45'
      />
    )
  }
  