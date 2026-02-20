'use client'
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";

const PatataPage=()=>{

    const router=useRouter();
    return(
        <div>
            <button onClick={()=>{
      router.back;
        }}>Te lleva atrás
            </button>
            <h2>Esta la pagina patata y no la primera</h2>
                <Link href={"/"}>te lleva a home</Link>

        </div>

    );
}

export default PatataPage;