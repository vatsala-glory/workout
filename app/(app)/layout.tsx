import Navbar from "@/components/Navbar";

export default function AppLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <div className="flex w-full h-full flex-col"> 
        {<Navbar />}
        {children}
    </div>
 
      
    );
  }