import Link from "next/link";
import { GetServerSideProps } from 'next';

// export default function Home() {
//   return (
//     <center className="p-12 space-y-5">
//       <Link className="text-5xl font-serif" href={"/gallery-wall"}>
//         Gallery Wall
//       </Link>
//       <div></div>
//       <Link className="text-5xl font-serif" href={"/vacation-countdown"}>
//         Vacation Countdown
//       </Link>
//     </center>
//   );
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Location', '/gallery-wall');
  context.res.statusCode = 302;
  return { props: {} };
};

export default function Home() {
  return null;
}
