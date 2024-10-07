import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReasonProps {
  title: string;
  description: string;
}

const reasons: ReasonProps[] = [
  {
    title: "Understand Software Used in the UK Market",
    description: "Gain insights into the most popular and effective construction software utilized across the UK. Stay ahead by knowing what tools industry leaders are leveraging.",
  },
  {
    title: "Make Informed Decisions",
    description: "Compare features and choose the best solutions tailored to your specific needs. Our directory simplifies your search by providing detailed information in one place.",
  },
  {
    title: "Contribute & Receive Exclusive Insights",
    description: "Submit the software you use, and we'll send you the results of our comprehensive software survey. Discover key trends and see how your tools stack up against others in the industry.",
  },
];

export const WhyUseOurDirectory = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Why Use Our Directory?
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Benefits of Using Our Platform
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map(({ title, description }) => (
          <Card key={title} className="h-full">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
