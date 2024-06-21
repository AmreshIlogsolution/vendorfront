import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddInvoice from "@/components/pagesComponents/AddInvoice";

const Invoices = () => {
  return (
    <div className=" p-4 h-full">
      <Tabs defaultValue="overview" className=" w-full">
        <TabsList className="bg-[#49108B] text-white space-x-2 h-12 w-[220px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="addinvoice">Add invoice</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">Invoices</TabsContent>
        <TabsContent value="addinvoice">
          <AddInvoice />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Invoices;
