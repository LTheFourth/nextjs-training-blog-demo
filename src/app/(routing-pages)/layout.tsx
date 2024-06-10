import { Suspense } from "react";
import GeneralLayout from "../_shared/components/general-layout/layout";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <GeneralLayout>
      <Suspense fallback={<div>...Loading Content</div>}>{children}</Suspense>
    </GeneralLayout>
  );
}
