import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CategoryProps {
  title: string;
  description: string;
}

const categories: CategoryProps[] = [
  {
    title: "Project Management",
    description: "Manage your projects efficiently from start to finish.",
  },
  {
    title: "BIM Software",
    description: "Integrate Building Information Modeling into your workflow.",
  },
  {
    title: "Estimating & Bidding",
    description: "Accurately estimate costs and submit winning bids.",
  },
  {
    title: "Scheduling Tools",
    description: "Keep your projects on time with advanced scheduling software.",
  },
  {
    title: "Collaboration Platforms",
    description: "Enhance teamwork and communication among all stakeholders.",
  },
  {
    title: "Safety Management",
    description: "Prioritize safety with tools designed to mitigate risks.",
  },
  {
    title: "Quality Control",
    description: "Ensure the highest standards throughout your projects.",
  },
  {
    title: "Mobile Field Reporting",
    description: "Stay connected with real-time updates from the field.",
  },
  {
    title: "Add More Relevant Categories",
    description: "Expand your search with additional specialized tools.",
  },
];

export const ExploreSoftwareCategories = () => {
  return (
    <section id="explore-software-categories" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Explore Software Categories
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Find the Right Tools for Every Aspect of Your Construction Projects
      </h2>

      <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Select a category to get started:
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(({ title, description }) => (
          <Card key={title} className="h-full">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{description}</p>
              <Button asChild className="mt-4">
                <Link href={`#${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};