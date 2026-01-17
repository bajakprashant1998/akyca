import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Calculator, Percent, IndianRupee, TrendingUp, ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TaxTools = () => {
  // Income Tax Calculator State
  const [income, setIncome] = useState("");
  const [regime, setRegime] = useState<"old" | "new">("new");
  const [taxResult, setTaxResult] = useState<{ tax: number; cess: number; total: number } | null>(null);

  // GST Calculator State
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [gstType, setGstType] = useState<"exclusive" | "inclusive">("exclusive");
  const [gstResult, setGstResult] = useState<{ gst: number; total: number; cgst: number; sgst: number } | null>(null);

  // EMI Calculator State
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emiResult, setEmiResult] = useState<{ emi: number; totalInterest: number; totalAmount: number } | null>(null);

  // Income Tax Calculation (New Regime FY 2024-25)
  const calculateIncomeTax = () => {
    const incomeValue = parseFloat(income) || 0;
    let tax = 0;

    if (regime === "new") {
      // New Tax Regime FY 2024-25
      if (incomeValue <= 300000) tax = 0;
      else if (incomeValue <= 700000) tax = (incomeValue - 300000) * 0.05;
      else if (incomeValue <= 1000000) tax = 20000 + (incomeValue - 700000) * 0.10;
      else if (incomeValue <= 1200000) tax = 50000 + (incomeValue - 1000000) * 0.15;
      else if (incomeValue <= 1500000) tax = 80000 + (incomeValue - 1200000) * 0.20;
      else tax = 140000 + (incomeValue - 1500000) * 0.30;

      // Rebate u/s 87A for income up to 7 lakhs
      if (incomeValue <= 700000) tax = 0;
    } else {
      // Old Tax Regime
      if (incomeValue <= 250000) tax = 0;
      else if (incomeValue <= 500000) tax = (incomeValue - 250000) * 0.05;
      else if (incomeValue <= 1000000) tax = 12500 + (incomeValue - 500000) * 0.20;
      else tax = 112500 + (incomeValue - 1000000) * 0.30;

      // Rebate u/s 87A for income up to 5 lakhs
      if (incomeValue <= 500000) tax = 0;
    }

    const cess = tax * 0.04;
    const total = tax + cess;

    setTaxResult({ tax, cess, total });
  };

  // GST Calculation
  const calculateGST = () => {
    const amountValue = parseFloat(amount) || 0;
    const rateValue = parseFloat(gstRate) || 0;

    let gst: number, total: number;

    if (gstType === "exclusive") {
      gst = (amountValue * rateValue) / 100;
      total = amountValue + gst;
    } else {
      total = amountValue;
      gst = (amountValue * rateValue) / (100 + rateValue);
    }

    const cgst = gst / 2;
    const sgst = gst / 2;

    setGstResult({ gst, total, cgst, sgst });
  };

  // EMI Calculation
  const calculateEMI = () => {
    const P = parseFloat(principal) || 0;
    const R = (parseFloat(rate) || 0) / 12 / 100;
    const N = parseFloat(tenure) || 0;

    if (P && R && N) {
      const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      const totalAmount = emi * N;
      const totalInterest = totalAmount - P;

      setEmiResult({ emi, totalInterest, totalAmount });
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-cream font-medium text-sm tracking-wider uppercase mb-4 block">
              Free Tools
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Tax Calculation Tools
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Use our free calculators to estimate your income tax, GST, and loan EMI. 
              For accurate assessments and tax planning advice, consult our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Income Tax Calculator */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 text-navy" />
                </div>
                <h2 className="text-xl font-display font-semibold text-navy">
                  Income Tax Calculator
                </h2>
              </div>

              <p className="text-grey text-sm mb-6">
                Calculate your estimated income tax under the new or old tax regime for FY 2024-25.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Annual Income (₹)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 1000000"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tax Regime
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setRegime("new")}
                      className={`flex-1 py-3 rounded-lg font-medium text-sm transition-colors ${
                        regime === "new"
                          ? "bg-navy text-white"
                          : "bg-cream text-navy hover:bg-cream-dark"
                      }`}
                    >
                      New Regime
                    </button>
                    <button
                      onClick={() => setRegime("old")}
                      className={`flex-1 py-3 rounded-lg font-medium text-sm transition-colors ${
                        regime === "old"
                          ? "bg-navy text-white"
                          : "bg-cream text-navy hover:bg-cream-dark"
                      }`}
                    >
                      Old Regime
                    </button>
                  </div>
                </div>

                <Button
                  onClick={calculateIncomeTax}
                  className="w-full h-12 bg-navy hover:bg-navy-dark"
                >
                  Calculate Tax
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {taxResult && (
                  <div className="bg-cream/50 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-grey text-sm">Income Tax:</span>
                      <span className="font-semibold text-navy">{formatCurrency(taxResult.tax)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-grey text-sm">Health & Education Cess (4%):</span>
                      <span className="font-semibold text-navy">{formatCurrency(taxResult.cess)}</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between">
                      <span className="font-medium text-foreground">Total Tax:</span>
                      <span className="font-bold text-navy text-lg">{formatCurrency(taxResult.total)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* GST Calculator */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center">
                  <Percent className="w-6 h-6 text-navy" />
                </div>
                <h2 className="text-xl font-display font-semibold text-navy">
                  GST Calculator
                </h2>
              </div>

              <p className="text-grey text-sm mb-6">
                Calculate GST amount, CGST, SGST for your transactions with different tax rates.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Amount (₹)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 10000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    GST Rate
                  </label>
                  <select
                    value={gstRate}
                    onChange={(e) => setGstRate(e.target.value)}
                    className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Calculation Type
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setGstType("exclusive")}
                      className={`flex-1 py-3 rounded-lg font-medium text-sm transition-colors ${
                        gstType === "exclusive"
                          ? "bg-navy text-white"
                          : "bg-cream text-navy hover:bg-cream-dark"
                      }`}
                    >
                      GST Exclusive
                    </button>
                    <button
                      onClick={() => setGstType("inclusive")}
                      className={`flex-1 py-3 rounded-lg font-medium text-sm transition-colors ${
                        gstType === "inclusive"
                          ? "bg-navy text-white"
                          : "bg-cream text-navy hover:bg-cream-dark"
                      }`}
                    >
                      GST Inclusive
                    </button>
                  </div>
                </div>

                <Button
                  onClick={calculateGST}
                  className="w-full h-12 bg-navy hover:bg-navy-dark"
                >
                  Calculate GST
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {gstResult && (
                  <div className="bg-cream/50 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-grey text-sm">CGST ({parseFloat(gstRate) / 2}%):</span>
                      <span className="font-semibold text-navy">{formatCurrency(gstResult.cgst)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-grey text-sm">SGST ({parseFloat(gstRate) / 2}%):</span>
                      <span className="font-semibold text-navy">{formatCurrency(gstResult.sgst)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-grey text-sm">Total GST:</span>
                      <span className="font-semibold text-navy">{formatCurrency(gstResult.gst)}</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between">
                      <span className="font-medium text-foreground">Final Amount:</span>
                      <span className="font-bold text-navy text-lg">{formatCurrency(gstResult.total)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* EMI Calculator */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-navy" />
                </div>
                <h2 className="text-xl font-display font-semibold text-navy">
                  EMI Calculator
                </h2>
              </div>

              <p className="text-grey text-sm mb-6">
                Calculate your monthly EMI for home loans, car loans, or personal loans.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Loan Amount (₹)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 5000000"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <Input
                    type="number"
                    step="0.1"
                    placeholder="e.g., 8.5"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tenure (months)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 240"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="h-12"
                  />
                </div>

                <Button
                  onClick={calculateEMI}
                  className="w-full h-12 bg-navy hover:bg-navy-dark"
                >
                  Calculate EMI
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {emiResult && (
                  <div className="bg-cream/50 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-grey text-sm">Monthly EMI:</span>
                      <span className="font-bold text-navy text-lg">{formatCurrency(emiResult.emi)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-grey text-sm">Total Interest:</span>
                      <span className="font-semibold text-navy">{formatCurrency(emiResult.totalInterest)}</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between">
                      <span className="font-medium text-foreground">Total Payment:</span>
                      <span className="font-semibold text-navy">{formatCurrency(emiResult.totalAmount)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-cream/30 rounded-xl p-6 text-center">
            <p className="text-grey text-sm">
              <strong>Disclaimer:</strong> These calculators provide estimates for informational purposes only. 
              Actual tax liability may vary based on various factors. For accurate tax planning and compliance, 
              please consult our chartered accountants.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TaxTools;
