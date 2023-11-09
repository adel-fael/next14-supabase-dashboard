"use client"

import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"


type FooterCardProps = {
  signUp: (formData: FormData) => Promise<never>
}

export const FooterCard: React.FC<FooterCardProps> = ({signUp}) => {
  return (
    <CardFooter className="flex-col gap-3">
    <Button type="submit" className="w-full">Login account</Button>

    <Button formAction={signUp} className="w-full" variant={'secondary'}>
      Create account
    </Button>
  </CardFooter>
  )
}
