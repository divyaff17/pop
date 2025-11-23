'use client';

import * as React from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { motionKey?: number }
>(({ className, motionKey, ...props }, ref) => (
  <div className="w-full">
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        'faq-card bg-background/70 backdrop-blur-lg border border-border/40 shadow-md rounded-2xl overflow-hidden transition-all duration-300',
        'hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1',
        'group/faq-box',
        className
      )}
      {...props}
    />
  </div>
));
CustomAccordionItem.displayName = 'CustomAccordionItem';

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex w-full items-center justify-between px-6 py-5 sm:px-8 sm:py-6 rounded-2xl bg-transparent text-left select-none outline-none',
          'transition-all duration-300 group-hover/faq-box:bg-white/70 dark:group-hover/faq-box:bg-zinc-800/70',
          'focus-visible:ring-2 focus-visible:ring-primary/30',
          className
        )}
        style={{ width: '100%', cursor: 'pointer' }}
        {...props}
      >
        <span className="flex items-center gap-3 text-headline user-select-none">
          <HelpCircle className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg sm:text-xl md:text-2xl">{children}</span>
        </span>
        <span className="ml-3 flex items-center justify-center rounded-full bg-muted shadow">
          <ChevronDown className="w-5 h-5 text-primary transition-transform" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

const CustomAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className="overflow-hidden" {...props}>
    <div className={cn(
      'pb-5 px-6 sm:px-10',
    )}>
      <div className={cn(
        'flex items-start gap-2 sm:gap-3 bg-card/50 rounded-xl mt-2 drop-shadow ring-1 ring-border/20 p-4 pl-3 sm:pl-4',
        'faq-answer relative'
      )}>
        <span className="flex-shrink-0 h-9 w-9 flex items-center justify-center rounded-full bg-muted mr-3 mt-1 shadow">
          <MessageCircle className="w-5 h-5 text-primary" />
        </span>
        <span className="flex-1 text-muted-foreground text-base sm:text-lg leading-relaxed">{children}</span>
      </div>
    </div>
  </AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';

export {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
};
