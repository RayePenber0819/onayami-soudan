import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            src="/onayami-soudan.png"
            alt="匿名のお悩み相談システム"
        />
    );
}