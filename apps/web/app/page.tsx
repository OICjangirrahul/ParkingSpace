import Image from "next/image";
import { add } from '../../../libs/sample/dist';

export default function Home() {
  return (
   <h1>{add(123,34)}</h1>
  );
}
