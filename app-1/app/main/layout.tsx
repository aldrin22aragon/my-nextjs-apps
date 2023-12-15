
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>main Layout</h1>
      <div>{children}</div>
    </div>
  );
}
