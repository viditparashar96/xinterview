import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateUrl } from "@/lib/react-qury/queryAndMutation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
const UrlForm = () => {
  const [originalUrl, setoriginalUrl] = useState("");

  const { mutateAsync: create, isError, isPending } = useCreateUrl();

  const handleSubmit = async () => {
    try {
      const result = await create({ original_url: originalUrl, user_id: 1 });
      console.log(result);
      if (result) {
        setoriginalUrl("");
        toast.success("Url created Successfully");
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.data) {
        toast.error(error.response.data.msg);
      }
    }
  };

  console.log("err==>", isError);
  console.log("isPending==>", isPending);

  return (
    <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        <CardTitle>Put your Url here</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="url"
              type="text"
              className="w-full"
              defaultValue="Gamer Gear Pro Controller"
              onChange={(e) => setoriginalUrl(e.target.value)}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button onClick={handleSubmit} disabled={isPending}>
          {isPending ? "Loading..." : "Submit"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UrlForm;
