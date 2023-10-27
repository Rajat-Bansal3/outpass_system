import { Inter } from "next/font/google";

const landLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
};
export default landLayout