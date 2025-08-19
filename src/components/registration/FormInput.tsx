import { type ChangeEvent } from "react"

interface Props {
  label: string,
  type?: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  error?: string,
  placeholder?: string,
  prefix?: string
}

const FormInput = ({label, type = "text", ...props}: Props) => {
  return (
    <div className="md-3 md:mb-4">
      <label className="block font-medium md:mb-1 text-sm text-gray-700 md:text-base">
        {label}
      </label>
      <div className="relative">
        {props.prefix && (
          <span className="absolute inset-y-0 left-0 flex items-center text-gray-500 pl-2 md:pl-3">
            {props.prefix}
          </span>
        )}

        <input 
          type={type} 
          className={`w-full px-3 py-2 text-sm border rounded-md ${
            props.error ? 'border-red-500' : 'border-gray-300'
          } ${props.prefix ? 'pl-7 md:pl-8' : ''} md:text-base`}
          {...props}
        />
      </div>
      {props.error && <p className="text-red-500 text-xs md:text-sm mt-1">{props.error}</p> }
    </div>
  )
}

export default FormInput