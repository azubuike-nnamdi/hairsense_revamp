import { Search } from "lucide-react";
import { Input } from "../ui/input";
import React from "react";
export default function SearchInput() {
  return (
    <div className="w-[320px] relative sm:block hidden">
      <Input
        className="w-full pr-10 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
        placeholder="Search products..."
      />
      <Search className="absolute right-2 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}
