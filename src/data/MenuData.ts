interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "#home", // Links to the Hero section
        has_dropdown: false,
    },
    {
        id: 2,
        title: "Services",
        link: "#use-case", // Links to the Cause (Services) section
        has_dropdown: false,
    },
    {
        id: 3,
        title: "Pricing",
        link: "#pricing", // Links to the Price section
        has_dropdown: false,
    },
    {
        id: 4,
        title: "About",
        link: "#about", // Links to the IntroArea (About) section
        has_dropdown: false,
    },
    {
        id: 5,
        title: "FAQ",
        link: "#faq", // Links to the Faq section
        has_dropdown: false,
    },
    {
        id: 6,
        title: "Contact",
        link: "#contact", // Links to the Cta (Contact) section
        has_dropdown: false,
    },
];

export default menu_data;
