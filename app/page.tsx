import { IssuesListContainer } from "@/containers/issues-list";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <IssuesListContainer />
    </main>
  );
}
