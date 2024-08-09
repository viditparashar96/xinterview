import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import QRCode from "react-qr-code";

import { useGetUrls, useHitUrl } from "@/lib/react-qury/queryAndMutation";
import { Url } from "@/types";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
const UrlTable = () => {
  const { data: Urls } = useGetUrls({ user_id: 1 });
  const { mutateAsync: hitLink } = useHitUrl();
  const [urls, setUrls] = useState<Url[] | undefined>([]);
  useEffect(() => {
    if (Urls) {
      setUrls(Urls?.allurls);
    }
  }, [Urls]);

  const handleUrlClick = async (id: number) => {
    const foundedUrl: any = urls?.find((val: Url) => val.id === id);
    console.log(foundedUrl);
    try {
      const response = await hitLink({ id: foundedUrl?.shorten_url });
      console.log(response);
      if (response) {
        console.log(response.url);
        window.location.href = `${response.url}`;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Stock</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Url</TableHead>
              <TableHead className="w-[100px]">Click cout</TableHead>
              <TableHead className="w-[100px]">Qr Code</TableHead>

              <TableHead className="w-[100px]">View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {urls?.map((url: Url) => {
              return (
                <TableRow key={url.id} className="h-[100px]">
                  <TableCell className="font-semibold">
                    {url.shorten_url}
                  </TableCell>
                  <TableCell className="font-semibold">
                    <Button onClick={() => handleUrlClick(url.id)}>View</Button>
                  </TableCell>
                  <TableCell className="font-semibold">
                    {url.click_count}
                  </TableCell>
                  <TableCell className="font-semibold">
                    <QRCode value={url.original_url} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center border-t p-4"></CardFooter>
    </Card>
  );
};

export default UrlTable;
