import { Button, ButtonProps } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { XCircle } from "lucide-react"
import { PropsWithChildren } from "react"
type ComparisonButtonProps = ButtonProps & PropsWithChildren<{
  isDisabled: boolean
  onCancel: () => void
}>
export function ComparisonButton({ isDisabled, children, onClick, onCancel }: ComparisonButtonProps) {


  return (
    <Button
      className={cn("cursor-pointer fixed bottom-0 left-1/2 -translate-x-1/2 p-10",
        isDisabled && 'opacity-50 pointer-events-none'
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      <div className="flex gap-2 items-center justify-center">
        <Label className={
          cn('cursor-pointer hover:underline text-3xl',
            isDisabled && 'cursor-not-allowed hover:no-underline'
          )
        }>
          {children}
        </Label>
        {isDisabled ? null : <XCircle className={`${isDisabled && 'pointer-events-none'}`}
          onClick={(e) => {
            e.stopPropagation()
            onCancel()
          }} />
        }
      </div>
    </Button>
  )
}