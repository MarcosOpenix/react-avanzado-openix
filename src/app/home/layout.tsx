import OpxNavbar from "@/components/common/OpxNavbar";
import { UserStoreProvider } from "@/providers/user-store-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <UserStoreProvider>
        <div className="w-full">
          <OpxNavbar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 min-h-screen">{children}</div>
      </UserStoreProvider>
    </div>
  );
}