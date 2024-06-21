import React from "react";

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const FormItems = (props: any) => {
  return (
    <FormItem className=" max-w-xs">
      <FormLabel>{props.label}</FormLabel>
      <Select
        onValueChange={props.field.onChange}
        defaultValue={props.field.value}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={`Select ${props.placeholder}`} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {props.data.map(
            (item: { value: string; name: string }, index: number) => (
              <SelectItem key={index} value={item.value}>
                {item.name}
              </SelectItem>
            )
          )}
        </SelectContent>
      </Select>

      <FormMessage />
    </FormItem>
  );
};

export default FormItems;
