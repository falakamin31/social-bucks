import { Html, Head, Main, NextScript } from "next/document";
import { eina } from "@/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={eina.variable}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
