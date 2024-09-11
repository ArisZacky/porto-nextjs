export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-4 sm:ml-64 sm:h-screen">{children}</div>;
}
