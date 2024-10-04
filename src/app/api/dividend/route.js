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
    // Fetch the adjusted daily time series data which includes dividends
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`
    );

    console.log("API Response Status:", response.status);

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

    // Extract dividend data
    const dividendData = Object.keys(timeSeries).map((date) => ({
      date,
      dividend: parseFloat(timeSeries[date]["7. dividend amount"]), // Extract dividend amount
    }));

    // Filter out days with no dividends
    const filteredDividendData = dividendData.filter(
      (entry) => entry.dividend > 0
    );

    return NextResponse.json(filteredDividendData);
  } catch (error) {
    console.error("Error fetching dividend data:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
