export default function AdvocateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col bg-background mx-auto">
        {children}
    </main>
  );
}
