import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const activeLink: CSSProperties = {
    color: '#7048e8',
    textDecoration: 'underline',
}

interface props {
    name: string, 
    href: string,
}

export const ActiveLink: FC<props> = ({ name, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? activeLink : undefined }>{ name }</a>
        </Link>
    )
}
