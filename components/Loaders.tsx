import { Loader2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export const SpinnerLoader = () => {
  return (
    <Loader2 size={30} className="animate-spin" />
  )
}

export const SkeletonLoader = () => {
  return (
    <Skeleton className="w-[100px] h-[20px] rounded-full" />

  )
}
