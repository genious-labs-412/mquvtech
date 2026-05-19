import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { email, password } = body;

  if (
    email === 'admin@gmail.com' &&
    password === 'admin123'
  ) {
    return NextResponse.json({
      success: true,
    });
  }

  return NextResponse.json({
    success: false,
    message: 'Invalid credentials',
  });
}