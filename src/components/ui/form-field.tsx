import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormFieldProps {
  label: string
  name: string
  type?: "text" | "email" | "tel" | "password" | "textarea" | "radio"
  placeholder?: string
  required?: boolean
  className?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  rows?: number
  disabled?: boolean
  options?: Array<{ value: string; label: string; icon?: React.ReactNode }>
  checked?: boolean
}

const FormField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({ 
    label, 
    name, 
    type = "text", 
    placeholder, 
    required = false, 
    className,
    value,
    onChange,
    rows = 4,
    disabled = false,
    options = [],
    checked,
    ...props 
  }, ref) => {
    // Filtrar props para remover atributos não reconhecidos
    const filteredProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => 
        !['data-np-intersection-state'].includes(key)
      )
    )
    const id = name
    
    if (type === "radio") {
      return (
        <div className={cn("space-y-4", className)}>
          <label className="block text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label} {required && "*"}
          </label>
          <div className="flex gap-4">
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`${name}-${option.value}`}
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  disabled={disabled}
                  className="text-blue-600"
                  {...filteredProps}
                />
                <label 
                  htmlFor={`${name}-${option.value}`} 
                  className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option.icon}
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      )
    }
    
    return (
      <div className={cn("space-y-2", className)}>
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label} {required && "*"}
        </label>
        
        {type === "textarea" ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={rows}
            disabled={disabled}
            className={cn(
              "flex min-h-[80px] w-full rounded-md border border-gray-600 bg-custom-background px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            )}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...filteredProps}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={cn(
              "flex h-10 w-full rounded-md border border-gray-600 bg-custom-background px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            )}
            ref={ref as React.Ref<HTMLInputElement>}
            {...filteredProps}
          />
        )}
      </div>
    )
  }
)

FormField.displayName = "FormField"

export { FormField } 