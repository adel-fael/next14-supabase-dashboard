'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  CreateDemoFormSchema,
  CreateDemoFormSchemaType
} from "@/types/CreateDemo";



const CreateDemoPage = () => {
  const form = useForm<CreateDemoFormSchemaType>({
    resolver: zodResolver(CreateDemoFormSchema),
    defaultValues: {
      rows_nb: '1000',
    },
  });

  const onSubmit = async (data: CreateDemoFormSchemaType) => {

    console.log(
      '🚀 ~ file: page.tsx:58 ~ onSubmit ~ JSON.stringify(data, null, 2):',
      JSON.stringify(data, null, 2),
    );


    // redirect(HrefLinks.dashboardListPage())
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-10 space-y-6 sm:mx-auto sm:w-1/3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  defaultValue={field.value}
                  placeholder="name"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                type='email'
                  defaultValue={field.value}
                  placeholder="email"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                    type='password'
                  defaultValue={field.value}
                  placeholder="password"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="country 1">country 1</SelectItem>
                  <SelectItem value="country 2">country 2</SelectItem>
                  <SelectItem value="country 3">country 3</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormDescription>
                  You can manage email addresses in your{" "}
                  <Link href="/examples/forms">email settings</Link>.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="type 1">type 1</SelectItem>
                  <SelectItem value="type 2">type 2</SelectItem>
                  <SelectItem value="type 3">type 3</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormDescription>
                  You can manage email addresses in your{" "}
                  <Link href="/examples/forms">email settings</Link>.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rows_nb"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rows Nb</FormLabel>
              <FormControl>
                <Input type="number" placeholder="rows_nb" {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateDemoPage;
