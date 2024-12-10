"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading= () =>{
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Yours Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Jotly</span>
            </h1>
            <h3 className="text-base sm:text-2xl md:text-3xl font-medium ">Jotly is the connects workspace where <br/>better, faster work happens.</h3>
            <Button>
                Enter Jotly
                <ArrowRight className="h-4 w-4 "/>
            </Button>
        </div>
)}