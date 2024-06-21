import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documents = () => {
  return (
    <div className=" p-4 h-full">
      <Tabs defaultValue="upload" className=" w-full">
        <TabsList className=" bg-[#49108B] text-white space-x-2 h-12 w-[330px]">
          <TabsTrigger value="upload">Upload documents</TabsTrigger>
          <TabsTrigger value="manage">Manage documents</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">Upload documents</TabsContent>
        <TabsContent value="manage">Manage documents</TabsContent>
      </Tabs>
    </div>
  );
};

export default Documents;
