import Link from "next/link"

export default function about() {
    return (
      <>
        about <br/>
        <Link href="/" className="flex h-max align-middle justify-center">Home Page</Link>
      </>
    )
  }