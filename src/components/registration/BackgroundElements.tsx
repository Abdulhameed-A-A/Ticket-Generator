const BackgroundElements = () => {
  return (
    <>
      <div
        className="absolute top-0 left-0  w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/background-desktop.png')" }}
      ></div>

      <img
        src="/assets/images/pattern-lines.svg"
        alt="Line patterns"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <img
        src="/assets/images/pattern-circle.svg"
        alt="Circle Patterns"
        className="absolute -top-30 left-20 pointer-events-none"
      />

      <img
        src="/assets/images/pattern-circle.svg"
        alt="Circle Patterns"
        className="absolute top-1/2 left-2/3 transform pointer-events-none"
      />

      <img
        src="/assets/images/pattern-squiggly-line-top.svg"
        alt="Top squiggly line"
        className="absolute top-20 right-0  pointer-events-none"
      />

      <img 
        src="/assets/images/pattern-squiggly-line-bottom-desktop.svg" 
        alt="Bottom squiggly line" 
        className="absolute bottom-0 left-0  pointer-events-none"
      />
    </>
  )
}

export default BackgroundElements 