import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface Props {
    titleIcon: {
        image?: ImageWidget;
        width?: string;
        height?: string;
    }
    title: string;
    navbar: {
        url: string;
        title: string;
    }[];
}

function Header({ titleIcon, title, navbar }: Props) {
    return (
        <header class="bg-white border-b-solid border-b-[1px] border-b-black px-4 lg:px-0">
            <section class="max-w-[1440px] mx-auto flex items-center justify-between py-4">
                <div class="flex items-center">{titleIcon && (
                    <Image
                        src={titleIcon.image || ""}
                        alt="title icon"
                        height={titleIcon.height || 20}
                        width={titleIcon.width || 35}
                    />
                )} <span class="text-lg">{title}</span></div>
                <div class="flex gap-3">
                    {navbar.map((items) => (
                        <a href={items.url}><span class="text-sm">{items.title}</span></a>
                    ))}
                </div>
            </section>
        </header>
    )

}

export default Header;