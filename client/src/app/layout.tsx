export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <p>{children}</p>
      </body>
    </html>
  );
}
