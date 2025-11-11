/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "../ui";
import { cn } from "@/lib/utils";

export default function Cal({
  className,
  variant,
}: {
  className?: string;
  variant?: "primary" | "secondary";
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Button
      data-cal-namespace="15min"
      data-cal-link="yourusername/15min"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      type="submit"
      variant={variant}
      className={cn(
        "text-sm rounded-xl lg:text-base w-full md:w-[155px]",
        className
      )}
    >
      Book a call
    </Button>
  );
}
