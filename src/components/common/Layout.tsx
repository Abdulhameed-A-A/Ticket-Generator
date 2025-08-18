import type { ReactNode } from "react"
import Logo from "./Logo"
import BackgroundElements from "../registration/BackgroundElements"

type ChildrenType ={ children: ReactNode}

const Layout = ({children}: ChildrenType) =>  {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      <BackgroundElements />
      
      <div className="relative z-10">
        <div className="px-4 py-8 md:max-w-7xl md:mx-auto md:px-6 md:py-12">
          <div className="flex justify-center">
            <div className="w-1/2 mx-4 md:max-w-md md:mx-0"> 
              <Logo />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Layout