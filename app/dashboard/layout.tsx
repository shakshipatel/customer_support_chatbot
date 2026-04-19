import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import { db } from "@/db/client";
import { metadata as metadataTable } from "@/db/schema";
import { isAuthorized } from "@/lib/isAuthorized";
import { eq } from "drizzle-orm";

export const metadata = {
  title: "OneMinute Support - Dashboard",
  description: "Instantly resolve customer questions",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await isAuthorized();

  const [record] = !!user
    ? await db
        .select()
        .from(metadataTable)
        .where(eq(metadataTable.user_email, user.email))
    : [null];

  const hasMetadata = Boolean(user && record);

  return (
    <div className="bg-[#050509] min-h-screen font-sans antialiased text-zinc-100 selection:bg-zinc-800 flex">
      {hasMetadata ? (
        <>
          <Sidebar />
          <div className="flex-1 flex flex-col md:ml-64 relative min-h-screen transition-all duration-300">
            {/*<Header />*/}
            <main className="flex-1 flex flex-col w-full overflow-hidden">
              {children}
            </main>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
