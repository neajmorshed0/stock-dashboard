import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  if (!symbol || !apiKey) {
    console.error("Missing symbol or API key");
    return NextResponse.json(
      { error: "Missing symbol or API key" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
    );

    console.log("API Response Status:", response.status);

    if (!response.ok) {
      throw new Error(`API response failed with status: ${response.status}`);
    }

    const data = await response.json();

    if (!data["Global Quote"]) {
      throw new Error(
        `Invalid data received from Alpha Vantage: ${JSON.stringify(data)}`
      );
    }

    return NextResponse.json(data["Global Quote"]);
  } catch (error) {
    console.error("Error fetching stock data:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
