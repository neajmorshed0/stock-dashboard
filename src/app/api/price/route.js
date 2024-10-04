import { NextResponse } from "next/server";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  if (!symbol || !apiKey) {
    return NextResponse.json(
      { error: "Missing symbol or API key" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`API response failed with status: ${response.status}`);
    }

    const data = await response.json();

    const timeSeries = data["Time Series (Daily)"];
    if (!timeSeries) {
      throw new Error(
        `Invalid data received from Alpha Vantage: ${JSON.stringify(data)}`
      );
    }

    // Process and format data for the chart (e.g., extracting date and close price)
    const formattedData = Object.entries(timeSeries).map(([date, value]) => ({
      date,
      close: parseFloat(value["4. close"]),
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Error fetching stock data:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
