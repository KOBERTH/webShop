import { useNavBar } from "../../hooks/useNavBar.ts";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function NavBar ({openCart, openSearch}: {openCart: () => void, openSearch: () => void}) {
  const { email, categories, profile, handleCategories, handleLogout, handleProfile } = useNavBar();

  return (
    <div className="w-full px-1 z-40 sticky bottom-1 md:top-0 md:px-0 md:pl-1 md:py-1 md:w-fit">
      <MobileNav
        categories={categories}
        email={email}
        profile={profile}
        handleCategories={handleCategories}
        handleLogout={handleLogout}
        handleProfile={handleProfile}
        openCart={openCart}
        openSearch={openSearch}
      />

      <DesktopNav
        email={email}
        handleLogout={handleLogout}
        openCart={openCart}
        openSearch={openSearch}
      />
    </div>
  )
}