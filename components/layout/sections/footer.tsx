import { Separator } from "@/components/ui/separator";
import Image from 'next/image';
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image src="/ct-logo-sm.png" alt="CT Stack logo" height={40} width={187} unoptimized={true}  className="mr-2" />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Quick Links</h3>

            <div>
              <Link href="/list" className="opacity-60 hover:opacity-100">
                Browse Software
              </Link>
            </div>
            <div>
              <Link href="#about" className="opacity-60 hover:opacity-100">
                About
              </Link>
            </div>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>
          </div>

        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 Making Places Ltd
          </h3>
        </section>
      </div>
    </footer>
  );
};