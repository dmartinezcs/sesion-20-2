'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home=() =>{

  const router= useRouter();

  return (
   <div>
    <h1>1ªpagina</h1>
    <Link href={"/patata"}>te lleva a patata</Link>
    <br/>
    <button onClick={()=>{
      router.push("/patata");
    }}>Te lleva a patata con logica</button>
    <button onClick={()=>{
      router.replace("/patata");
    }}>Te lleva a patata pero sin historia</button>
   </div> 
  );
}

export default Home;