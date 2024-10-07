import { Button } from "@/components/ui/button";

export const StayInformedSurvey = () => {
  return (
    <section className="container py-24 sm:py-32 bg-muted/10 rounded-lg">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Informed with Our Software Survey
        </h2>

        <p className="text-xl text-muted-foreground mb-6">
          Submit your software stack today, and we'll send you the exclusive results of our UK construction software survey. Find out:
        </p>

        <ul className="list-disc list-inside text-xl text-muted-foreground mb-8">
          <li>Which software tools are most widely used in the UK.</li>
          <li>Emerging trends in construction technology.</li>
          <li>Insights on how other professionals are optimizing their workflows.</li>
        </ul>

        <Button asChild>
          <a href="#share-software-stack">Submit Your Software Stack</a>
        </Button>
      </div>
    </section>
  );
};
