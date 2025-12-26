// TODO: Auth temporarily bypassed - fix cookie issue later
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
