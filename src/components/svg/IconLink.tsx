export default function IconLink({link, svg, hoverText}: {link: string, svg: JSX.Element , hoverText: string}) {
    return (
        <a href={link} target={"_blank"} rel={"noopener noreferrer"} title={hoverText}>{svg}</a>
    )
}