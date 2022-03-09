import navbarSearchAndPinList from "@/layouts/components/navbar/navbarSearchAndPinList"
import themeConfig from "@/../themeConfig.js"
import colors from "@/../themeConfig.js"


// /////////////////////////////////////////////
// Variables
// /////////////////////////////////////////////
const userDefaults = {
	id: 0,
	name: null,
	email: null,
  email_verified_at: null,
  created_at: null,
  updated_at: null
}


// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
    user: JSON.parse(localStorage.getItem('user')) || userDefaults,
	  token: localStorage.getItem('access_token') || null,
    bodyOverlay             : false,
    isVerticalNavMenuActive : true,
    mainLayoutType          : themeConfig.mainLayoutType || "vertical",
    navbarSearchAndPinList  : navbarSearchAndPinList,
    reduceButton            : themeConfig.sidebarCollapsed,
    verticalNavMenuWidth    : "default",
    verticalNavMenuItemsMin : false,
    scrollY                 : 0,
    starredPages            : navbarSearchAndPinList["pages"].data.filter((page) => page.is_bookmarked),
    theme                   : themeConfig.theme || "dark",
    themePrimaryColor       : colors.primary,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar & navbar component
    windowWidth: null,
}

export default state
