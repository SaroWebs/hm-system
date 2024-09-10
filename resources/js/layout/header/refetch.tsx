"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/Components/ui/tooltip";
import Stores from "@/lib/stores";
import { RefreshCcwIcon } from "lucide-react";

export function Refetch() {
    const { refetch, setRefetch } = Stores();

    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button
                        onClick={() => setRefetch(!refetch)}
                        className="rounded-full w-8 h-8 bg-background"
                        variant="outline"
                        size="icon"
                    >
                        <RefreshCcwIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500" />
                        <span className="sr-only">Refetch</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Refetch</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
