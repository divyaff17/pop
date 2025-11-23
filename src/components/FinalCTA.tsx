import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const FinalCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { error } = await supabase
          .from('email_signups')
          .insert({ email, source: 'cta' });
        
        if (error) throw error;
        
        toast.success("You're on the list! We'll be in touch soon.", {
          description: "Get ready for your endless closet experience.",
        });
        setEmail("");
      } catch (error) {
        toast.error("Oops! Something went wrong.", {
          description: "Please try again later.",
        });
      }
    }
  };

  return (
    <section id="cta" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary" aria-labelledby="cta-heading">
      <div className="container mx-auto max-w-4xl text-center space-y-6 sm:space-y-8 md:space-y-10">
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          <h2 id="cta-heading" className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4rem] font-bold text-background px-4">
            Ready to Unlock Your Endless Closet?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-background/90 max-w-3xl mx-auto px-4">
            Be the first to know when we launch and get 50% off your first rental. Don't miss out.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" aria-label="Email signup form">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto px-4">
            <label htmlFor="cta-email" className="sr-only">
              Email address
            </label>
            <Input
              id="cta-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              aria-label="Enter your email address"
              className="flex-1 min-h-[48px] h-11 sm:h-12 md:h-14 lg:h-16 text-sm sm:text-base md:text-lg bg-background border-0 focus:ring-2 focus:ring-background/50 rounded-xl px-3 sm:px-4"
            />
            <Button
              type="submit"
              size="lg"
              aria-label="Submit email to join early bird list"
              className="min-h-[48px] h-11 sm:h-12 md:h-14 lg:h-16 px-5 sm:px-6 md:px-8 lg:px-10 bg-background hover:bg-background/90 text-headline font-bold text-sm sm:text-base md:text-lg shadow-lg transition-all hover:scale-105 rounded-xl w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-primary"
            >
              Join the Early Bird List
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FinalCTA;
