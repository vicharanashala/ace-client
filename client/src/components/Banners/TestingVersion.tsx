import { TriangleAlert } from 'lucide-react';
import React from 'react';

export default function TestingVersion() {
  return (
    <div className="flex flex-col items-center p-1 sm:p-2">
      {/* Large Triangle Icon */}
      <TriangleAlert 
        className="mb-1 h-8 w-8 fill-[#dc2626] text-white dark:fill-[#fbbf24] dark:text-black sm:mb-2 sm:h-10 sm:w-10" 
        strokeWidth={1.5}
      />
      
      {/* Bottom Section */}
      <div className="flex items-start gap-1 sm:gap-1.5">
        <TriangleAlert 
          className="hidden sm:block mt-[2px] h-[14px] w-[14px] shrink-0 fill-[#dc2626] text-white dark:fill-[#fbbf24] dark:text-black sm:h-4 sm:w-4" 
          strokeWidth={2}
        />
        <div className="flex flex-col items-center sm:items-stretch gap-1 sm:gap-0">
          <span className="text-[13px] sm:text-[15px] font-bold leading-none text-[#dc2626] dark:text-[#fbbf24] whitespace-nowrap text-center">
            Important Notice
          </span>
          <span className="text-[11px] sm:text-[11px] text-center leading-none text-black dark:text-white sm:mt-1 whitespace-nowrap">
            (Testing Version)
          </span>
        </div>
      </div>
    </div>
  );
}
