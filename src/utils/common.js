import { CgSpaceBetween } from "react-icons/cg"; // this import is fine if you're using the icon elsewhere

export const SliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,   // ✅ fixed (was SpaceBetween)
    breakpoints: {
        400: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
    }
};
