import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import UrlForm from "@/components/urls/UrlForm";
import UrlTable from "@/components/urls/UrlTable";

const Urls = () => {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid w-full flex-1  gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              You can Generate Url
            </h1>
          </div>
          <div className="grid  ">
            <div className=" space-y-4  w-full">
              <UrlForm />
              <UrlTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Urls;
