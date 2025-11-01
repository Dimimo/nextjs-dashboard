import {Suspense} from "react";
import SeasonTeams from "@/app/ui/billiard/teams";

export default function Page() {

    return (
        <main>
            <Suspense fallback={'...loading'}>
                <SeasonTeams/>
            </Suspense>
        </main>
    );
}