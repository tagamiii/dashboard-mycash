import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface MainLayoutProps {
    children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    // Mobile first layout structure
    // <1280px (xl): No sidebar, content takes full width
    // >=1280px (xl): Sidebar pushes content

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col xl:flex-row">
            {/* 
        Sidebar Placeholder 
        TODO: Implement real sidebar in PROMPT 2
      */}
            <aside className="hidden xl:block w-20 lg:w-64 bg-white border-r border-gray-200 fixed h-full z-30 transition-all duration-300">
                <div className="p-6">
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
            </aside>

            {/* 
        Mobile Header Placeholder 
        TODO: Implement real header in PROMPT 2
      */}
            <header className="xl:hidden bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-40">
                <div className="flex items-center justify-between">
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                </div>
            </header>

            {/* Main Content Area */}
            {/* 
        Regra Layout Fluido: width-full, max-w constraints 
        Padding responsivo: px-4 (mobile) -> px-6 (tablet) -> px-8 (desktop)
        Margin Left (xl): compensa a sidebar fixa (256px/64px)
      */}
            <main className={cn(
                "flex-1 w-full min-h-screen",
                "transition-all duration-300",
                "xl:ml-64" // Assumes expanded sidebar default for now
            )}>
                <div className="container mx-auto max-w-[1600px] p-4 md:p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
