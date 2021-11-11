import Link from "next/link";


export default function Navigation() {

  return (
    <div>
      <div className="h-1 bg-secondary rounded-lg mb-4"></div>
      <nav className="flex justify-between gap-10 text-secondary">
        <Link href="/amount">
          <a className="">Amount</a>
        </Link>

        <Link href="/recipient">
          <a className="">Recipient</a>
        </Link>

        <Link href="/receiver">
          <a className="">Receiver</a>
        </Link>

        <Link href="/pay">
          <a className="">Pay</a>
        </Link>
      </nav>
    </div>
  );
}
