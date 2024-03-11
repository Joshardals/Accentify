"use client";
import axios from "axios";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { RegisterValidation } from "@/lib/validations/form";
import { RegisterValidationType } from "@/typings/form";
import { useForm } from "react-hook-form";
import { valueWithoutSpaces } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
  const form = useForm<RegisterValidationType>({
    resolver: zodResolver(RegisterValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: RegisterValidationType) => {
    // try {
    //   const res = await axios.post("/api/register", {
    //     firstName: values.firstName,
    //     lastName: values.lastName,
    //     email: values.email,
    //     password: values.password,
    //   });

    //   console.log(res);

    //   if (res.status === 201) {
    //     form.setValue("firstName", "");
    //     form.setValue("lastName", "");
    //     form.setValue("email", "");
    //     form.setValue("password", "");

    //     alert("Registration successful!");
    //   }
    // } catch (error: any) {
    //   console.log(`Registration Failed: ${error.message}`);
    // }

    await axios.post(
      "http://localhost:5000/api/register",
      {
        firstName: "joshua",
        lastName: "omobamidele",
        email: "joshardalsgates@gmail.com",
        password: "123456",
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 max-w-[1200px] mx-auto"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  id="firstName"
                  placeholder="FIRST NAME*"
                  type="text"
                  {...field}
                  onChange={(e) => {
                    form.setValue("firstName", valueWithoutSpaces(e));
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  id="lastName"
                  placeholder="LAST NAME*"
                  type="text"
                  {...field}
                  onChange={(e) => {
                    form.setValue("lastName", valueWithoutSpaces(e));
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  id="email"
                  placeholder="EMAIL*"
                  type="email"
                  {...field}
                  onChange={(e) => {
                    form.setValue("email", valueWithoutSpaces(e));
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="new-password"
                  autoCorrect="false"
                  className="text-[0.6rem]"
                  id="password"
                  placeholder="PASSWORD*"
                  type="password"
                  {...field}
                  onChange={(e) => {
                    form.setValue("password", valueWithoutSpaces(e));
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button variant={"register"} size={"lg"}>
          Create
        </Button>
      </form>
    </Form>
  );
}
