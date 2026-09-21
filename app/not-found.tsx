import Link from "next/link";
import { Header } from "../components/shell";
export default function NotFound() {
  return (
    <>
      <Header />
      <main
        className="landing"
        id="main-content"
        style={{ paddingTop: 100, paddingBottom: 100 }}
      >
        <span className="eyebrow">404 / NO RESOURCE HERE</span>
        <h1 style={{ fontSize: 45, margin: "22px 0" }}>
          This path is not dead end, we are pushing updates.
        </h1>
             <Link href="/" className="button">
          Back to Home →
        </Link>
      </main>
    </>
  );
}
