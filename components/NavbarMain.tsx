
import { HrefLinks } from "@/lib/HrefLinks";
import { SidebarSheet } from "@/components/SidebarSheet";
import Link from "next/link";



export function NavbarMain() {


  return (

    <nav>
      <div className="">
        <div className="flex  justify-between  ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-12">
            {/* logo */}
            {/* <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
          
                  <span>Logo.io</span>
                </a>
              </div> */}
            {/* primary */}
            <div className="hidden lg:flex gap-8 mx-6">
              <Link href={HrefLinks.homePage()} className="">
                Home
              </Link>
              <Link href={HrefLinks.dashboardPage()} className="">
                Dashboard
              </Link>
              <Link href={HrefLinks.dashboardListPage()}>List</Link>
              <Link href={HrefLinks.dashboardCreateDemoPage()}>Create Demo</Link>

            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">

            <div className="lg:hidden flex items-center">


              <SidebarSheet />
            </div>
          </div>
        </div>
      </div>

    </nav>

  );
}

