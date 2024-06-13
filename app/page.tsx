import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/gallery-wall');
  }, []);

  return null;
  // return (
  //   <center className="p-12 space-y-5">
  //     <Link className="text-5xl font-serif" href={"/gallery-wall"}>
  //       Gallery Wall
  //     </Link>
  //     <div></div>
  //     <Link className="text-5xl font-serif" href={"/vacation-countdown"}>
  //       Vacation Countdown
  //     </Link>
  //   </center>
  // );
}
