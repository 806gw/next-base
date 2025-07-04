import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next base", // 페이지 메타 데이터 타이틀
  description: "Next base templete by 806gw", // 페이지 메타 데이터 설명
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	)
}
