// app/api/admin/login/route.ts (for App Router)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Call your backend API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Login failed' },
        { status: response.status }
      );
    }

    // Your backend returns "access_token"
    if (!data.access_token) {
      return NextResponse.json(
        { message: 'No token received' },
        { status: 401 }
      );
    }

    // Create response with user data
    const nextResponse = NextResponse.json(
      { 
        success: true, 
        message: 'Login successful',
        user: data.user 
      },
      { status: 200 }
    );

    // Set httpOnly cookie (more secure!)
    nextResponse.cookies.set({
      name: 'authToken',
      value: data.access_token,
      httpOnly: true, // Cannot be accessed by JavaScript (more secure)
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return nextResponse;
  } catch (error: any) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}