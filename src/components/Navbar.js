import { useState } from 'react';
import {
    createStyles,
    Header,
    Container,
    rem,
} from '@mantine/core';


const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    header: {
        position: 'relative',
        zIndex: 1,
    },
    container: {
        height: "100%",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    links: {
        [theme.fn.smallerThan('lg')]: {
            display: 'none',
        },
    },
    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: "white",
        fontSize: theme.fontSizes.xl,
        fontWeight: 100,

        '&:hover': {
            backgroundColor: theme.colors.dark[6],
        },
    },
    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.colors.gray[8]
        },
    },
}));

const links = [
    {
        "link": "/index",
        "label": "Index"
    },
    {
        "link": "/new",
        "label": "New"
    },
    {
        "link": "/show",
        "label": "Show"
    },
    {
        "link": "/edit",
        "label": "Edit "
    },
    {
        "link": "/destroy",
        "label": "Destroy "
    }
]




const Navbar = () => {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));
    return (
        <Header
            height={HEADER_HEIGHT}
            w="100%"
            bg="gray.7"
        >
            <Container
                className={classes.container}
                fluid
            >
                {items}
            </Container>
        </Header>
    )
}

export default Navbar
