import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    image?: ImageWidget;
    alt?: string;
    width?: number;
    height?: number;
}

export default function MainBanner({
    image,
    alt = "Banner principal",
    height,
    width,
}: Props) {
    return (
        <div class="w-full max-h-[1080px]">
            <Image class="w-full h-full"
                src={image || ""}
                alt={alt || ""}
                height={height || 20}
                width={width || 50}
            />
        </div>
    )
}