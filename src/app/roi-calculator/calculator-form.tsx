'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

export default function CalculatorForm() {
  const [investment, setInvestment] = useState(50000);
  const [monthlySavings, setMonthlySavings] = useState(2000);
  const [efficiencyGain, setEfficiencyGain] = useState(15);

  const calculateROI = () => {
    const annualSavings = monthlySavings * 12;
    // A simplified model for efficiency gain value
    const annualEfficiencyValue = (investment * (efficiencyGain / 100)) * 0.5; 
    const totalAnnualGain = annualSavings + annualEfficiencyValue;
    
    if (investment === 0) return { roiPercentage: 0, paybackMonths: 0 };

    const roiPercentage = ((totalAnnualGain - (investment / 3)) / (investment/3)) * 100; // Assuming 3-year lifespan for ROI calculation
    const paybackMonths = investment / (totalAnnualGain / 12);
    
    return {
      roiPercentage: roiPercentage,
      paybackMonths: paybackMonths,
    };
  };

  const { roiPercentage, paybackMonths } = calculateROI();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estimate Your ROI</CardTitle>
        <CardDescription>
          Adjust the values to see potential returns.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="investment">
            Estimated Upfront Investment: {formatCurrency(investment)}
          </Label>
          <Slider
            id="investment"
            min={10000}
            max={500000}
            step={10000}
            value={[investment]}
            onValueChange={(value) => setInvestment(value[0])}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="savings">
            Estimated Monthly Savings (e.g., energy, maintenance):{' '}
            {formatCurrency(monthlySavings)}
          </Label>
          <Slider
            id="savings"
            min={500}
            max={25000}
            step={500}
            value={[monthlySavings]}
            onValueChange={(value) => setMonthlySavings(value[0])}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="efficiency">
            Estimated Operational Efficiency Gain: {efficiencyGain}%
          </Label>
          <Slider
            id="efficiency"
            min={1}
            max={50}
            step={1}
            value={[efficiencyGain]}
            onValueChange={(value) => setEfficiencyGain(value[0])}
          />
        </div>
      </CardContent>
      <CardFooter className="bg-primary/5 p-6 rounded-b-lg">
        <div className="w-full space-y-4">
          <h3 className="text-lg font-semibold text-center">
            Estimated Results
          </h3>
          <div className="flex justify-around text-center">
            <div>
              <p className="font-bold text-2xl text-primary">
                {isFinite(paybackMonths) ? paybackMonths.toFixed(1) : '...'}
              </p>
              <p className="text-sm text-muted-foreground">Payback (Months)</p>
            </div>
            <div>
              <p className="font-bold text-2xl text-primary">
                {isFinite(roiPercentage) ? roiPercentage.toFixed(0) : '...'}%
              </p>
              <p className="text-sm text-muted-foreground">
                Annual ROI
              </p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
