import axios from "axios";
import { LoginProps, RegisterProps } from "@/typings/action";
import { unstable_noStore as noStore } from "next/cache";

// Function to register a user
export async function registerUser({
  firstName,
  lastName,
  email,
  password,
}: RegisterProps) {
  try {
    noStore();

    // Make a POST request to register the user
    await axios.post("http://localhost:5000/api/v1/register", {
      firstName,
      lastName,
      email,
      password,
    });

    console.log("Registration Successful!");
  } catch (error: any) {
    console.log(`Registration Failed: ${error.message}`);
  }
}

// Function to log in a user
export async function loginUser({ email, password }: LoginProps) {
  try {
    // Make a POST request to login the user
    const response = await axios.post("http://localhost:5000/api/v1/login", {
      email,
      password,
    });

    // Extract the token from the response
    const token = response.data.token;

    // Store the token securely (e.g., in local storage)
    localStorage.setItem("token", token);

    console.log("Login Successful!", token);
  } catch (error: any) {
    console.log(`Login Failed: ${error.message}`);
  }
}

// Function to fetch User data
export async function fetchUserData(email: string, token: string) {
  try {
    // Get token from local storage
    const token = localStorage.getItem("token");

    // Make a GET request to fetch user data with the token and email in the headers
    const response = await axios.get("https://localhost:5000/api/v1/user", {
      headers: {
        Authorization: `Bearer ${token}`,
        Email: email,
      },
    });

    console.log("User Data: ", response.data);
  } catch (error: any) {
    console.log(`Error fetching User Data: ${error.message}`);
  }
}
