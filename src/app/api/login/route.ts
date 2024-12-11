import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const baseURL = process.env.NEXT_PUBLIC_API_BASEURL;

  try {
    const response = await axios.post(`${baseURL}/sign-in`, {
      email,
      password,
    });

    if (response?.data?.status === 200) {
      const token = response?.data?.payload?.token;
      const userData = response?.data?.payload?.data;

      const res = NextResponse.json({ message: response.data.message });
      //   res.cookies.set("authToken", token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 }); // 7 days
      res.cookies.set("authToken", token); // 7 days
      res.cookies.set("userData", JSON.stringify(userData));

      return res;
    }

    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.response?.data?.message },
      { status: 500 }
    );
  }
}
