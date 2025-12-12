
import { Calculator } from 'lucide-react';
import CalculatorForm from './calculator-form';

export default function RoiCalculatorPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            ROI Calculator
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Estimate the potential return on investment for your technology
            upgrades.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl text-center">
          <div className="max-w-2xl mx-auto">
             <h2 className="font-headline text-3xl font-bold flex items-center justify-center gap-3">
              <Calculator className="h-8 w-8 text-primary" /> Calculate Your
              Savings
            </h2>
            <p className="mt-4 text-muted-foreground">
              Use this tool to get a high-level estimate of the financial
              benefits of implementing our solutions, such as smart building
              automation or network optimization. Adjust the sliders to match
              your current situation.
            </p>
          </div>
          <div className="mt-8 max-w-2xl mx-auto">
            <CalculatorForm />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            *This calculator provides an estimate for illustrative purposes
            only. Actual ROI may vary. Contact us for a detailed assessment.
          </p>
        </div>
      </section>
    </>
  );
}
