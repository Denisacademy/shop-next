// rfce
"use client";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">HomePage</h1>
      <Button
        variant="destructive"
        size="lg"
        className="capitalize m-8"
        onClick={() => console.log("pathname")}
      >
        Click me
      </Button>
    </div>
  );
}

export default HomePage;
