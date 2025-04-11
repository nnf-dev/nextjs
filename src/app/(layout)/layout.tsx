interface Props {
    children: React.ReactNode;
    header: React.ReactNode;
    footer: React.ReactNode;
}
export default function Layout({ children, header, footer }: Props) {
    return (
        <>
            <header>{header}</header>

            <main>{children}</main>

            <footer>{footer}</footer>
        </>
    );
}
