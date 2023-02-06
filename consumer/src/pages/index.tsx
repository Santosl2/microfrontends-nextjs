import dynamic from "next/dynamic";
const Header = dynamic(
  () => import("header/component/Header").then((m) => m.Header),
  {
    ssr: false,
  }
);

// const getCalc = (await import("utils")).default;

export default function Home() {
  // const result = getCalc();

  return (
    <>
      <h1>Micro-frontends Next JS </h1>

      <Header />
    </>
  );
}
