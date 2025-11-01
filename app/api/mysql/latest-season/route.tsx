import {NextResponse} from 'next/server'
import {fetchLatestSeason} from "@/app/lib/billiard/data";

export async function GET() {
    const season = await fetchLatestSeason();

    return NextResponse.json({season});
}