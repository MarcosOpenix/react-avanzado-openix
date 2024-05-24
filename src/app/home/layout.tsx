import OpxNavbar from "@/components/common/OpxNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="w-full">
        <OpxNavbar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 min-h-screen">{children}</div>
    </div>
  );
}