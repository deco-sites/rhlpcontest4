export interface Props {
    text: string;
    description: string;
    order: "flex-row" | "flex-row-reverse";
    mobileOrder: "flex-col" | "flex-col-reverse";
    anchors?: {
        text: string;
        rootId: string;
    }[];
}

export default function AboutUs(
    { text, description, mobileOrder, order, anchors }: Props,
) {
    return (
        <>
            <div class="flex flex-col mt-10">
                <div
                    class={`flex ${mobileOrder} lg:${order} lg:container-hero px-5 2xl:px-0 lg:text-with-description-grid lg:justify-center`}
                >
                    <h3
                        class="text-center lg:text-left font-bold text-[32px] leading-[39px] flex items-center mx-auto mb-[18px] text-primary lg:text-[46px] lg:leading-[55px]"
                        dangerouslySetInnerHTML={{ __html: text }} />
                    <p
                        class="mx-[20px] text-justify lg:text-left text-primary  text-[20px] leading-[33px] font-normal lg:self-center lg:mx-0"
                        dangerouslySetInnerHTML={{ __html: description }} />
                    {anchors && anchors.length > 0
                        ? anchors.map((link, index) => (
                            <a
                                class={`mx-[20px] mt-[40px] lg:mx-0 flex justify-center items-center rounded-[30px] border-solid border-2 text-input h-[50px]  border-checkbox font-semibold focus:border-subcolor lg:px-[20px] ${index % 2 !== 0 ? "justify-self-start" : "justify-self-end"}`}
                                href={`${link.rootId}`}
                            >
                                {link.text}
                            </a>
                        ))
                        : null}
                </div>
            </div></>
    );
}
