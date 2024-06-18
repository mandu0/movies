export default function RootLayout2({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            {children}
            &copy; Next JS is great!
        </div>
    );
  }
  