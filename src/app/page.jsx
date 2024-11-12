import Button from "@/ui/Button";
import Link from "next/link";
import Header from "@/components/Header";
export const metadata = {
  title: "خانه  - وب اپلیکیشن مدیریت بلاگ",
};

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        سیستم مدیریت خدمات اشتغال 
      </h1>
      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
          سیستم خدمات اشتغال یکی از بهترین سیستم های در حال حاضر میباشد 
          <br /> بتونی بلاگ بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد
          کنی!
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <Button variant="outline">
            <Link href="/blogs">مطالعه بلاگ ها</Link>
          </Button>
          <Button variant="primary">
            <Link href="/profile">مدیریت بلاگ ها</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
