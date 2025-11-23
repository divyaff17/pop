const FounderNote = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background" aria-labelledby="founder-note-heading">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center">
          <h2 id="founder-note-heading" className="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-headline px-4">
            A Note from Our Founders
          </h2>
          <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.25rem] text-muted-foreground italic leading-relaxed px-4 sm:px-6 md:px-8">
            <p>
              "I started Popclozet from a simple, recurring panic: 'I have a closet full of clothes, but nothing to wear.' I was tired of spending money on trendy outfits I'd wear once... Popclozet is the solution I always wanted—an endless, sustainable closet that gives you the freedom to wear a new outfit for every new plan. Why limit your style?"
            </p>
          </blockquote>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-headline px-4">
            — Viraj Pondkule & Vraj Shah, Founders of Popclozet
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
