import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function CoursCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <Image src={""} alt="Cours Image" width={300} height={300} />
        </CardHeader>
        <CardContent>
          <CardTitle>Algorithme</CardTitle>
        </CardContent>
      </Card>
    </>
  );
}
