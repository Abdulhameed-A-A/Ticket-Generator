const BackgroundElements = () => {
  return (
    <>
      <div className="absolute inset-0 w-full h-full bg-cover bg-center">
        <img
          src="public/assets/images/background-desktop.png"
          alt="Background"
          className="w-full h-full object-cover md:hidden"
        />

        <img
          src="public/assets/images/background-desktop.png"
          alt="Background"
          className="hidden w-full h-full object-cover md:block"
        />
      </div>

      <img
        src="/assets/images/pattern-lines.svg"
        alt="Line patterns"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <img
        src="/assets/images/pattern-circle.svg"
        alt="Top Circle Patterns"
        className="absolute md:-top-35 md:left-25 w-[100px] h-[100px] md:w-[200px] md:h-[200px] -left-5 -top-5 pointer-events-none"
      />

      <img
        src="/assets/images/pattern-circle.svg"
        alt="Side Circle pattern"
        className="absolute top-1/2 -right-10 md:left-2/3 transform  w-[100px] h-[100px] md:w-[200px] md:h-[200px] pointer-events-none"
      />

      <img
        src="/assets/images/pattern-squiggly-line-top.svg"
        alt="Top squiggly line"
        className="absolute -top-1 right-0 w-[100px] h-[100px] md:w-1/3 md:h-1/3 md:top-5 pointer-events-none"
      />

      <img
        src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
        alt="Bottom squiggly line"
        className="absolute bottom-0 left-0  pointer-events-none hidden transition md:block"
      />
      
      <img 
        src="/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg" 
        alt="Bottom mobile squiggly line"
        className="absolute bottom-0 w-[400px] left-0 pointer-events-none md:hidden" 
      />
    </>
  )
}

export default BackgroundElements 