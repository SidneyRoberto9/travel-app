import Image from "next/image"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
  type: "button" | "submit"
  title: string
  icon?: string
  variant: string
  full?: boolean
}

const Button = ({ type, title, icon, variant, full = false }: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        "flexCenter gap-3 rounded-full border",
        variant,
        full && "w-full"
      )}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 cursor-pointer whitespace-nowrap">
        {title}
      </label>
    </button>
  )
}

export default Button
