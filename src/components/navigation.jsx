export default function Navigation() {
  return (
    <div>
      <div className=" rounded-lg mb-4" style={{height:"4px", backgroundColor: "#EDEDED"}}></div>
      <nav className="flex justify-between gap-10 text-secondary font-normal text-base">
        <button className="" >Amount</button>

        <button className="">Recipient</button>

        <button className="">Receiver</button>

        <button className="">Pay</button>
      </nav>
    </div>
  );
}
