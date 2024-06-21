"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";

import { toast } from "@/components/ui/use-toast";
import { emailOptions, invoiceFY, invoiceTypes } from "@/lib/constant";
import FormSelect from "../Form/FormSelect";
import DatePicker from "../DatePicker";
import { Popover, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

import { FormDescription, FormMessage } from "@/components/ui/form";

import { PopoverContent } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import * as React from "react";

const FormSchema = z.object({
  fyYear: z
    .string()
    .refine((value) => invoiceFY.map((item) => item.value).includes(value), {
      message: "Invalid invoice FY selected.",
    }),
  invoiceType: z
    .string()
    .refine((value) => invoiceTypes.map((item) => item.value).includes(value), {
      message: "Invalid invoice type selected.",
    }),

  billTo: z
    .string()
    .refine((value) => emailOptions.map((item) => item.value).includes(value), {
      message: "Invalid Bill to selected.",
    }),

  billFrom: z
    .string()
    .refine((value) => emailOptions.map((item) => item.value).includes(value), {
      message: "Invalid Bill from selected.",
    }),
  date: z.date(),
  // date: z
  //   .object(
  //     {
  //       from: z.date().optional(),
  //       to: z.date().optional(),
  //     },
  //     { required_error: "DATE_REQUIRED_ERROR" }
  //   )
  //   .refine((date) => {
  //     return !!date.from;
  //   }, "DATE_REQUIRED_ERROR"),
  // comment: z.string().min(1, { message: "A comment is required." }),
});

const AddInvoice = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[440px] rounded-md   bg-slate-950 p-2">
          <code className="text-white ">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="invoiceType"
          render={({ field }) => (
            <FormSelect
              field={field}
              label="Invoice Type"
              placeholder="invoice type"
              data={invoiceTypes}
            />
          )}
        />
        <FormField
          control={form.control}
          name="fyYear"
          render={({ field }) => (
            <FormSelect
              field={field}
              label="Invoice FY"
              placeholder="invoice FY"
              data={invoiceFY}
            />
          )}
        />
        <FormField
          control={form.control}
          name="billFrom"
          render={({ field }) => (
            <FormSelect
              field={field}
              label="Bill To"
              placeholder="bill to"
              data={emailOptions}
            />
          )}
        />

        <FormField
          control={form.control}
          name="billTo"
          render={({ field }) => (
            <FormSelect
              field={field}
              label="Bill From"
              placeholder="bill from"
              data={emailOptions}
            />
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <DatePicker field={field} label="date" placeholder="date" />
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddInvoice;
