import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
const SiteAlert = ({ title, description, className }) => {
  return (
    <Alert variant="destructive" className={className}>
      <CircleAlert className="h-4 w-4 justify-center" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
export { SiteAlert };
